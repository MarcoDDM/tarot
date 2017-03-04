import React, { Component } from 'react'
import store from '../../store'
import arcanums from '../../helpers/arcanums'
import './Result.sass'

class Result extends Component {

  constructor(){
    super()

    this.state = {
      cards: []
    }
  }

  componentWillMount(){
    let cards = store.getState().choiceState
    
    if(!cards || !cards.length){
      this.goToHome()
      return
    }

    this.setState({ cards })
    window.scrollTo(0, 0)
  }

  goToHome(){
    this.props.router.push('/')
  }

  render(){
    const cards = this.state.cards

    const cardInfo = cards.map(card => {
      let cardImage = require(`../../assets/img/major-arcanums/rider-waite/${card}.png`)
      return (
        <div className="wrapper col-lg-12 col-md-12 col-sm-12 col-xs-12" key={card}>
          <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12">
            <img src={cardImage} alt={arcanums.major[card].name} className="card-image img-responsive"/>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-9 col-xs-12">
            <h2>{arcanums.major[card].name} - Arcano {card}</h2>
            <h3>{arcanums.major[card].attribute}</h3>
            <p>{arcanums.major[card].description}</p>
          </div>
        </div>
      )
    })

    return (
      <div className="result">
        <a className="btn-back" onClick={() => this.goToHome()}>Novo</a>
        <div className="row">
          {cardInfo}
        </div>
      </div>
    )
  }
}

export default Result
