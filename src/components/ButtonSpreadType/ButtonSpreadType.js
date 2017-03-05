import React, { Component } from 'react'
import Card from '../Card/Card'
import spreadTypes from '../../helpers/spreadTypes'
import './ButtonSpreadType.sass'

class ButtonSpreadType extends Component {

  constructor(props){
    super(props)
    this.state = { cards: [] }
  }

  componentWillMount(){
    let cards = []
    let spreadAmountCards = spreadTypes[this.props.type].amountCards

    for (let i = 0; i < spreadAmountCards; i++)
      cards.push(<Card key={i} cardNumber={0} backsideCardStyle={1} />)

    this.setState({ cards })
  }

  render(){
    let amountCards = spreadTypes[this.props.type].amountCards
    let description = spreadTypes[this.props.type].description
    return (
      <button className="spread-type" onClick={() => this.props.click(this.props.type)}>
        <div className="cards">
          {this.state.cards}
        </div>
        <h4>{amountCards} carta</h4>
        <p>{description}</p>
      </button>
    )
  }

}

export default ButtonSpreadType
