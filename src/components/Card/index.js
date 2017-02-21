import React, { Component } from 'react'
import './index.sass'

class Card extends Component {

  constructor(props){
    super(props)

    this.state = {
      clicked: false
    }
  }

  cardClick(e){
    e.preventDefault()

    if(this.state.clicked) return

    this.setState({ clicked: true })
    this.props.handleChoice(this.props.cardNumber)
  }

  render(){
    let className = `card ${this.state.clicked ? 'clicked frontside' : ''}`
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
