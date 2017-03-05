import React, { Component } from 'react'
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
        <div className="row text-center">
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-lg-offset-3">
            <ButtonSpreadType type={1} click={choice => this.handleChoice(choice)} />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
            <ButtonSpreadType type={3} click={choice => this.handleChoice(choice)} />
          </div>
        </div>
      </div>
    )
  }

}

export default Index
