import React, { Component } from 'react'
import './Card.sass'

class Card extends Component {

  constructor(props){
    super(props)
    this.state = {
      selected: false,
      frontside: '',
      backside: ''
    }
  }

  componentWillMount(){
    let backside = require(`../../assets/img/backside/backside-card-${this.props.backsideCardStyle}.png`)
    let frontside = require(`../../assets/img/major-arcanums/rider-waite/${this.props.cardNumber}.png`)
    this.setState({ ...this.state, frontside, backside })
  }

  cardClick(){
    this.setState({ ...this.state, selected: true })
    this.props.handleChoice && this.props.handleChoice(this.props.cardNumber)
  }

  spreadTypeCardFeature(){
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
    return(
      <div className={this.classNames()} onClick={() => !this.state.selected && this.cardClick()}>
        <div className="backside">
          <img src={this.state.backside} className="img-responsive" alt="Back card"/>
        </div>
        <div className="frontside">
          <img src={this.state.frontside} className="img-responsive" alt="Front card"/>
        </div>
        {this.props.spreadTypeCardFeature && this.spreadTypeCardFeature()}
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
