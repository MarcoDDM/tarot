import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { Row, Col } from '../Grid'
import More from 'material-ui/svg-icons/navigation/expand-more'
import Less from 'material-ui/svg-icons/navigation/expand-less'
import './CardDetails.sass'

const CardDetails = props => {

  const {
    cardNumber,
    cardDetails,
    cardImage,
    showFullDescription,
    handleFullDescription
  } = props

  const classNames = () => {
    return ([
      'card-details',
      showFullDescription ? 'show-full-description' : ''
    ]).join(' ')
  }

  return (
    <div className={classNames()}>
      <Row>
        <Col lg="12" md="12" sm="12" xs="12">
          <Col lg="4" md="2" sm="3" xs="12">
            {cardImage}
          </Col>
          <Col lg="8" md="10" sm="9" sx="12">
            <h2>{cardDetails.name} - Arcano {cardNumber}</h2>
            <p><b>Significado: </b>{cardDetails.meaning}</p>
            <p><b>Inverso: </b>{cardDetails.inverse}</p>
            <div className="description">
              <h3>{cardDetails.attribute}</h3>
              <p>{cardDetails.description}</p>
            </div>
            <RaisedButton
              label={showFullDescription ? 'Fechar' : 'Ver mais'}
              labelPosition="before"
              icon={showFullDescription ? <Less/> : <More/>}
              onClick={() => handleFullDescription()}
            />
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default CardDetails
