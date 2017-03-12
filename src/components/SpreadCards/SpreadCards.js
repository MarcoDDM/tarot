import React, { Component } from 'react'
import store from '../../store'

import Card from '../Card'
import spreadTypes from '../../helpers/spreadTypes'
import './SpreadCards.sass'

class SpreadCards extends Component {

  constructor(props){
    super(props)
    this.state = { cards: [] }
  }

  componentWillMount(){
    const cards = []
    const { display, choices, cardOverlay, spreadType } = this.props
    const amountCards = spreadTypes[spreadType].amountCards
    const backsideCardStyle = store.getState().backsideStyleState

    for (let i = 0; i < amountCards; i++){
      let overlay = choices[i] !== cardOverlay ? true : false
      cards.push(
        <Card
          key={i}
          cardNumber={choices[i]}
          display={display}
          cardOverlay={overlay}
          backsideCardStyle={backsideCardStyle}
          spreadTypeCardFeature={spreadTypes[spreadType].cardsFeatures[i+1]}
        />
      )
    }

    this.setState({ ...this.state, cards })
  }

  showSpreadDescription(){
    const { spreadType } = this.props
    const amountCards = spreadTypes[spreadType].amountCards
    const spreadDescription = spreadTypes[spreadType].description

    return (
      <div><h4>{amountCards} {amountCards === 1 ? 'carta' : 'cartas'}</h4>
      <p className="spreadDescription">{spreadDescription}</p></div>
    )
  }

  render(){
    const { showSpreadDescription, spreadType } = this.props
    const classNames = [
      'spread-cards',
      spreadTypes[spreadType].className
    ].join(' ')

    return (
      <div className={classNames}>
        <div className="cards">
          {this.state.cards}
        </div>
        {showSpreadDescription && this.showSpreadDescription()}
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
