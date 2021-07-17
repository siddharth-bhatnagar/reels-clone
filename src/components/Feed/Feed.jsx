import React, { useContext, useEffect, useState } from 'react'
import Header from '../Header/Header';
import { AuthContext } from '../../context/AuthProvider';
import { database } from '../../firebase'
import CircularProgress from '@material-ui/core/CircularProgress';
import UploadFile from '../UploadFile/UploadFile';
import './Feed.css'
function Feed() {
    const { currentUser } = useContext(AuthContext);
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const unsub = database.users.doc(currentUser.uid).onSnapshot((doc) => {
            // console.log(doc.data());
            setUserData(doc.data())
        })
    }, [currentUser])
    return (
        <>
            {userData == null ? <CircularProgress /> : <>
                <Header userData={userData} />
                <div style={{ height: '1.5vh' }} />
                <div className='feed-container'>
                    <div className='center'>
                        <UploadFile userData={userData} />
                    </div>
                </div>

            </>
            }
        </>
    )
}

export default Feed