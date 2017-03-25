import React from 'react'
import { CardDetails, SpreadCards } from '../components'
import { arcanums } from '../helpers'

const CardDetailsContainer = ({ cardNumber, choices=[1], spreadType }) => {

  const cardImage = require(`../assets/img/major-arcanums/rider-waite/${cardNumber}.png`)
  const arcanum = arcanums.major[cardNumber]

  const cardInfoImage = () => {
    if(choices.length === 1){
      return (<img src={cardImage} alt={arcanum.name} className="card-image img-responsive"/>)
    }

    return (
      <SpreadCards
        display="frontside"
        cardOverlay={cardNumber}
        choices={choices}
        spreadType={spreadType} />
    )
  }

  return (
    <CardDetails
      cardNumber={cardNumber}
      cardDetails={arcanum}
      cardImage={cardInfoImage()}
    />
  )
}

export default CardDetailsContainer
