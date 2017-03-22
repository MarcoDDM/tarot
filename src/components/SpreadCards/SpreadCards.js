import React from 'react'
import { connect } from 'react-redux'

import Card from '../Card'
import spreadTypes from '../../helpers/spreadTypes'
import './SpreadCards.sass'

const SpreadCards = props => {

  const {
    display,
    choices,
    cardOverlay,
    spreadType,
    showSpreadDescription,
    backsideStyleState } = props

  const spread = spreadTypes[spreadType]
  const amountCards = spread.amountCards
  const spreadDescription = spread.description
  const backsideCardStyle = backsideStyleState

  const buildCards = value => {
    let cards = []

    const builder = (value=0) => {
      if(value === amountCards) return

      let overlay = choices[value] !== cardOverlay ? true : false

      cards.push(
        <Card
          key={value}
          cardNumber={choices[value]}
          display={display}
          cardOverlay={overlay}
          backsideCardStyle={backsideCardStyle}
          spreadTypeCardFeature={spread.cardsFeatures[value]}
        />
      )
      builder(value + 1)
    }

    builder()
    return cards
  }

  const buildSpreadDescription = () => {
    return (
      <div><h4>{amountCards} {amountCards === 1 ? 'carta' : 'cartas'}</h4>
      <p className="spreadDescription">{spreadDescription}</p></div>
    )
  }

  const classNames = () => ([
    'spread-cards',
    spread.className
  ].join(' '))

  return (
    <div className={classNames()}>
      <div className="cards">
        {buildCards()}
      </div>
      {showSpreadDescription && buildSpreadDescription()}
    </div>
  )
}

SpreadCards.defaultProps = {
  choices: [],
  cardOverlay: undefined,
  display: 'backside',
  spreadType: 'simple',
  showSpreadDescription: false
}

const mapStateToProps = state => ({
  backsideStyleState: state.backsideStyleState
})

export default connect(mapStateToProps)(SpreadCards)
