import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { storage, database } from '../../firebase';

function Signup() {

    const { signup } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);

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
                setError(err);
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
            }

        }
        catch (err) {
            setError(err);
            setTimeout(() => setError(''), 2000);
            setLoading(false);
        }
    }

    const handleFileUpload = (e) => {
        let file = e.target.files[0];
        
        if (file != null) {
            console.log(file);
            setFile(file);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="profileImage">Profile Image: </label>
                    <input type="file" accept="image/*" onChange={handleFileUpload} />
                </div>
                <button type="submit" disabled={loading}>Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;
