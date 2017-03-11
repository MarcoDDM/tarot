import React, { Component } from 'react'
import { Row, Col } from '../../components/Grid'

import { chooseBacksideStyle } from '../../actions'
import store from '../../store'

import './ConfigsContainer.sass'

class ConfigsContainer extends Component {

  constructor(){
    super()
    this.state = { choice: store.getState().backsideStyleState }
  }

  backsideCard(cardStyle){
    return require(`../../assets/img/backside/backside-card-${cardStyle}.png`)
  }

  handleChoice(choice){
    store.dispatch(chooseBacksideStyle(choice))
    this.setState({ choice })
  }

  classNames(cardStyle){
    return ([
      'img-responsive',
      cardStyle === this.state.choice ? 'active' : ''
    ]).join(' ')
  }

  render(){
    return(
      <div className="configs-container">
        <h1 className="page-title">Escolha o estilo de cartas:</h1>
        <Row>
          <Col lg={2} md={3} sm={3} xs={3} offset={['lg',2]}>
            <img
              src={this.backsideCard(1)}
              className={this.classNames(1)}
              onClick={() => this.handleChoice(1)}
              alt="Estilo 1"
            />
          </Col>
          <Col lg={2} md={3} sm={3} xs={3}>
            <img
              src={this.backsideCard(2)}
              className={this.classNames(2)}
              onClick={() => this.handleChoice(2)}
              alt="Estilo 2"
            />
          </Col>
          <Col lg={2} md={3} sm={3} xs={3}>
            <img
              src={this.backsideCard(3)}
              className={this.classNames(3)}
              onClick={() => this.handleChoice(3)}
              alt="Estilo 3"
            />
          </Col>
          <Col lg={2} md={3} sm={3} xs={3}>
            <img
              src={this.backsideCard(4)}
              className={this.classNames(4)}
              onClick={() => this.handleChoice(4)}
              alt="Estilo 4"
            />
          </Col>
        </Row>
      </div>
    )
  }

}

export default ConfigsContainer
