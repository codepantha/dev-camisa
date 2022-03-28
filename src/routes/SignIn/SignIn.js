import React from 'react';
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
/* eslint-disable no-unused-vars */

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button type="button" onClick={logGoogleUser}>
        Sign in with Google
      </button>
    </div>
  );
};

export default SignIn;
