import React, { Component } from 'react'
import SpreadCards from '../SpreadCards'
import './TarotTable.sass'

class TarotTable extends Component {

  constructor(props){
    super(props)

    this.state = {
      cards: [],
      choices: []
    }
  }

  handleChoice(choice){
    const choices = this.state.choices
    choices.push(choice)
    this.setState({ choices })

    if(choices.length === 3)
      setTimeout(() =>
        this.props.router.push(`/cards-reader/${choices}`), 500)
  }

  render() {
    return (
      <div className="tarot-table">
        <SpreadCards
          show={!this.state.showCardsReader}
          handleChoice={choice => this.handleChoice(choice)}>
        </SpreadCards>
      </div>
    )
  }
}

export default TarotTable
