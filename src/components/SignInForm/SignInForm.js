import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import {
  authenticateUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import './SignInForm.styles.scss';
/* eslint-disable no-unused-vars */

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setCurrentUser } = useContext(UserContext);

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') setEmail(e.target.value);
    else setPassword(e.target.value);
  };

  const resetFormFields = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await authenticateUserWithEmailAndPassword(email, password);
      // set the currentUser in our UserContext
      setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Password is incorrect.');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <form onSubmit={handleSubmit}>
        <FormInput label="email" type="email" name="email" required value={email} handleChange={handleChange} />
        <FormInput label="password" type="password" name="password" required value={password} handleChange={handleChange} />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" handleButtonClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
