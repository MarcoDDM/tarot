import React, { Component } from 'react'
import { chooseDrawing } from '../../actions'
import store from '../../store'
import './Index.sass'

class Index extends Component {

  handleChoice(choice){
    store.dispatch(chooseDrawing(choice))
    this.props.router.push(`/tarot-table`)
  }

  render(){
    return (
      <div className="index">
        <h1>Escolha o tipo de tiragem:</h1>
        <button onClick={() => this.handleChoice(1)}>1 carta</button>
        <button onClick={() => this.handleChoice(3)}>3 cartas</button>
      </div>
    )
  }

}

export default Index
