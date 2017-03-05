import React from 'react'
import { Row, Col } from '../Grid/Grid'
import arcanums from '../../helpers/arcanums'
import './CardInfo.sass'

function CardInfo(props){
  let card = props.card
  let cardImage = require(`../../assets/img/major-arcanums/rider-waite/${card}.png`)

  return (
    <div className="card-info">
      <Row>
        <Col lg="12" md="12" sm="12" xs="12">
          <Col lg="2" md="2" sm="3" xs="12">
            <img src={cardImage} alt={arcanums.major[card].name} className="card-image img-responsive"/>
          </Col>
          <Col lg="10" md="10" sm="9" sx="12">
            <h2>{arcanums.major[card].name} - Arcano {card}</h2>
            <h3>{arcanums.major[card].attribute}</h3>
            <p>{arcanums.major[card].description}</p>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default CardInfo
