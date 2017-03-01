import React, { Component } from 'react'
import Card from '../Card/Card'
//import './SpreadCards.sass'

class SpreadCards extends Component {

  constructor(props){
    super(props)

    this.state = {
      cards: [],
      choices: []
    }
  }

  componentWillMount(){
    const cards = []
    for (let i = 0; i < 21; i++){
      cards.push(
        <Card
          key={i}
          cardNumber={i}
          handleChoice={() => this.handleChoice(i)} />
      )
    }

    this.shuffleCards(cards)
  }

  shuffleCards(cardsToShuffle=null){
    const cards = cardsToShuffle || this.state.cards
    cards.sort(() => .5 - Math.random())

    this.setState({ cards })
  }

  handleChoice(choice){
    this.props.handleChoice(choice)
  }

  render(){
    return (
      <div>
        {this.state.cards}
      </div>
    )
  }
}

export default SpreadCards
