import React, { Component } from 'react';
import Card from '../Card';
import './index.sass';

class TarotDeck extends Component {

  constructor(props){
    super(props);

    this.state = {
      cards: [],
      choices: []
    };
  }

  componentWillMount(){
    let cards = [];
    for (let i = 0; i < 21; i++){
      cards.push(
        <Card key={i}
          cardNumber={i}
          handleChoice={this.handleChoice.bind(this)}
        />
      );
    }

    this.shuffleCards(cards);
  }

  handleChoice(choice){
    let choices = this.state.choices;
    choices.push(choice);
    this.setState({ choices });
  }

  shuffleCards(cards=null){
    cards = cards || this.state.cards;
    cards.sort(() => .5 - Math.random());
    this.setState({ cards: cards });
  }


  render() {
    return (
      <div className="tarot-deck">
        {this.state.cards}
      </div>
    );
  }
}

export default TarotDeck;
