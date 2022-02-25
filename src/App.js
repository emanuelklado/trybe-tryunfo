import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardRender from './components/CardRender';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      cardName: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      isSaveButtonDisabled: true,
    };

    this.checkHasTrunfo = this.checkHasTrunfo.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.validateAtrib = this.validateAtrib.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.validation = this.validation.bind(this);
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    // const estado = this.state;
    // Referência: Emerson Alves me indicou esta solução, pois não estava passando nos testes.
    this.setState(({ data, hasTrunfo, isSaveButtonDisabled, ...rest }) => ({
      data: [...data, { ...rest }] }));

    this.checkHasTrunfo();

    this.setState({
      cardName: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      isSaveButtonDisabled: true,
    });
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

  checkHasTrunfo() {
    this.setState(({ data }) => ({
      hasTrunfo: data.some((elem) => elem.cardTrunfo),
    }));
  }

  render() {
    const {
      data,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
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
          hasTrunfo={ hasTrunfo }
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
        { data.map((item, index) => (
          <div key={ index }>
            <CardRender { ...item } />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
