import React, { Component } from 'react'
import Card from '../Card/Card'
import './ButtonSpreadType.sass'

class ButtonSpreadType extends Component {

  constructor(props){
    super(props)

    this.state = { cards: [] }
  }

  componentWillMount(){
    let cards = []

    for (let i = 0; i < this.props.type; i++)
      cards.push(<Card key={i} cardNumber={0} backsideCardStyle={1} />)

    this.setState({ cards })
  }

  render(){
    return (
      <button className="spread-type" onClick={() => this.props.click(this.props.type)}>
        <div className="cards">
          {this.state.cards}
        </div>
        <h4>{this.props.type} carta</h4>
      </button>
    )
  }

}

export default ButtonSpreadType
