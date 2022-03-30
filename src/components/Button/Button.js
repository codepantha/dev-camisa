import React from 'react';
import PropTypes from 'prop-types';
import './Button.styles.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

/* eslint-disable jsx-a11y/control-has-associated-label */
const Button = ({ buttonType, type, children }) => (
  <button type={type === 'submit' ? 'submit' : 'button'} className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}>
    { children }
  </button>
);

Button.propTypes = {
  buttonType: PropTypes.string,
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  buttonType: '',
};

export default Button;
