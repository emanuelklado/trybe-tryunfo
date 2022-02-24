import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      isSaveButtonDisabled: true,
    };
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.validateAtrib = this.validateAtrib.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.validation = this.validation.bind(this);
  }

  onSaveButtonClick(event) {
    event.preventDefault();
  }

  onInputChange({ target: { name, value, checked, type } }) {
    const valor = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: valor,
    }, () => this.validation());
  }

  validateAtrib() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxSum = 210;
    const max = 90;
    const sum = (+cardAttr1 + +cardAttr2 + +cardAttr3) <= maxSum;
    const positive = cardAttr1 >= 0 && cardAttr2 >= 0 && cardAttr3 >= 0;
    const length = cardAttr1 <= max && cardAttr2 <= max && cardAttr3 <= max;
    console.log(sum && positive && length);
    return (sum && positive && length);
  }

  validateInput() {
    const { cardName, cardDescription, cardImage } = this.state;
    const text = (cardName !== '') && (cardDescription !== '') && (cardImage !== '');
    return text;
  }

  validation() {
    const validTrue = this.validateInput() && this.validateAtrib();
    if (validTrue) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1> Adicionar nova carta </h1>
        <Form
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
      </div>
    );
  }
}

export default App;
