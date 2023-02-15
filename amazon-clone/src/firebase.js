import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxBKNeYaN6t-m5gnpGecio195Kjr1ywJ8",
  authDomain: "clone-99c07.firebaseapp.com",
  projectId: "clone-99c07",
  storageBucket: "clone-99c07.appspot.com",
  messagingSenderId: "1006904836825",
  appId: "1:1006904836825:web:50bf22837e88274584b4c8",
  measurementId: "G-YDFLL90ZL9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
