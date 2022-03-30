import { initializeApp } from 'firebase/app';
import {
  getAuth, signInWithPopup, GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
/* eslint-disable no-unused-vars */
import {
  getFirestore, doc, getDoc, setDoc,
} from 'firebase/firestore';

// dev-camisa-web-app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCvgKEj7lNO4FbeyJrGPiJETOLZQ57uZCk',
  authDomain: 'dev-camisa.firebaseapp.com',
  projectId: 'dev-camisa',
  storageBucket: 'dev-camisa.appspot.com',
  messagingSenderId: '592987269041',
  appId: '1:592987269041:web:6c3c77a086584c8b9e7f90',
};

// Initialize Firebase
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  // create the user in the database if it doesn't exist
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return undefined;

  const user = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};

export const authenticateUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return undefined;

  const user = await signInWithEmailAndPassword(auth, email, password);
  return user;
};
