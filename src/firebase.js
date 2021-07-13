import firebase from "firebase";
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
require('dotenv').config();

firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.SENDER_ID,
    appId: process.env.APP_ID
});

const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const database = {
    users: firestore.collection('users'),
    getCurrentTimeStamp: firebase.firestore.FieldValue.serverTimestamp
};

// export default firebase;