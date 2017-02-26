import React, { Component } from 'react'
import { Link } from 'react-router'
import arcanums from '../../helpers/arcanums'
import './CardsReader.sass'

class CardsReader extends Component {

  render(){
    let cards = this.props.params.cards.split(',')

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
        <Link to="/" className="btn-back">Novo</Link>
        <ul>
          {cardInfo}
        </ul>
      </div>
    )
  }
}

export default CardsReader
