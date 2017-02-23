import React, { Component } from 'react'
import arcanums from '../../helpers/arcanums'
import './CardsReader.sass'

class CardsReader extends Component {

  constructor(props){
    super(props)
    console.log()
  }

  render(){
    let className = `wrap-cards-reader ${this.props.show ? 'show' : 'hide'}`
    let cards = this.props.cards

    cards = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]

    let cardInfo = cards.map(card => {
      return (
        <li key={card}>
          <img src={require(`../../assets/img/major-arcanums/rider-waite/${card}.png`)} alt="" />
          <div className="wrap-text">
            <h2>{arcanums.major[card].name} - Arcano {card}</h2>
            <p>{arcanums.major[card].description}</p>
          </div>
        </li>
      )
    })

    return (
      <div className={className}>
        <ul>
          {cardInfo}
        </ul>
      </div>
    )
  }
}

export default CardsReader
