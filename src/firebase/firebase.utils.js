import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyB3uJxFSTpQpdqN9XOT3HtDrRi0aY3_y-Q',
  authDomain: 'budgety-database.firebaseapp.com',
  projectId: 'budgety-database',
  storageBucket: 'budgety-database.appspot.com',
  messagingSenderId: '797033158597',
  appId: '1:797033158597:web:e36e130ca99fcdf8679dac',
};

firebase.initializeApp(config);

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
