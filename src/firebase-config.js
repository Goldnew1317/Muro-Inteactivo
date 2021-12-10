import firebase from 'firebase/compat/app';
//import firebase from 'firebase/firebase-app-compat';
//import 'firebase/firestore';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCzJcOkio8Rjnj9VylBzfgvvugOpZUfiKM",
  authDomain: "muro-4178e.firebaseapp.com",
  projectId: "muro-4178e",
  storageBucket: "muro-4178e.appspot.com",
  messagingSenderId: "137149316168",
  appId: "1:137149316168:web:19b8b8db29854a73f76c7d"
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
export const db = firebase.firestore();
export default firebase;