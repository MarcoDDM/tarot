import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { Row, Col } from '../components'
import { CardContainer } from '../containers'
import { spreadTypes } from '../helpers'
import { chooseCard, clearChoices } from '../actions'

class TarotTable extends Component {

  constructor(props){
    super(props)

    this.state = {
      cards: [],
      canChoice: true
    }
  }

  componentWillMount(){
    window.scrollTo(0, 0)
    this.props.clearChoices()
    this.buildCards()
  }

  componentWillReceiveProps(props){
    const choices = props.userChoiceState
    const spreadAmountCards = spreadTypes[props.spreadType].amountCards

    if(choices.length === spreadAmountCards){
      this.setState({ canChoice: false })
      setTimeout(() => props.navigate(`/reading`), 300)
    }
  }

  headMessage(){
    const amountCards = spreadTypes[this.props.spreadType].amountCards
    const message = `
      ${amountCards}
      ${amountCards === 1 ? 'carta' : 'cartas'}
    `
    return(<h1 className="page-title">Mentalize sua questão e escolha {message}</h1>)
  }

  buildCards(){
    const cards = []
    const amountCards = 22

    for (let i = 0; i < amountCards; i++){
      cards.push(
        <Col lg="2" md="2" sm="2" xs="3" key={i}>
          <CardContainer
            cardNumber={i}
            reversed={this.reversedCard()}
            handleChoice={choice => this.state.canChoice && this.props.chooseCard(choice)} />
        </Col>
      )
    }

    this.shuffleCards(cards)
  }

  reversedCard(){
    let random = Math.floor((Math.random() * 100) + 1)
    return random <= 50 ? true : false
  }

  shuffleCards(cards){
    cards.sort(() => .5 - Math.random())
    this.setState({ cards })
  }

  render() {
    return (
      <div className="tarot-table">
        {this.props.spreadType && this.headMessage()}
        <Row>
          {this.state.cards}
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  spreadType: state.spreadTypeState.type,
  userChoiceState: state.userChoiceState
})

const mapDispatchToProps = dispatch => ({
  chooseCard: choice => dispatch(chooseCard(choice)),
  clearChoices: () => dispatch(clearChoices()),
  navigate: route => dispatch(push(route))
})

export default connect(mapStateToProps, mapDispatchToProps)(TarotTable)
