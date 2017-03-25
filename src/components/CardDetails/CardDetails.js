import React from 'react'
import { Row, Col } from '../Grid'
import './CardDetails.sass'

const CardDetails = ({ cardNumber, cardDetails, cardImage }) => {
  return (
    <div className="card-details">
      <Row>
        <Col lg="12" md="12" sm="12" xs="12">
          <Col lg="4" md="2" sm="3" xs="12">
            {cardImage}
          </Col>
          <Col lg="8" md="10" sm="9" sx="12">
            <h2>{cardDetails.name} - Arcano {cardNumber}</h2>
            <h3>{cardDetails.attribute}</h3>
            <p>{cardDetails.description}</p>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default CardDetails
