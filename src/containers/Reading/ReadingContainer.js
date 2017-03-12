import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import CardInfo from '../../components/CardInfo'
import store from '../../store'
import './ReadingContainer.sass'

const btnStyle = { marginBottom: 33 }

class ReadingContainer extends Component {

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

    this.setState({ ...this.state, choices, spreadType })
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
        <RaisedButton label="Novo jogo" style={btnStyle} onTouchTap={() => this.goToHome()} />
        {cardInfo}
        <RaisedButton label="Novo jogo" style={btnStyle} onTouchTap={() => this.goToHome()} />
      </div>
    )
  }
}

export default ReadingContainer
