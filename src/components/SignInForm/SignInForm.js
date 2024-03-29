import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { emailSignInStart, googleSignInStart } from '../../store/user/userActions';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import './SignInForm.styles.scss';

const SignInForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInWithGoogle = () => {
    dispatch(googleSignInStart());
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
      dispatch(emailSignInStart(email, password));
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
        <FormInput
          label="email"
          type="email"
          name="email"
          required
          value={email}
          handleChange={handleChange}
        />
        <FormInput
          label="password"
          type="password"
          name="password"
          required
          value={password}
          handleChange={handleChange}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType="google"
            handleButtonClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
