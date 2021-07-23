import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyA0EjGhwsErLAS2REwinEGifidGnZz_HmI",
    authDomain: "reels-a503e.firebaseapp.com",
    projectId: "reels-a503e",
    storageBucket: "reels-a503e.appspot.com",
    messagingSenderId: "1001168718926",
    appId: "1:1001168718926:web:4d27169c91a6bc93b4471f"
});

const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const database = {
    users: firestore.collection('users'),
    getCurrentTimeStamp: firebase.firestore.FieldValue.serverTimestamp
};