import React, { useState, useContext } from 'react';
import { useStyles } from './style';
import { AuthContext } from '../../context/AuthProvider';
import { Grid, Hidden, Paper, CardMedia } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

function Login() {

    const classes = useStyles();
    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    return (
        <div>
            {/* <Grid container spacing={4} className={classes.mainContainer}>
                <Hidden xsDown smDown mdDown>
                    <Grid item xs={6} sm={6} md={6} lg={7}>
                        <CardMedia
                            image="https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png"
                            className={classes.cardMedia}
                        >
                            <div className={classes.carouselContainer}>
                                <Carousel animation="fade" indicators={false} swipe={false} navButtonsAlwaysInvisible={true} autoPlay={true} interval={5000}>
                                    <img src="https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg" alt="" />
                                    <img src="https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg" alt="" />
                                    <img src="https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg" alt="" />
                                    <img src="https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg" alt="" />
                                </Carousel>
                            </div>
                        </CardMedia>
                    </Grid>
                </Hidden>
                <Grid item xs={11} sm={8} md={6} lg={5}>
                    {loading ? }
                </Grid>
            </Grid> */}
            <LoadingScreen/>
        </div>
    );
}

export default Login;
