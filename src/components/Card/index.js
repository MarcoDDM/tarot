import React, { Component } from 'react'
import CardDetails from './CardDetails'
import './index.sass'

class Card extends Component {

  constructor(props){
    super(props)

    this.state = {
      clicked: false,
      showCardDetails: false
    }
  }

  cardClick(e){
    e.preventDefault()

    if(this.state.clicked){
      this.setState({ showCardDetails: true })
      return
    }
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
        <CardDetails cardNumber={this.props.cardNumber} show={this.state.showCardDetails} />
      </div>
    )
  }

}

export default Card
