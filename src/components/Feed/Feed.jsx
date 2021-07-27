import React, { useState, useEffect, useContext } from 'react';
import Header from '../Header/Header';
import { AuthContext } from '../../context/AuthProvider';
import { database } from '../../firebase/firebase';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import UploadVideo from '../UploadVideo/UploadVideo';
import { Container } from '@material-ui/core';
import { useStyles } from './Style';

function Feed() {
    const classes = useStyles();
    const { currentUser } = useContext(AuthContext);
    const [userData, setUserData] = useState();

    useEffect(() => {
        const unsubscribe = database.users.doc(currentUser.uid).onSnapshot((doc) => {
            setUserData(doc.data());
            return () => {
                unsubscribe();
            }
        });
    }, [currentUser]);

    return (
        <>
            {
                userData == null ? <LoadingScreen /> :
                    <>
                        <Header user={userData} />
                        <Container className={classes.feedContainer}>
                            <div className={classes.uploadBtn}>
                                <UploadVideo user={userData} />
                            </div>
                        </Container>
                    </>
            }
        </>
    );
}

export default Feed;
