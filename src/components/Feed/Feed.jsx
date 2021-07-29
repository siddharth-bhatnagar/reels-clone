import React, { useState, useEffect, useContext } from 'react';
import Header from '../Header/Header';
import { AuthContext } from '../../context/AuthProvider';
import { database } from '../../firebase/firebase';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import UploadVideo from '../UploadVideo/UploadVideo';
import { Container } from '@material-ui/core';
import { useStyles } from './Style';
import Posts from '../Posts/Posts';

function Feed() {
    const classes = useStyles();
    const { currentUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState();

    useEffect(() => {
        // Attaching a listener on the current user's document in DB
        // Whenever there is change/update, callback is fired and it updates userdata state
        const unsubscribe = database.users.doc(currentUser.uid).onSnapshot((doc) => {
            setUserData(doc.data());
        });
        return unsubscribe;
    }, [currentUser]);

    

    return (
        <>
            {
                userData == null ? <LoadingScreen /> :
                    <>
                        <Header loading={loading} setLoading={setLoading} user={userData} />
                        <Container className={classes.feedContainer}>
                            <div className={classes.uploadBtn}>
                                <UploadVideo loading={loading} setLoading={setLoading} user={userData} />
                            </div>
                            <div className={classes.postsContainer}>
                                <Posts user={userData} />
                            </div>
                        </Container>
                    </>
            }
        </>
    );
}

export default Feed;
