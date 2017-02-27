import React, { Component } from 'react'
import { clearChoices } from '../../actions'
import store from '../../store'
import arcanums from '../../helpers/arcanums'
import './Result.sass'

class Result extends Component {

  backButton(){
    store.dispatch(clearChoices())
    this.props.router.push('/')
  }

  render(){
    let cards = store.getState().choiceState

    // cards = [0,1,2,3,4,5,6,7,8,9]

    let cardInfo = cards.map(card => {
      let cardImage = require(`../../assets/img/major-arcanums/rider-waite/${card}.png`)
      return (
        <li key={card}>
          <img src={cardImage} alt={arcanums.major[card].name} />
          <div className="wrap-text">
            <h2>{arcanums.major[card].name} - Arcano {card}</h2>
            <p>{arcanums.major[card].description}</p>
          </div>
        </li>
      )
    })

    return (
      <div className='wrap-cards-reader'>
        <a className="btn-back" onClick={() => this.backButton()}>Novo</a>
        <ul>
          {cardInfo}
        </ul>
      </div>
    )
  }
}

export default Result