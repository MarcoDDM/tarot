import React from 'react'
import { Row, Col } from '../Grid'
import './CardDetails.sass'

const CardDetails = ({ card, arcanum, details }) => {
  return (
    <div className="card-details">
      <Row>
        <Col lg="12" md="12" sm="12" xs="12">
          <Col lg="4" md="2" sm="3" xs="12">
            {details}
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
