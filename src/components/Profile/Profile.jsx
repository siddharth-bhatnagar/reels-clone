import React, { useState, useEffect, useContext } from 'react';
import { Grid, Avatar, Container, Divider, CircularProgress } from '@material-ui/core';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import HeaderBar from '../Header/Header';
import { AuthContext } from '../../context/AuthProvider';
import { database } from '../../firebase/firebase';
import { useStyles } from './Style';

function Profile() {

    const classes = useStyles();

    const [user, setUser] = useState();
    const [pageLoading, setPageLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [videos, setVideos] = useState([]);
    const { currentUser } = useContext(AuthContext);

    // Get currentuser Data
    useEffect(async () => {
        let dataObject = await database.users.doc(currentUser.uid).get();
        setUser(dataObject.data());
        setPageLoading(false);
    }, [])

    // Get all posts to display in feed
    useEffect(async () => {
        setLoading(true);

        // Since snapshot is realtime we receive from unsubscribe function which has to be returned during cleanup
        let unsubscribe = await database.posts.onSnapshot(async (snapshot) => {
                    let videos = snapshot.docs.map((doc) => doc.data());

                    // Extract videosURL from post collection and user's data from user collection
                    // ProfileImg of the author of the post(video)
                    let videosDataArrFromFireStore = [];
                    for (let i = 0; i < videos.length; i++) {
                        let { postURL: videoUrl, userID, likes, caption } = videos[i];
                        let puid = snapshot.docs[i].postID;
                        let userObject = await database.users.doc(userID).get();
                        let { profileURL: userProfileImageURL, username } = userObject.data();

                        // For likes, check if current user has liked the post
                        if (userID === currentUser.uid)
                            videosDataArrFromFireStore.push({
                                videoUrl,
                                puid,
                                likesCount: likes.length,
                            });
                    }

                    setLoading(false);
                    // Set Received videos for further dispaly in feed
                    setVideos(videosDataArrFromFireStore);
                })

    }, [])

    return (

        pageLoading === true ? <CircularProgress color="secondary" className={classes.circularLoader} /> :
            <Container style={{ backgroundColor: "", width: "60vw", marginTop: "5rem" }}>
                <HeaderBar loading={loading} setLoading={setLoading} user={user}></HeaderBar>
                <Grid container style={{ minHeight: "30vh", marginBottom: "3rem" }}>
                    <Grid item xs={12} sm={12} md={5} lg={5}
                        className={classes.imageSection}>
                        <Avatar alt="Profile" className={classes.userImageIcon} src={user?.profileURL} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} lg={7} className={classes.userDescription}>
                        <div>
                            <div className={classes.userName}>{user.username}</div>
                            <div style={{ color: "#485460" }}>
                                <span style={{ fontWeight: "500", color: "#3d3d3d", fontSize: "large" }}>{user.postIDS.length}</span> posts
                            </div>
                            <div style={{ color: "#485460" }}>{user.bio}</div>
                        </div>
                    </Grid>
                </Grid>

                <Divider />

                <div className={classes.videoSection}>
                    {
                        // <h1>Hello</h1>
                        videos.map((videoObj) => {
                            return (
                                <div className={classes.videoContainer} key={videoObj.puid}>
                                    <Video
                                        src={videoObj.videoUrl}
                                        id={videoObj.puid}
                                    ></Video>
                                    <div className={classes.overlayContainer}
                                        onMouseOver={(e) => e.currentTarget.style.opacity = "1"}
                                        onMouseOut={(e) => e.currentTarget.style.opacity = "0"}
                                        onClick={handlePostSound}>
                                        <LikeIcon />&nbsp;{videoObj.likesCount} {videoObj.likesCount === 1 ? "like" : "likes"}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
    )
}

function Video(props) {
    return (
        <video
            id={props.id}
            loop
            width="250"
            muted={true}
            autoPlay
            style={{ minHeight: "100%" }}
            src={props.src}>
        </video>
    )
}

function handlePostSound(e) {
    e.currentTarget.previousSibling.muted = !e.currentTarget.previousSibling.muted;
}

export default Profile;