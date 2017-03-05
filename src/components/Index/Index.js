import React, { Component } from 'react'
import Card from '../Card/Card'
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
            <button className="spread-type" onClick={() => this.handleChoice(1)}>
              <div className="cards">
                <Card cardNumber={0} backsideCardStyle={1} />
              </div>
              <h4>1 carta</h4>
            </button>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
            <button className="spread-type" onClick={() => this.handleChoice(3)}>
              <div className="cards">
                <Card cardNumber={0} backsideCardStyle={1} />
                <Card cardNumber={0} backsideCardStyle={1} />
                <Card cardNumber={0} backsideCardStyle={1} />
              </div>
              <h4>3 cartas</h4>
            </button>
          </div>
        </div>
      </div>
    )
  }

}

export default Index
