import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABrYoSqJPx_UeaiO-QpHwLor2nJzTdeq0",
    authDomain: "clone-b1ab4.firebaseapp.com",
    databaseURL: "https://clone-b1ab4.firebaseio.com",
    projectId: "clone-b1ab4",
    storageBucket: "clone-b1ab4.appspot.com",
    messagingSenderId: "912671834348",
    appId: "1:912671834348:web:0f17a84359689b300665c9",
    measurementId: "G-W1LXSZ5ZS4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };