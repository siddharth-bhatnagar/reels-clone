import React, { useState } from 'react';
import { Button, TextField, Modal, Backdrop, Fade } from '@material-ui/core';
import { useStyles } from './Style';
import { Alert } from '@material-ui/lab';
import { v4 as uuidv4 } from 'uuid';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import { storage, database } from '../../firebase/firebase';

function UploadVideo({ loading, setLoading, user }) {
    const classes = useStyles();
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [caption, setCaption] = useState('');
    const types = ['video/mp4', 'video/webm', 'video/ogg'];

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setFile(null);
    };

    const handlePostUpload = () => {
        setOpen(false);
        setDataInFirebase();
    }

    const handleFileUpload = (e) => {
        const file = e?.target?.files[0];
        // console.log(file);
        if (!file) {
            setError('Please select a file!');
            setTimeout(() => setError(null), 2000);
            return;
        }
        // file size greater than 100 mb
        if (file.size / (1024 * 1024) > 100) {
            setError('Please select a video smaller than 100 mb');
            setTimeout(() => setError(null), 2000);
            return;
        }
        // if file type doesn't match requirements
        if (types.indexOf(file.type) === -1) {
            setError('Please select a video!');
            setTimeout(() => setError(null), 2000);
            return;
        }

        setFile(file);
        handleOpen();
    }

    const setDataInFirebase = () => {
        setLoading(true);
        // randomly generated string to be assigned as postID
        const id = uuidv4();

        // uploading video
        const uploadTaskListener = storage.ref(`/posts/${user.userID}/${file.name}`).put(file);

        uploadTaskListener.on('state_changed', progressTracker, errorHandler, taskSuccessful);
        function progressTracker(snapshot) {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        }

        function errorHandler(err) {
            setError(err.message);
            setTimeout(() => setError(null), 2000);
            setLoading(false);
        }

        async function taskSuccessful() {
            // uploaded video's URL
            uploadTaskListener.snapshot.ref.getDownloadURL().then((url) => {
                let postObject = {
                    comments: [],
                    likes: [],
                    postID: id,
                    postURL: url,
                    userName: user?.username,
                    userID: user?.userID,
                    userProfile: user?.profileURL,
                    caption: caption,
                    createdAt: database.getCurrentTimeStamp(),
                }

                // Adding new document to post collection
                // Document Name will be assigned by firebase
                database.posts.add(postObject).then(async (docRef) => {
                    // console.log(docRef);
                    await database.users.doc(user.userID).update({
                        postIDS: [...user.postIDS, docRef.id]
                    });
                }).then(() => {
                    console.log("Video upload successful!");
                    setLoading(false);
                }).catch((err) => {
                    setError(err.message);
                    setTimeout(() => setError(null), 2000);
                    setLoading(false);
                });
            });
        }

    }

    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2
                            style={{
                                fontFamily: "Quicksand, sans-serif",
                            }} >Caption</h2>
                        <div>
                            <TextField
                                id="outlined-basic"
                                label="Description"
                                variant="outlined"
                                type="text"
                                fullWidth
                                color="secondary"
                                style={{ marginBottom: "2rem" }}
                                value={caption}
                                onChange={(e) => setCaption(e.target.value)} />
                        </div>
                        <Button
                            id="smash_btn"
                            variant="outlined"
                            color="secondary"
                            onClick={handlePostUpload}
                        >
                            Post
                        </Button>
                    </div>
                </Fade>
            </Modal>
            {
                error != null ? <Alert severity="error">{error}</Alert> :
                    <>
                        <input
                            color="primary"
                            type="file"
                            accept="file"
                            onChange={handleFileUpload}
                            id="icon-button-file"
                            className={classes.input}
                            disabled={loading}
                        />
                        <label htmlFor="icon-button-file">
                            <Button
                                variant="outlined"
                                disabled={loading}
                                color="secondary"
                                component="span"
                                size="small"
                                className={classes.button}
                            >
                                <MovieFilterIcon className={classes.icon} />
                                Video
                            </Button>
                        </label>
                    </>
            }
        </>
    );
}

export default UploadVideo;
