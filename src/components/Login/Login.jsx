import React, { useState, useContext, useEffect } from 'react';
import { useStyles } from './Style';
import { AuthContext } from '../../context/AuthProvider';
import { Grid, Hidden, CardMedia, Card, TextField, Button, Typography, LinearProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import Carousel from 'react-material-ui-carousel';
import LinkButton from '../LinkButton/LinkButton';
import { useHistory } from 'react-router-dom';

function Login() {

    const classes = useStyles();
    const { login, currentUser } = useContext(AuthContext);
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (currentUser !== null)
            history.push('/');
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log('Logging in user...');
            setLoading(true);
            await login(email, password);
            console.log("Success");
            setEmail('');
            setPassword('');
            setLoading(false);
            history.push('/');
        } catch (err) {
            setError(err.message);
            setTimeout(() => setError(''), 2000)
            setLoading(false)
        }
    }

    return (
        <div>
            <Grid container spacing={4} className={classes.mainContainer}>
                <Hidden xsDown smDown mdDown lgDown>
                    <Grid item xs={12} sm={12} md={12} lg={5}>
                        <div className={classes.leftMediaDiv}>
                            <CardMedia
                                className={classes.leftMediaContainer}
                                image="https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png"
                            >
                                <Carousel
                                    animation="fade"
                                    indicators={false}
                                    swipe={false}
                                    navButtonsAlwaysInvisible={true}
                                    autoPlay
                                    interval="5000"
                                    className={classes.carousel}
                                >
                                    <img
                                        className={classes.carouselImage}
                                        src="https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg"
                                        alt=""
                                    />
                                    <img
                                        className={classes.carouselImage}
                                        src="https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg"
                                        alt=""
                                    />
                                    <img
                                        className={classes.carouselImage}
                                        src="https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg"
                                        alt=""
                                    />
                                    <img
                                        className={classes.carouselImage}
                                        src="https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg"
                                        alt=""
                                    />
                                </Carousel>
                            </CardMedia>
                        </div>
                    </Grid>
                </Hidden>
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Card variant="outlined" className={classes.card}>
                        {loading ? <LinearProgress /> : <></>}
                        <CardMedia
                            image="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Black-Logo.wine.svg"
                            className={classes.cardLogo}
                        />
                        <Grid container spacing={3}>
                            <div>
                                <form style={{ width: "100%" }}>
                                    <TextField
                                        InputLabelProps={{ style: { fontSize: 18 } }}
                                        inputProps={{ style: { fontSize: 18 } }}
                                        // fullWidth={true}
                                        className={classes.textField}
                                        variant="outlined"
                                        size="small"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        label="Email"
                                        placeholder="johndoe@example.com"
                                        style={{
                                            margin: "1.5%",
                                            marginLeft: "9%",
                                        }}
                                    />

                                    <TextField
                                        InputLabelProps={{ style: { fontSize: 18 } }}
                                        inputProps={{ style: { fontSize: 18 } }}
                                        // fullWidth={true}
                                        className={classes.textField}
                                        variant="outlined"
                                        size="small"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        label="Password"
                                        style={{
                                            margin: "1.5%",
                                            marginLeft: "9%"
                                        }}
                                    />

                                    <Button
                                        disabled={loading}
                                        color="primary"
                                        size="small"
                                        variant="contained"
                                        onClick={handleSubmit}
                                        style={{
                                            margin: "1.5%",
                                            marginLeft: "9%",
                                            backgroundColor: "#0095F6",
                                            width: "82%",
                                            textTransform: "none",
                                            fontSize: "16px"
                                        }}
                                    >
                                        Log In
                                    </Button>
                                </form>
                            </div>
                            <Grid item xs={12} sm={12} md={12} lg={12} >
                                <Typography
                                    style={{ textAlign: "center", fontSize: "14px", marginTop: "10px", color: "#00376B" }}
                                    variant="body1"
                                    gutterBottom>
                                    <LinkButton content="Forgot Password?" routeLink="/signup" />
                                </Typography>
                            </Grid>

                        </Grid>
                    </Card>
                    <Card
                        variant="outlined"
                        style={{
                            marginTop: "2%", width: "85%", '@media (maxWidth: 1000px)': {
                                width: '100%'
                            }, margin: "2%"
                        }}
                    >
                        {error ? <Alert severity="error">{error}</Alert> :

                            <Typography
                                style={{ textAlign: "center", padding: "8%", fontSize: "14px", color: "#262626" }}
                                variant="body1"
                                gutterBottom>
                                Don't have an account?
                                <LinkButton content=" Sign up" routeLink="/signup" />
                            </Typography>
                        }
                    </Card>
                </Grid>
            </Grid>

        </div>
    );
}

export default Login;
