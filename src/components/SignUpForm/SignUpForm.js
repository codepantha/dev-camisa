import React, { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../FormInput/FormInput';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return;

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      user.displayName = displayName;
      createUserDocumentFromAuth(user);
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
    <div>
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

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
