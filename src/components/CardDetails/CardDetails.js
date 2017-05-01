import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { Row, Col } from '../Grid'
import More from 'material-ui/svg-icons/navigation/expand-more'
import Less from 'material-ui/svg-icons/navigation/expand-less'
import './CardDetails.sass'

class CardDetails extends React.Component {

  constructor () {
    super()
    this.state = {
      showFullDescription: false
    }
  }

  handleFullDescription () {
    const showFullDescription = !this.state.showFullDescription
    this.setState({ showFullDescription })
  }

  classNames () {
    return ([
      'card-details',
      this.state.showFullDescription ? 'show-full-description' : ''
    ]).join(' ')
  }

  render () {
    return (
      <div className={this.classNames()}>
        <Row>
          <Col lg="12" md="12" sm="12" xs="12">
            <Col lg="4" md="2" sm="3" xs="12">
              {this.props.cardImage}
            </Col>
            <Col lg="8" md="10" sm="9" sx="12">
              <h2>{this.props.cardDetails.name} - Arcano {this.props.cardNumber}</h2>
              <p><b>Significado: </b>{this.props.cardDetails.meaning}</p>
              <p><b>Inverso: </b>{this.props.cardDetails.inverse}</p>
              <div className="description">
                <h3>{this.props.cardDetails.attribute}</h3>
                <p>{this.props.cardDetails.description}</p>
              </div>
              <RaisedButton
                label={this.state.showFullDescription ? 'Fechar' : 'Ver mais'}
                labelPosition="before"
                icon={this.state.showFullDescription ? <Less/> : <More/>}
                onClick={() => this.handleFullDescription()}
              />
            </Col>
          </Col>
        </Row>
      </div>
    )
  }
}

export default CardDetails
