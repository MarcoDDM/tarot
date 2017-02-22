import React, { Component } from 'react'
import SpreadCards from '../SpreadCards'
import CardsReader from '../CardsReader'
import './TarotTable.sass'

class TarotTable extends Component {

  constructor(props){
    super(props)

    this.state = {
      cards: [],
      choices: [],
      showCardsReader: !false
    }
  }

  handleChoice(choice){
    const choices = this.state.choices
    choices.push(choice)

    const showCardsReader = false || choices.length === 3

    this.setState({ choices, showCardsReader })
  }

  render() {
    return (
      <div className="tarot-table">
        <button className={this.state.showCardsReader ? 'show' : 'hide'}>Novo</button>
        <SpreadCards
          show={!this.state.showCardsReader}
          handleChoice={choice => this.handleChoice(choice)}
        />
        <CardsReader
          show={this.state.showCardsReader}
          cards={this.state.choices}
        />
      </div>
    )
  }
}

export default TarotTable
