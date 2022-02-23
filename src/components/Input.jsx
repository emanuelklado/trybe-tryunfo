import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { id, name, textLabel, type, maxLength, value, onChange } = this.props;
    return (
      <label htmlFor={ id }>
        {textLabel}
        <input
          id={ id }
          data-testid={ `${name}-input` }
          type={ type }
          maxLength={ maxLength }
          name={ name }
          value={ value }
          onChange={ onChange }
          required
        />
      </label>
    );
  }
}

export default Input;

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  textLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  maxLength: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,

};
