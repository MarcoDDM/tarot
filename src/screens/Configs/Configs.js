import React from 'react'
import { connect } from 'react-redux'

import { Row, Col } from '../../components'
import { chooseBacksideStyle, showNotification } from '../../actions'

import './Configs.sass'

const Configs = ({ backsideStyleState, chooseBacksideStyle, showNotification }) => {

  const backsideCard = cardStyle =>
    require(`../../assets/img/backside/backside-card-${cardStyle}.png`)

  const handleChoice = choice => {
    chooseBacksideStyle(choice)
    showNotification({
      open: true,
      message: 'Estilo de cartas alterado com sucesso!',
      duration: 3000
    })
  }

  const classNames = cardStyle => ([
    'img-responsive',
    cardStyle === backsideStyleState ? 'active' : ''
  ]).join(' ')

  return(
    <div className="configs">
      <h1 className="page-title">Escolha o estilo de cartas:</h1>
      <Row>
        <Col lg={2} md={3} sm={3} xs={3} offset={['lg',2]}>
          <img
            src={backsideCard(1)}
            className={classNames(1)}
            onClick={() => handleChoice(1)}
            alt="Estilo 1"
          />
        </Col>
        <Col lg={2} md={3} sm={3} xs={3}>
          <img
            src={backsideCard(2)}
            className={classNames(2)}
            onClick={() => handleChoice(2)}
            alt="Estilo 2"
          />
        </Col>
        <Col lg={2} md={3} sm={3} xs={3}>
          <img
            src={backsideCard(3)}
            className={classNames(3)}
            onClick={() => handleChoice(3)}
            alt="Estilo 3"
          />
        </Col>
        <Col lg={2} md={3} sm={3} xs={3}>
          <img
            src={backsideCard(4)}
            className={classNames(4)}
            onClick={() => handleChoice(4)}
            alt="Estilo 4"
          />
        </Col>
      </Row>
    </div>
  )
}

const mapStateToProps = state => ({
  backsideStyleState: state.backsideStyleState.style
})

const mapDispatchToProps = dispatch => ({
  chooseBacksideStyle: choice => dispatch(chooseBacksideStyle(choice)),
  showNotification: notification => dispatch(showNotification(notification))
})

export default connect(mapStateToProps, mapDispatchToProps)(Configs)
