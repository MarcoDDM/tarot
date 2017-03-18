import React from 'react'
import { Row, Col } from '../Grid'
import SpreadCards from '../SpreadCards'
import arcanums from '../../helpers/arcanums'
import './CardDetails.sass'

const CardDetails = ({ card, choices, spreadType }) => {
  let cardImage = require(`../../assets/img/major-arcanums/rider-waite/${card}.png`)
  let arcanum = arcanums.major[card]

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
    <div className="card-info">
      <Row>
        <Col lg="12" md="12" sm="12" xs="12">
          <Col lg="4" md="2" sm="3" xs="12">
            {cardInfoImage()}
          </Col>
          <Col lg="8" md="10" sm="9" sx="12">
            <h2>{arcanum.name} - Arcano {card}</h2>
            <h3>{arcanum.attribute}</h3>
            <p>{arcanum.description}</p>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default CardDetails
