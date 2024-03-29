import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../store/user/userActions';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import './SignUpForm.styles.scss';
/* eslint-disable jsx-a11y/label-has-associated-control */

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    displayName, email, password, confirmPassword,
  } = formFields;
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return;

    try {
      dispatch(signUpStart(email, password, displayName));

      setFormFields(defaultFormFields);
    } catch (e) {
      if (e.code === 'auth/email-already-in-use') alert('email already in use.');
      else console.log(e);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don&apos;t have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          required
          value={displayName}
          handleChange={handleChange}
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          required
          value={email}
          handleChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          required
          value={password}
          handleChange={handleChange}
        />

        <FormInput
          label="ConfirmPassword"
          type="password"
          name="confirmPassword"
          required
          value={confirmPassword}
          handleChange={handleChange}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
