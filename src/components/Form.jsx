import React, { Component } from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import Button from './Button';

class Forms extends Component {
  render() {
    return (
      <form>
        <Input
          id="input-name"
          textLabel="Nome: "
          type="text"
          maxLength="100"
          name="name"
          value=""
          onChange=""
        />
        <br />
        <TextArea
          id="input-description"
          textLabel="Descrição: "
          type="textarea"
          maxLength="100"
          name="description"
          value=""
          onChange=""
        />
        <br />
        <Input
          id="input-attr1"
          textLabel="Atrib 1: "
          type="number"
          maxLength="100"
          name="attr1"
          value=""
          onChange=""
        />
        <br />
        <Input
          id="input-attr2"
          textLabel="Atrib 2: "
          type="number"
          maxLength="100"
          name="attr2"
          value=""
          onChange=""
        />
        <br />
        <Input
          id="input-attr3"
          textLabel="Atrib 3: "
          type="number"
          maxLength="100"
          name="attr3"
          value=""
          onChange=""
        />
        <br />
        <Input
          id="input-image"
          textLabel="imagem: "
          type="text"
          maxLength="100"
          name="image"
          value=""
          onChange=""
        />
        <br />
        <Select />
        <br />
        <Input
          id="input-triunfo"
          textLabel="Super Trunfo ? "
          type="checkbox"
          maxLength="100"
          name="trunfo"
          value=""
          onChange=""
        />
        <br />
        <Button />
      </form>
    );
  }
}

export default Forms;
