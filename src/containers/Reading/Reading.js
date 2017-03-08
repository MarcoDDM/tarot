import React, { Component } from 'react'
import CardInfo from '../../components/CardInfo/CardInfo'
import store from '../../store'
import './Reading.sass'

class Reading extends Component {

  constructor(){
    super()
    this.state = {
      choices: [],
      spreadType: ''
    }
  }

  componentWillMount(){
    let choices = store.getState().choiceState
    let spreadType = store.getState().spreadState    

    if(!choices || !choices.length){
      this.goToHome()
      return
    }

    this.setState({ choices, spreadType })

    window.scrollTo(0, 0)
  }

  goToHome(){
    this.props.router.push('/')
  }

  render(){
    const choices = this.state.choices

    const cardInfo = choices.map(card => {
      return (
        <CardInfo
          key={card}
          card={card}
          choices={choices}
          spreadType={this.state.spreadType} />
      )
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
