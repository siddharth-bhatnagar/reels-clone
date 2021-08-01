import React, { useState, useEffect } from 'react';
import { database } from '../../firebase/firebase';
import { useStyles } from './Style';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import { IconButton, Avatar, Typography, Backdrop, Hidden, Container, Card, CardMedia, CardHeader, CardContent, Divider, CardActions, Modal, CircularProgress, Grid, Dialog } from '@material-ui/core';
import Video from '../Video/Video';
import Likes from '../Likes/Likes';
import AddComments from '../AddComments/AddComments';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { Alert } from '@material-ui/lab';
import Comments from '../Comments/Comments';
import './Scroll.css';

function Posts({ user = null }) {

    const classes = useStyles();
    const [posts, setPosts] = useState(null);
    const [openID, setOpenID] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleOpen = (id) => {
        setOpenID(id);
    }

    const handleClose = () => {
        setOpenID(null);
    }

    const callback = (entries) => {
        entries.forEach((element) => {
            // console.log(element);
            let child = element.target.childNodes[0];
            child.play().then(() => {
                //if this video is not in viewport then pause it
                if (!child.paused && !element.isIntersecting) {
                    child.pause();
                }
            })
        });
    }

    const observer = new IntersectionObserver(callback, {
        threshold: 0.90
    });

    useEffect(() => {
        let parr = [];
        const unsubscribe = database.posts.orderBy('createdAt', 'desc').onSnapshot((querySnapshot) => {
            parr = [];
            querySnapshot.forEach((doc) => {
                let data = { ...doc.data(), postDocID: doc.id };
                parr.push(data);
            });
            setPosts(parr);
        });
        return unsubscribe;
    }, []);

    useEffect(() => {
        let videos = document.querySelectorAll('.videos');
        videos.forEach((video) => {
            observer.observe(video);
        });
        return () => {
            observer.disconnect();
        }
    }, [posts]);

    return (
        <>{error ? <Alert severity="error">{error}</Alert> : <></>}
            <Container className={classes.mainContainer}>
                {
                    posts === null ? <CircularProgress color="secondary" /> :
                        <Grid className={classes.reelsContainer} container spacing={4} >
                            {
                                posts.map((post) => (
                                    <Grid item xs={12} sm={12} md={12} lg={12} key={post.postDocID}>
                                        <Card variant="outlined" className={classes.postCard}>
                                            <CardHeader
                                                avatar={
                                                    <Avatar
                                                        aria-label="profile-img"
                                                        className={classes.avatar}
                                                        src={post?.userProfile}
                                                    />
                                                }

                                                title={<Typography>{post?.userName}</Typography>}
                                            />
                                            <CardMedia className={classes.reels}>
                                                <div className='videos'><Video source={post?.postURL} id={post?.postID} /></div>
                                            </CardMedia>
                                            <CardActions disableSpacing style={{ height: "1.5rem" }}>
                                                <Likes user={user} post={post} />
                                                <>
                                                    <IconButton onClick={() => handleOpen(post.postID)}>
                                                        <ChatBubbleOutlineOutlinedIcon />
                                                    </IconButton>
                                                    <Modal
                                                        aria-labelledby="transition-modal-title"
                                                        aria-describedby="transition-modal-description"
                                                        className={classes.modal}
                                                        open={openID === post.postID}
                                                        onClose={handleClose}
                                                        closeAfterTransition
                                                        BackdropComponent={Backdrop}
                                                        BackdropProps={{
                                                            timeout: 500,
                                                        }}
                                                    >
                                                        <Container className={classes.container}>
                                                            <Hidden xsDown smDown>
                                                                <Card className={classes.videoContainer}>
                                                                    <CardMedia className={classes.video}>
                                                                        <Video source={post?.postURL} autoplay="true"></Video>
                                                                    </CardMedia>
                                                                </Card>
                                                            </Hidden>
                                                            <Card className={classes.commentBox}>
                                                                <CardHeader
                                                                    avatar={
                                                                        <Avatar
                                                                            aria-label="profile-img"
                                                                            className={classes.avatar}
                                                                            src={post?.userProfile}
                                                                        />
                                                                    }
                                                        
                                                                    className='scroll ha'
                                                                    title={<><div style={{ fontWeight: "bold", color: "#444" }}>{post?.userName}</div><Typography variant="body2" color="textSecondary">{post?.caption}</Typography></>}
                                                                />
                                                                <Divider />
                                                                <Comments className='scroll' post={post} posts={posts} user={user} />
                                                                <Divider />
                                                                <AddComments post={post} user={user} setError={setError} loading={loading} setLoading={setLoading} />
                                                            </Card>
                                                        </Container>
                                                    </Modal>
                                                </>
                                                <IconButton>
                                                    <SendOutlinedIcon />
                                                </IconButton>
                                                {post.likes.length !== 0 ? post.likes.length === 1 ? <p className={classes.likeStat}>1 like</p> : <p className={classes.likeStat}>{post.likes.length} likes</p> : <></>}
                                            </CardActions>

                                            <Divider />
                                            <CardContent>
                                                <Typography variant="body2" color="textSecondary"><span style={{ fontWeight: "bold", color: "#444" }}>{post?.userName}</span> {post?.caption}</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))
                            }
                        </Grid>
                }
            </Container>
        </>
    );
}

export default Posts;