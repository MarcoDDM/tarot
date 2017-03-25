import React from 'react'
import { CardDetails, SpreadCards } from '../components'
import { arcanums } from '../helpers'

const CardDetailsContainer = ({ card, choices, spreadType }) => {

  const cardImage = require(`../assets/img/major-arcanums/rider-waite/${card}.png`)
  const arcanum = arcanums.major[card]

  const cardInfoImage = () => {
    if(choices.length === 1){
      return (<img src={cardImage} alt={arcanum.name} className="card-image img-responsive"/>)
    }

    return (
      <SpreadCards
        display="frontside"
        cardOverlay={card}
        choices={choices}
        spreadType={spreadType} />
    )
  }

  return (
    <CardDetails
      card={card}
      arcanum={arcanum}
      details={cardInfoImage()}
    />
  )
}

export default CardDetailsContainer
