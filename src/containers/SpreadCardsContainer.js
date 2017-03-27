import React from 'react'
import { connect } from 'react-redux'

import { CardContainer } from './'
import { SpreadCards } from '../components'
import { spreadTypes, formatReversedCard, isReversedCard } from '../helpers'

const SpreadCardsContainer = props => {

  const {
    display,
    choices,
    cardOverlay,
    spreadType,
    showSpreadDescription,
    backsideCardStyle } = props

  const spread = spreadTypes[spreadType]
  const amountCards = spread.amountCards

  const buildCards = value => {
    const cards = []
    for (let i = 0; i < amountCards; i++){
      let cardNumber = formatReversedCard(choices[i])
      let overlay = cardNumber !== cardOverlay ? true : false
      cards.push(
        <CardContainer
          key={i}
          cardNumber={cardNumber}
          display={display}
          cardOverlay={overlay}
          reversed={isReversedCard(choices[i])}
          backsideCardStyle={backsideCardStyle}
          spreadTypeCardFeature={spread.cardsFeatures[i]}
        />
      )
    }
    return cards
  }

  return (
    <SpreadCards
      cards={buildCards()}
      spreadType={spreadType}
      showSpreadDescription={showSpreadDescription}
    />
  )
}

SpreadCardsContainer.defaultProps = {
  choices: [],
  showSpreadDescription: false
}

const mapStateToProps = state => ({
  backsideStyle: state.backsideStyleState.style
})

export default connect(mapStateToProps)(SpreadCardsContainer)
