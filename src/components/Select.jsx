import React, { Component } from 'react';

class Select extends Component {
  render() {
    return (
      <label htmlFor="rare-input">
        Raridade:
        <select data-testid="rare-input" name="rare-input" id="rare-input">
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
      </label>
    );
  }
}

export default Select;
