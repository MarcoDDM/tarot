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

  spreadTypeCardFeature(){
    if(this.props.spreadTypeCardFeature)
      return(<span className="spreadTypeCardFeature">{this.props.spreadTypeCardFeature}</span>)
  }

  classNames(){
    return [
      'card',
      this.state.selected || this.props.display === 'frontside' ? 'show-frontside' : '',
      this.props.cardOverlay ? 'overlay' : ''
    ].join(' ')
  }

  render(){
    let backside = require(`../../assets/img/backside/backside-card-${this.props.backsideCardStyle}.png`)
    let frontside = require(`../../assets/img/major-arcanums/rider-waite/${this.props.cardNumber}.png`)

    return(
      <div className={this.classNames()} onClick={this.cardClick.bind(this)}>
        <div className="backside">
          <img src={backside} className="img-responsive" alt="Back card"/>
        </div>
        <div className="frontside">
          <img src={frontside} className="img-responsive" alt="Front card"/>
        </div>
        { this.spreadTypeCardFeature() }
      </div>
    )
  }

}

Card.defaultProps = {
  cardNumber: 0,
  cardOverlay: false,
  backsideCardStyle: 1
}

export default Card
