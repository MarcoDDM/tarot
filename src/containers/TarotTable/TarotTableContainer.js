import React, { Component } from 'react'

import ShuffleCards from '../../components/ShuffleCards'
import spreadTypes from '../../helpers/spreadTypes'

import { chooseCard, clearChoices } from '../../actions'
import store from '../../store'

class TarotTableContainer extends Component {

  constructor(props){
    super(props)

    this.state = {
      canChoice: true,
      spreadType: 0
    }
  }

  componentWillMount(){
    let spreadType = store.getState().spreadState

    if(!spreadType){
      this.props.router.push('/')
      return
    }

    store.dispatch(clearChoices())
    this.setState({ spreadType })

    window.scrollTo(0, 0)
  }

  handleChoice(choice){
    if(!this.state.canChoice) return

    store.dispatch(chooseCard(choice))
    let choices = store.getState().choiceState
    let spreadAmountCards = spreadTypes[this.state.spreadType].amountCards

    if(choices.length === spreadAmountCards){
      this.setState({ canChoice: false })
      setTimeout(() =>
        this.props.router.push(`/reading`), 300)
    }
  }

  headMessage(){
    if(this.state.spreadType){
      const message = `
        ${spreadTypes[this.state.spreadType].amountCards}
        ${spreadTypes[this.state.spreadType].amountCards === 1 ? 'carta' : 'cartas'}
      `
      return(<h1 className="page-title">Mentalize sua questão e escolha {message}</h1>)
    }
  }

  render() {
    return (
      <div className="tarot-table">
        {this.headMessage()}
        <ShuffleCards handleChoice={choice => this.handleChoice(choice)} />
      </div>
    )
  }
}

export default TarotTableContainer
