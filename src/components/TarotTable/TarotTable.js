import React, { Component } from 'react'
import { chooseCard, clearChoices } from '../../actions'
import SpreadCards from '../SpreadCards/SpreadCards'
import store from '../../store';
import './TarotTable.sass'

class TarotTable extends Component {

  constructor(){
    super()

    this.state = {
      canChoice: true,
      drawingType: 0
    }
  }

  componentWillMount(){
    let drawingType = store.getState().drawingState

    if(!drawingType){
      this.props.router.push('/')
      return
    }

    store.dispatch(clearChoices())
    this.setState({ drawingType });
  }

  handleChoice(choice){
    if(!this.state.canChoice) return

    store.dispatch(chooseCard(choice))
    let choices = store.getState().choiceState
    if(choices.length === this.state.drawingType){
      this.setState({ canChoice: false })
      setTimeout(() =>
        this.props.router.push(`/result`), 500)
    }
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
