import React from 'react';
import PropTypes from 'prop-types';

function Input({ name, testId, value, placeholder, onChange, type }) {
  return (
    <input
      type={ type }
      name={ name }
      data-testid={ testId }
      value={ value }
      placeholder={ placeholder }
      onChange={ onChange }
    />
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
