import React, { Component } from 'react'
import Card from '../Card/Card'
import spreadTypes from '../../helpers/spreadTypes'
import './SpreadCards.sass'

class SpreadCards extends Component {

  constructor(props){
    super(props)
    this.state = {
      cards: [],
      spreadType: {}
    }
  }

  componentWillMount(){
    let cards = []
    let spreadType = spreadTypes[this.props.spreadType]
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

  showSpreadDescription(){
    if(this.props.showSpreadDescription){
      let amountCards = this.state.spreadType.amountCards
      let description = this.state.spreadType.description
      return (
        <div><h4>{amountCards} {amountCards === 1 ? 'carta' : 'cartas'}</h4>
        <p className="description">{description}</p></div>
      )
    }
  }

  render(){
    let classNames = [
      'spread-cards',
      this.state.spreadType.className
    ].join(' ')

    return (
      <div className={classNames}>
        <div className="cards">
          {this.state.cards}
        </div>
        { this.showSpreadDescription() }
      </div>
    )
  }
}

export default SpreadCards
