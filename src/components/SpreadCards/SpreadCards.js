import React, { Component } from 'react'

import Card from '../Card'
import spreadTypes from '../../helpers/spreadTypes'

import store from '../../store'

import './SpreadCards.sass'

class SpreadCards extends Component {

  constructor(props){
    super(props)
    this.state = { cards: [] }
  }

  componentWillMount(){
    let cards = [],
      display = this.props.display,
      choices = this.props.choices,
      cardOverlay = this.props.cardOverlay,
      spreadType = spreadTypes[this.props.spreadType],
      spreadAmountCards = spreadType.amountCards

    for (let i = 0; i < spreadAmountCards; i++){
      let overlay = choices[i] !== cardOverlay ? true : false
      cards.push(
        <Card
          key={i}
          cardNumber={choices[i]}
          display={display}
          cardOverlay={overlay}
          backsideCardStyle={store.getState().backsideStyleState}
          spreadTypeCardFeature={spreadType.cardsFeatures[i+1]}
        />
      )
    }

    this.setState({ cards })
  }

  showSpreadDescription(){
    if(this.props.showSpreadDescription){
      let amountCards = spreadTypes[this.props.spreadType].amountCards
      let spreadDescription = spreadTypes[this.props.spreadType].description
      return (
        <div><h4>{amountCards} {amountCards === 1 ? 'carta' : 'cartas'}</h4>
        <p className="spreadDescription">{spreadDescription}</p></div>
      )
    }
  }

  render(){
    let classNames = [
      'spread-cards',
      spreadTypes[this.props.spreadType].className
    ].join(' ')

    return (
      <div className={classNames}>
        <div className="cards">
          {this.state.cards}
        </div>
        {this.showSpreadDescription()}
      </div>
    )
  }
}

SpreadCards.defaultProps = {
  choices: [],
  cardOverlay: undefined,
  display: 'backside',
  spreadType: 'simple',
  showSpreadDescription: false
}

export default SpreadCards
