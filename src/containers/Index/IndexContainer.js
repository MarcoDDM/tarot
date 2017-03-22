import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { Row, Col } from '../../components/Grid'
import ButtonSpreadType from '../../components/ButtonSpreadType'
import { chooseSpreadType } from '../../actions'

const IndexContainer = ({ chooseSpreadType, navigate }) => {

  const handleChoice = choice => {
    chooseSpreadType(choice)
    navigate('/tarot-table')
  }

  return (
    <div className="index">
      <h1 className="page-title">Escolha o tipo de tiragem:</h1>
      <Row>
        <Col lg="3" md="4" sm="6" xs="12" offset={['lg', 3]}>
          <ButtonSpreadType spreadType="simple" click={choice => handleChoice(choice)} />
        </Col>
        <Col lg="3" md="4" sm="6" xs="12">
          <ButtonSpreadType spreadType="period" click={choice => handleChoice(choice)} />
        </Col>
      </Row>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  chooseSpreadType: choice => dispatch(chooseSpreadType(choice)),
  navigate: route => dispatch(push(route))
})

export default connect(null, mapDispatchToProps)(IndexContainer)
