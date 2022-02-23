import React, { Component } from 'react';

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
          //   value={ value }
          onChange={ onChange }
          required
        />
      </label>
    );
  }
}

export default Input;
