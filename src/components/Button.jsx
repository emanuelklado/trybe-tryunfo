import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { disabled, onClick } = this.props;
    return (
      <button
        onClick={ onClick }
        disabled={ disabled }
        data-testid="save-button"
        type="submit"
      >
        Salvar
      </button>
    );
  }
}
Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
