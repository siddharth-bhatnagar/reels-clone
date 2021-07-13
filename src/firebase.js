import firebase from "firebase";
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyBLBkx8sFoMLcc7d5Cq0VRFxJoBTh0t0kM",
    authDomain: "reels-clone-4528d.firebaseapp.com",
    projectId: "reels-clone-4528d",
    storageBucket: "reels-clone-4528d.appspot.com",
    messagingSenderId: "215838351407",
    appId: "1:215838351407:web:e1dd3729ae93971d6aa6da"
});

const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const database = {
    users: firestore.collection('users'),
    getCurrentTimeStamp: firebase.firestore.FieldValue.serverTimestamp
};

