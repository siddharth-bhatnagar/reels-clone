import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { storage, database } from '../../firebase/firebase';
import LinkButton from '../LinkButton/LinkButton';
import { Grid, Card, TextField, Button, CardMedia, Typography, LinearProgress } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Alert } from '@material-ui/lab';
import { useStyles } from './Style';

function Signup() {

    const classes = useStyles();
    const history = useHistory();
    const { signup, currentUser } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);

    useEffect(() => {
        if (currentUser) {
            history.push('/');
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            let res = await signup(email, password);
            let uid = res.user.uid;
            console.log(uid);

            // Creates user/uid directories and stores file with profileImage name
            const uploadTaskListener = storage.ref(`/users/${uid}/profileImage`).put(file);
            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            // fn1 -> progress tracking
            // fn2 -> error
            // fn3 -> success
            uploadTaskListener.on('state_changed', progressTracker, errorHandler, taskSuccessful);

            function progressTracker(snapshot) {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            }

            function errorHandler(err) {
                setError(err.message);
                setTimeout(() => setError(''), 2000);
                setLoading(false);
            }

            async function taskSuccessful() {
                let downloadURL = await uploadTaskListener.snapshot.ref.getDownloadURL();
                console.log(downloadURL);
                // users -- collection name
                // uid -- document name
                // object -- information stored by the document
                await database.users.doc(uid).set({
                    email: email,
                    userID: uid,
                    username: name,
                    createdAt: database.getCurrentTimeStamp(),
                    profileURL: downloadURL,
                    postIDS: []
                });
                setLoading(false);
                console.log("User has successfully registered!");
                history.push('/');
            }
        }
        catch (err) {
            setError(err.message);
            setTimeout(() => setError(''), 2000);
            setLoading(false);
        }
    }

    const handleFileUpload = (e) => {
        console.log("handleFileUpload");
        let file = e.target.files[0];
        if (file != null) {
            console.log(file);
            setFile(file);
        }
    }

    return (
        <>  
            {loading ? <LinearProgress /> : <></>}
            {error ? <Alert severity="error">{error}</Alert> : <></>}
            <Grid container spacing={4} className={classes.mainContainer}>
                <Grid item xs={12} sm={12} md={12} lg={12}>

                    <div style={{ position: "relative" }}>
                        <Card variant="outlined" className={classes.card}>

                            <CardMedia
                                image="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Black-Logo.wine.svg"
                                className={classes.cardLogo}
                            />
                            <Grid container spacing={3}>
                                <Typography
                                    className={classes.cardText}
                                    variant="h6"
                                    size="small"
                                    gutterBottom
                                >
                                    Sign up to see photos and videos from your friends.
                                </Typography>
                                <form>

                                    <TextField
                                        InputLabelProps={{ style: { fontSize: 18 } }}
                                        inputProps={{ style: { fontSize: 18 } }}
                                        fullWidth={true}
                                        className={classes.textField}
                                        variant="outlined" size="small"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        type="text"
                                        label="Name"
                                        placeholder="John Doe"
                                    />

                                    <TextField
                                        InputLabelProps={{ style: { fontSize: 18 } }}
                                        inputProps={{ style: { fontSize: 18 } }}
                                        fullWidth={true}
                                        className={classes.textField}
                                        variant="outlined" size="small"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        label="Email"
                                        placeholder="johndoe@example.com"
                                    />

                                    <TextField
                                        InputLabelProps={{ style: { fontSize: 18 } }}
                                        inputProps={{ style: { fontSize: 18 } }}
                                        fullWidth={true}
                                        className={classes.textField}
                                        variant="outlined"
                                        size="small"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        label="Password"
                                    />

                                    <Button
                                        variant="contained"
                                        size="small"
                                        onChange={handleFileUpload}
                                        className={classes.btn}
                                        style={{ backgroundColor: "#DC004E", color: "#fff" }}
                                    >
                                        Profile Image
                                        <TextField
                                            type="file"
                                            style={{ opacity: "0", position: "absolute", width: "100%", height: "100%" }}>
                                        </TextField>
                                    </Button>

                                    <Button
                                        className={classes.btn}
                                        disabled={loading}
                                        color="primary"
                                        size="small"
                                        variant="contained"
                                        onClick={handleSubmit}
                                    >
                                        Sign Up
                                    </Button>
                                </form>

                                <Typography
                                    className={classes.textElement}
                                    variant="body1"
                                    gutterBottom
                                    size="small"
                                >
                                    Have an account?
                                    <LinkButton content=" Log In" routeLink="/login" />
                                </Typography>
                            </Grid>

                        </Card>
                    </div>
                </Grid>
            </Grid>

        </>
    );
}

export default Signup;
