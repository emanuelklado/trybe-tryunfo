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

    this.removeCard = this.removeCard.bind(this);
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
    const sum = (+cardAttr1 + +cardAttr2 + +cardAttr3) <= maxSum; // transformando em number
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

  removeCard(cardName) {
    const { data } = this.state;
    this.setState(({ data: data.filter((el) => el.cardName !== cardName) }));
    this.checkHasTrunfo();
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
      <>
        <h1 className="zombieTitle"> Zombie Trunfo </h1>
        <div className="main">
          <section className="form_h1">
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
          </section>
          <section>
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
          </section>
        </div>
        <div className="cardsRendered">
          { data.map((item, index) => (
            <div key={ index }>
              <CardRender propOnClick={ this.removeCard } { ...item } />
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default App;
