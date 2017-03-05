import React, { Component } from 'react'
import './Card.sass'

class Card extends Component {

  constructor(props){
    super(props)
    this.state = { selected: false }
  }

  cardClick(){
    if(this.state.selected) return

    this.setState({ selected: true })

    if(this.props.handleChoice)
      this.props.handleChoice(this.props.cardNumber)
  }

  render(){
    let className = `${this.state.selected ? 'card show-frontside' : 'card'}`
    let backside = require(`../../assets/img/backside-card-${this.props.backsideCardStyle}.png`)
    let frontside = require(`../../assets/img/major-arcanums/rider-waite/${this.props.cardNumber}.png`)

    return(
      <div className={className} onClick={this.cardClick.bind(this)}>
        <div className="backside">
          <img src={backside} className=" img-responsive" alt="Back card"/>
        </div>
        <div className="frontside">
          <img src={frontside} className=" img-responsive" alt="Front card"/>
        </div>
      </div>
    )
  }

}

export default Card
