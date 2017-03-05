import React, { Component } from 'react'
import { Row, Col } from '../../components/Grid/Grid'
import ButtonSpreadType from '../../components/ButtonSpreadType/ButtonSpreadType'
import { chooseSpreadType } from '../../actions'
import store from '../../store'
import './Index.sass'

class Index extends Component {

  handleChoice(choice){
    store.dispatch(chooseSpreadType(choice))
    this.props.router.push(`/tarot-table`)
  }

  render(){
    return (
      <div className="index">
        <h1>Escolha o tipo de tiragem:</h1>
        <Row>
          <Col lg="3" md="4" sm="6" xs="6" offset={['lg', 3]}>
            <ButtonSpreadType type="1" click={choice => this.handleChoice(choice)} />
          </Col>
          <Col lg="3" md="4" sm="6" xs="6">
            <ButtonSpreadType type="3" click={choice => this.handleChoice(choice)} />
          </Col>
        </Row>
      </div>
    )
  }

}

export default Index
