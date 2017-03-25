import React from 'react'
import { connect } from 'react-redux'

import { CardContainer } from './'
import { spreadTypes } from '../helpers'

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
    const cards = []

    for (let i = 0; i < amountCards; i++){
      let overlay = choices[i] !== cardOverlay ? true : false
      cards.push(
        <CardContainer
          key={i}
          cardNumber={choices[i]}
          display={display}
          cardOverlay={overlay}
          backsideCardStyle={backsideCardStyle}
          spreadTypeCardFeature={spread.cardsFeatures[i]}
        />
      )
    }
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
  backsideStyleState: state.backsideStyleState.style
})

export default connect(mapStateToProps)(SpreadCards)
