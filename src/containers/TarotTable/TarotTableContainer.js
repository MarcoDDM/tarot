import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import ShuffleCards from '../../components/ShuffleCards'
import spreadTypes from '../../helpers/spreadTypes'
import { chooseCard, clearChoices } from '../../actions'

class TarotTableContainer extends Component {

  constructor(props){
    super(props)

    this.state = {
      canChoice: true
    }
  }

  componentWillMount(){
    this.props.clearChoices()
    window.scrollTo(0, 0)
  }

  handleChoice(choice){
    this.props.chooseCard(choice)
  }

  componentWillReceiveProps(props){
    let choices = props.choiceState
    let spreadAmountCards = spreadTypes[props.spreadState].amountCards

    if(choices.length === spreadAmountCards){
      this.setState({ canChoice: false })
      setTimeout(() => props.router.push(`/reading`), 300)
    }
  }

  headMessage(){
    const amountCards = spreadTypes[this.props.spreadState].amountCards

    const message = `
      ${amountCards}
      ${amountCards === 1 ? 'carta' : 'cartas'}
    `

    return(<h1 className="page-title">Mentalize sua questão e escolha {message}</h1>)
  }

  render() {
    return (
      <div className="tarot-table">
        {this.props.spreadState && this.headMessage()}
        <ShuffleCards handleChoice={choice => this.state.canChoice && this.handleChoice(choice)} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  spreadState: state.spreadState,
  choiceState: state.choiceState
})

const mapDispatchToProps = dispatch => ({
  chooseCard: choice => dispatch(chooseCard(choice)),
  clearChoices: () => dispatch(clearChoices()),
  navigate: route => dispatch(push(route))
})

export default connect(mapStateToProps, mapDispatchToProps)(TarotTableContainer)
