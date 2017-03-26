import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { Row, Col } from '../components'
import { SpreadCardsContainer } from '../containers'
import { chooseSpreadType } from '../actions'

const Home = ({ chooseSpreadType, navigate }) => {

  const handleChoice = choice => {
    chooseSpreadType(choice)
    navigate('/tarot-table')
  }

  return (
    <div>
      <h1 className="page-title">Escolha o tipo de tiragem:</h1>
      <Row>
        <Col lg="3" md="4" sm="6" xs="12" offset={['lg', 3]}>
          <button className="button-spread-type" onClick={() => handleChoice('simple')}>
            <SpreadCardsContainer spreadType="simple" showSpreadDescription={true} />
          </button>
        </Col>
        <Col lg="3" md="4" sm="6" xs="12">
          <button className="button-spread-type" onClick={() => handleChoice('period')}>
            <SpreadCardsContainer spreadType="period" showSpreadDescription={true} />
          </button>
        </Col>
      </Row>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  chooseSpreadType: choice => dispatch(chooseSpreadType(choice)),
  navigate: route => dispatch(push(route))
})

export default connect(null, mapDispatchToProps)(Home)
