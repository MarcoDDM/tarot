import React, { Component } from 'react'
import { chooseCard } from '../../actions'
import SpreadCards from '../SpreadCards/SpreadCards'
import store from '../../store';
import './TarotTable.sass'

class TarotTable extends Component {

  handleChoice(choice){
    store.dispatch(chooseCard(choice))
    let choices = store.getState().choiceState

    console.log(this.props)

    if(choices.length === 3)
      setTimeout(() =>
        this.props.router.push(`/result`), 500)
  }

  render() {
    return (
      <div className="tarot-table">
        <SpreadCards
          handleChoice={choice => this.handleChoice(choice)}>
        </SpreadCards>
      </div>
    )
  }
}

export default TarotTable;
