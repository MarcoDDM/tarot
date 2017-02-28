import React, { Component } from 'react'
import './Card.sass'

class Card extends Component {

  constructor(props){
    super(props)

    this.state = {
      selected: false
    }
  }

  cardClick(e){
    e.preventDefault()
    if(this.state.selected) return
    this.setState({ selected: true })
    this.props.handleChoice(this.props.cardNumber)
  }

  render(){
    let className = `card ${this.state.selected ? 'frontside' : ''}`
    let card = require(`../../assets/img/major-arcanums/rider-waite/${this.props.cardNumber}.png`)

    return(
      <div className='wrap-card'>
        <button className={className} onClick={this.cardClick.bind(this)}>
          <div className="back"></div>
          <div className="front" style={{ backgroundImage: `url(${card})` }}></div>
        </button>
      </div>
    )
  }

}

export default Card
