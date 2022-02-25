import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import Button from './Button';

class Form extends Component {
  render() {
    const {
      cardName,
      cardImage,
      cardRare,
      cardTrunfo,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <Input
          id="input-name"
          textLabel="Nome: "
          type="text"
          maxLength="100"
          name="cardName"
          value={ cardName }
          onChange={ onInputChange }
        />
        <br />
        <TextArea
          id="input-description"
          textLabel="Descrição: "
          type="textarea"
          maxLength="100"
          name="cardDescription"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <br />
        <Input
          id="input-attr1"
          textLabel="Atrib 1: "
          type="number"
          maxLength="100"
          name="cardAttr1"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <br />
        <Input
          id="input-attr2"
          textLabel="Atrib 2: "
          type="number"
          maxLength="100"
          name="cardAttr2"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <br />
        <Input
          id="input-attr3"
          textLabel="Atrib 3: "
          type="number"
          maxLength="100"
          name="cardAttr3"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <br />
        <Input
          id="input-image"
          textLabel="imagem: "
          type="text"
          maxLength="100"
          name="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <br />
        <Select name="cardRare" value={ cardRare } onChange={ onInputChange } />
        <br />
        <div>
          {hasTrunfo ? (
            <p> Você já tem um Super Trunfo em seu baralho</p>
          ) : (
            <Input
              id="input-triunfo"
              textLabel="Super Trunfo ? "
              type="checkbox"
              maxLength="100"
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          )}
        </div>
        <br />
        <Button disabled={ isSaveButtonDisabled } onClick={ onSaveButtonClick } />
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  hasTrunfo: PropTypes.string.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
