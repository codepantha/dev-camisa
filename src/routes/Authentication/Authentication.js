import React from 'react';
import { SignInForm, SignUpForm } from '../../components';
import './Authentication.styles.scss';

const Authentication = () => (
  <div className="authentication-container">
    <SignInForm />
    <SignUpForm />
  </div>
);

export default Authentication;
