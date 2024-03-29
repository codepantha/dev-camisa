import React from 'react';
import PropTypes from 'prop-types';
import './Button.styles.scss';

export const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

/* eslint-disable jsx-a11y/control-has-associated-label */
const Button = ({
  buttonType, type, handleButtonClick, children,
}) => (
  <button type={type === 'submit' ? 'submit' : 'button'} className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} onClick={handleButtonClick}>
    { children }
  </button>
);

Button.propTypes = {
  buttonType: PropTypes.string,
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func,
};

Button.defaultProps = {
  buttonType: '',
  handleButtonClick: () => {},
};

export default Button;
