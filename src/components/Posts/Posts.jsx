import React, { useState, useEffect } from 'react';
import { database } from '../../firebase/firebase';
import { useStyles } from './Style';
import { Avatar, CircularProgress, Container, Grid, Card, CardHeader, CardMedia } from '@material-ui/core';
import Video from '../Video/Video';

function Posts({ user = null }) {

    const classes = useStyles();
    const [posts, setPosts] = useState(null);

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
        <>
            <Container className={classes.mainContainer}>
                {
                    posts === null ? <CircularProgress color="secondary" /> :
                        <Grid className={classes.reelsContainer} container spacing={4} >
                            {
                                posts.map((post, index) => (
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

                                                title={post?.userName}
                                            />
                                            <CardMedia className={classes.reels}>
                                                <div className='videos'><Video source={post?.postURL} id={post?.postID} /></div>
                                            </CardMedia>
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
