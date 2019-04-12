import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBiBFmJkzABvGBcX_ACee6Kc5WKL3LZWiU",
    authDomain: "reactjs-b199c.firebaseapp.com",
    databaseURL: "https://reactjs-b199c.firebaseio.com",
    projectId: "reactjs-b199c",
    storageBucket: "reactjs-b199c.appspot.com",
    messagingSenderId: "767036148571"
};
firebase.initializeApp(config);

export const database = firebase.database();
export const auth = firebase.auth();