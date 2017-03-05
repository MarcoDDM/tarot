import React, { Component } from 'react'
import Card from '../Card/Card'

class SpreadCards extends Component {

  constructor(props){
    super(props)

    this.state = {
      cards: []
    }
  }

  componentWillMount(){
    const cards = []

    for (let i = 0; i < 21; i++){
      cards.push(
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-3">
          <Card
            key={i}
            cardNumber={i}
            backsideCardStyle={1}
            handleChoice={() => this.handleChoice(i)} />
        </div>
      )
    }

    this.shuffleCards(cards)
  }

  shuffleCards(cardsToShuffle){
    const cards = cardsToShuffle
    cards.sort(() => .5 - Math.random())
    this.setState({ cards })
  }

  handleChoice(choice){
    this.props.handleChoice(choice)
  }

  render(){
    return (
      <div className="row">
        {this.state.cards}
      </div>
    )
  }
}

export default SpreadCards
