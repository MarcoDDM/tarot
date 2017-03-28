import React from 'react'
import { connect } from 'react-redux'
import { CardDetails } from '../components'
import { CardContainer, SpreadCardsContainer } from '../containers'
import { arcanums, formatReversedCard, isReversedCard } from '../helpers'
import { toggleFullDescription } from '../actions'

const CardDetailsContainer = props => {

  const {
    cardNumber,
    choices=[1],
    spreadType,
    showFullDescription,
    toggleFullDescription
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
      showFullDescription={showFullDescription}
      handleFullDescription={() => toggleFullDescription()}
    />
  )
}

const mapStateToProps = state => ({
  showFullDescription: state.cardDetailsState.showFullDescription
})

const mapDispatchToProps = dispatch => ({
  toggleFullDescription: () => dispatch(toggleFullDescription())
})

export default connect(mapStateToProps, mapDispatchToProps)(CardDetailsContainer)
