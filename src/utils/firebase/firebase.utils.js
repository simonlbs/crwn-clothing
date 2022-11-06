import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    sighInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider, 
  } from 'firebase/auth';

  import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
  } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBha1ubY_vUCUKnCaRk_jhPLxU3_UQGERQ",
  authDomain: "crwn-clothing-db-8279e.firebaseapp.com",
  projectId: "crwn-clothing-db-8279e",
  storageBucket: "crwn-clothing-db-8279e.appspot.com",
  messagingSenderId: "1080922833674",
  appId: "1:1080922833674:web:ef6387ff3bfe32134bb0f3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};