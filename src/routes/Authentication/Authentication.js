import React from 'react';
import { SignUpForm } from '../../components';
import SignInForm from '../../components/SignInForm/SignInForm';
import './Authentication.styles.scss';

const Authentication = () => (
  <div className="authentication-container">
    <SignInForm />
    <SignUpForm />
  </div>
);

export default Authentication;
