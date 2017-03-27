import React, { Component } from 'react'
import './Card.sass'

class Card extends Component {

  constructor(props){
    super(props)
    this.state = {
      selected: false
    }
  }

  handleChoice(){
    this.setState({ selected: true })
    const cardNumber = this.props.reversed ? `-${this.props.cardNumber}` : this.props.cardNumber
    this.props.handleChoice && this.props.handleChoice(cardNumber)
  }

  spreadTypeCardFeature(){
    return(<span className="spreadTypeCardFeature">{this.props.spreadTypeCardFeature}</span>)
  }

  classNames(){
    return [
      'card',
      this.state.selected || this.props.display === 'frontside' ? 'show-frontside' : '',
      this.props.reversed ? 'reversed' : '',
      this.props.cardOverlay ? 'overlay' : ''
    ].join(' ')
  }

  render(){
    return(
      <div className={this.classNames()} onClick={() => !this.state.selected && this.handleChoice()}>
        <div className="backside">
          <img src={this.props.backsideImage} className="img-responsive" alt="Back card"/>
        </div>
        <div className="frontside">
          <img src={this.props.frontsideImage} className="img-responsive" alt="Front card"/>
        </div>
        {this.props.spreadTypeCardFeature && this.spreadTypeCardFeature()}
      </div>
    )
  }
}

Card.defaultProps = {
  cardNumber: 0,
  cardOverlay: false
}

export default Card
