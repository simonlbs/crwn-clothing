import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBngxWnCJkwwcKzExL4n2xzqrVREYO2_FU",
  authDomain: "crwn-db-f7e44.firebaseapp.com",
  projectId: "crwn-db-f7e44",
  storageBucket: "crwn-db-f7e44.appspot.com",
  messagingSenderId: "399611099623",
  appId: "1:399611099623:web:106976e6637f93bef8e542"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
