import React from 'react';
import PropTypes from 'prop-types';
import './FormInput.styles.scss';
/* eslint-disable jsx-a11y/label-has-associated-control */
const FormInput = ({
  label, type, name, required, value, handleChange,
}) => (
  <div className="group">
    <input
      className="form-input"
      type={type}
      name={name}
      required={required}
      value={value}
      onChange={handleChange}
    />
    {label && (
      <label className={`${value.length ? 'shrink' : ''} form-input-label`}>
        {label}
      </label>
    )}
  </div>
);

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

FormInput.defaultProps = {
  required: true,
};

export default FormInput;
