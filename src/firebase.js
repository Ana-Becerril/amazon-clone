import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAbf6WpjOjYxzDH4C08nRX0-VUyPOJQnrw",
  authDomain: "clone-35517.firebaseapp.com",
  projectId: "clone-35517",
  storageBucket: "clone-35517.appspot.com",
  messagingSenderId: "165744006236",
  appId: "1:165744006236:web:d728791529cfb60e45c299",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
