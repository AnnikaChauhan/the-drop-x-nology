import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCqaC-WbYM_23R4sNyQDwEIdiQZrzWcN4I",
    authDomain: "the-drop-x-nology.firebaseapp.com",
    databaseURL: "https://the-drop-x-nology.firebaseio.com",
    projectId: "the-drop-x-nology",
    storageBucket: "the-drop-x-nology.appspot.com",
    messagingSenderId: "887193883897",
    appId: "1:887193883897:web:250251765779418cb6be28",
    measurementId: "G-JNSNY5KTZP"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const providers = {
    google: new firebase.auth.GoogleAuthProvider()
};

export const firestore = firebase.firestore();

export default firebase;
