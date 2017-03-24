import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Row, Col } from '../Grid'
import Card from '../Card'
import './ShuffleCards.sass'

class ShuffleCards extends Component {

  constructor(props){
    super(props)
    this.state = { cards: [] }
  }

  componentWillMount(){
    const cards = []
    let backsideStyle = this.props.backsideStyleState

    for (let i = 0; i < 21; i++){
      cards.push(
        <Col lg="2" md="2" sm="2" xs="3" key={i}>
          <Card
            cardNumber={i}
            backsideCardStyle={backsideStyle}
            handleChoice={() => this.handleChoice(i)} />
        </Col>
      )
    }

    this.shuffleCards(cards)
  }

  shuffleCards(cardsToShuffle){
    const cards = cardsToShuffle
    cards.sort(() => .5 - Math.random())
    this.setState({ cards })
  }

  handleChoice(choice){
    this.props.handleChoice(choice)
  }

  render(){
    return (
      <div className="shuffle-cards">
        <Row>
          {this.state.cards}
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  backsideStyleState: state.backsideStyleState.style,
})

export default connect(mapStateToProps)(ShuffleCards)
