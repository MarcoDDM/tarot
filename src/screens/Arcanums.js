import React from 'react'
import { CardContainer, CardDetailsContainer } from '../containers'
import { arcanums } from '../helpers'

const Arcanums = () => {

  const cards = []
  const amountCards = 22

  for (let i = 0; i < amountCards; i++){
    const cardImage = (
      <CardContainer
        cardNumber={i}
        display="frontside" />)

    cards.push(
      <CardDetailsContainer
        key={i}
        cardNumber={i}
        cardImage={cardImage}
        cardDetails={arcanums.major[i]}
      />
    )
  }

  return (
    <div>
      {cards}
    </div>
  )
}

export default Arcanums
