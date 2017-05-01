import React from 'react'
import { CardDetails } from '../components'
import { CardContainer, SpreadCardsContainer } from '../containers'
import { arcanums, formatReversedCard, isReversedCard } from '../helpers'

const CardDetailsContainer = props => {

  const {
    cardNumber,
    choices=[1],
    spreadType
  } = props

  const cardNumberFormated = formatReversedCard(cardNumber)
  const arcanum = arcanums.major[cardNumberFormated]

  const buildCards = () => {
    if(choices.length === 1){
      return (
        <CardContainer
          cardNumber={cardNumberFormated}
          display="frontside"
          reversed={isReversedCard(cardNumber)}
        />
      )
    }

    return (
      <SpreadCardsContainer
        display="frontside"
        cardOverlay={cardNumberFormated}
        choices={choices}
        spreadType={spreadType} />
    )
  }

  return (
    <CardDetails
      cardNumber={cardNumberFormated}
      cardDetails={arcanum}
      cardImage={buildCards()}
    />
  )
}

export default CardDetailsContainer
