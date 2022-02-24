import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
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
    } = this.props;
    return (
      <div>
        <h2 data-testid="name-card">{ cardName }</h2>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{ cardDescription }</p>
        <ul>
          <li data-testid="attr1-card">{ cardAttr1 }</li>
          <li data-testid="attr2-card">{ cardAttr2 }</li>
          <li data-testid="attr3-card">{ cardAttr3 }</li>
        </ul>
        <p data-testid="rare-card">{cardRare}</p>
        {cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : <p> </p>}
      </div>
    );
  }
}
Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
};
