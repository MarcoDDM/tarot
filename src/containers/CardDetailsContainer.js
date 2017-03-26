import React from 'react'
import { CardDetails, SpreadCards } from '../components'
import { CardContainer } from '../containers'
import { arcanums, formatIfIsReversedCard, checkIfIsReversedCard } from '../helpers'

const CardDetailsContainer = ({ cardNumber, choices=[1], spreadType }) => {

  const cardNumberFormated = formatIfIsReversedCard(cardNumber)
  const arcanum = arcanums.major[cardNumberFormated]

  const buildCards = () => {
    if(choices.length === 1){
      return (
        <CardContainer
          cardNumber={cardNumberFormated}
          display="frontside"
          reversed={checkIfIsReversedCard(cardNumber)}
        />
      )
    }

    return (
      <SpreadCards
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
