import React from 'react'
import { connect } from 'react-redux'
import { Card } from '../components'

const CardContainer = props => {

  const {
    display,
    cardNumber,
    cardOverlay,
    backsideStyle,
    handleChoice,
    reversed,
    spreadTypeCardFeature
  } = props

  const backsideImage = require(`../assets/img/backside/backside-card-${backsideStyle}.png`)
  const frontsideImage = require(`../assets/img/major-arcanums/rider-waite/${cardNumber}.png`)

  return (
    <Card
      display={display}
      cardNumber={cardNumber}
      cardOverlay={cardOverlay}
      backsideImage={backsideImage}
      frontsideImage={frontsideImage}
      reversed={reversed}
      handleChoice={choice => handleChoice && handleChoice(choice)}
      spreadTypeCardFeature={spreadTypeCardFeature}
    />
  )
}

CardContainer.defaultProps = {
  cardNumber: 0,
  cardOverlay: false
}

const mapStateToProps = state => ({
  backsideStyle: state.backsideStyleState.style
})

export default connect(mapStateToProps)(CardContainer)
