import React, { Component } from 'react'
import Card from '../Card/Card'
import spreadTypes from '../../helpers/spreadTypes'
import './ButtonSpreadType.sass'

class ButtonSpreadType extends Component {

  constructor(props){
    super(props)
    this.state = {
      cards: [],
      spreadType: {}
    }
  }

  componentWillMount(){
    let cards = []
    let spreadType = spreadTypes[this.props.type]
    let spreadAmountCards = spreadType.amountCards

    for (let i = 0; i < spreadAmountCards; i++)
      cards.push(
        <Card
          key={i}
          cardNumber={0}
          backsideCardStyle={1}
          spreadTypeCardFeature={spreadType.cardsFeatures[i+1]}
        />
      )

    this.setState({ cards, spreadType })
  }

  render(){
    let amountCards = this.state.spreadType.amountCards
    let description = this.state.spreadType.description
    let classNames = [
      'spread-type',
      this.state.spreadType.className
    ].join(' ')

    return (
      <button className={classNames} onClick={() => this.props.click(this.props.type)}>
        <div className="cards">
          {this.state.cards}
        </div>
        <h4>{amountCards} {amountCards === 1 ? 'carta' : 'cartas'}</h4>
        <p className="description">{description}</p>
      </button>
    )
  }

}

export default ButtonSpreadType
