import React, { Component } from 'react'
import CardInfo from '../../components/CardInfo/CardInfo'
import store from '../../store'
import './Reading.sass'

class Reading extends Component {

  constructor(){
    super()
    this.state = { cards: [] }
  }

  componentWillMount(){
    let cards = store.getState().choiceState

    if(!cards || !cards.length){
      this.goToHome()
      return
    }

    this.setState({ cards })
    window.scrollTo(0, 0)
  }

  goToHome(){
    this.props.router.push('/')
  }

  render(){
    const cards = this.state.cards

    const cardInfo = cards.map(card => {
      return (<CardInfo card={card} key={card} />)
    })

    return (
      <div className="reading">
        <a className="btn-back" onClick={() => this.goToHome()}>Novo</a>
        {cardInfo}
      </div>
    )
  }
}

export default Reading
