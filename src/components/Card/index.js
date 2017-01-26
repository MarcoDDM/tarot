import React, { Component } from 'react';
import './index.sass';

class Card extends Component {

  constructor(props){
    super(props);

    this.state = {
      clicked: false
    }
  }

  cardClick(e){
    e.preventDefault();
    this.setState({ clicked: true });
    this.props.handleChoice(this.props.cardNumber);
  }

  render(){
    const className = `card ${this.state.clicked ? 'clicked frontside' : ''}`;
    const card = require(`../../assets/img/major-arcanums/rider-waite/${this.props.cardNumber}.png`);

    return(
      <button className={className} onClick={this.cardClick.bind(this)}>
        <div className="back"></div>
        <div className="front" style={{ backgroundImage: `url(${card})` }}></div>
      </button>
    )
  }

}

export default Card;
