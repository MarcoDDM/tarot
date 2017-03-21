import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import ShuffleCards from '../../components/ShuffleCards'
import spreadTypes from '../../helpers/spreadTypes'
import { chooseCard, clearChoices, getChoices } from '../../actions'

class TarotTableContainer extends Component {

  constructor(props){
    super(props)

    this.state = {
      canChoice: true,
      spreadType: 0
    }
  }

  componentWillMount(){
    let spreadType = this.props.spreadState

    if(!spreadType){
      this.props.router.push('/')
      return
    }

    this.props.clearChoices()
    window.scrollTo(0, 0)
  }

  handleChoice(choice){
    this.props.chooseCard(choice)
    let choices = this.props.choiceState
    let spreadAmountCards = spreadTypes[this.props.spreadState].amountCards

    if(choices.length === spreadAmountCards){
      this.setState({ canChoice: false })
      setTimeout(() => this.props.router.push(`/reading`), 300)
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

const matchDispatchToProps = dispatch =>
  bindActionCreators({
    chooseCard, clearChoices, getChoices
  }, dispatch)


export default connect(mapStateToProps, matchDispatchToProps)(TarotTableContainer)
