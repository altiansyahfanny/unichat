import firebase from "firebase/app";
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAWqBCLouOzAWOai4OxWKQwrF90yxXHu-o",
    authDomain: "unichat-a0888.firebaseapp.com",
    projectId: "unichat-a0888",
    storageBucket: "unichat-a0888.appspot.com",
    messagingSenderId: "735132406473",
    appId: "1:735132406473:web:befa74a6873cd534233318"
}).auth();