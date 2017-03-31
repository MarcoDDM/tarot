import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import RaisedButton from 'material-ui/RaisedButton'
import { CardDetailsContainer } from '../containers'

const Reading = ({ userChoiceState, spreadTypeState, navigate }) => {

  window.scrollTo(0, 0)

  const cardInfo = userChoiceState.map((card, i) => {
    return (
      <CardDetailsContainer
        key={i}
        cardNumber={card}
        choices={userChoiceState}
        spreadType={spreadTypeState} />
    )
  })

  const btnStyle = { marginBottom: 33, marginRight: 20 }

  return (
    <div className="reading">
      <RaisedButton label="Novo jogo" style={btnStyle} onTouchTap={() => navigate('/')} />
      <RaisedButton label="Salvar jogo" style={btnStyle} onTouchTap={() => navigate('/save-game')} />
      {cardInfo}
    </div>
  )
}

const mapStateToProps = state => ({
  spreadTypeState: state.spreadTypeState.type,
  userChoiceState: state.userChoiceState
})

const mapDispatchToProps = dispatch => ({
  navigate: route => dispatch(push(route))
})

export default connect(mapStateToProps, mapDispatchToProps)(Reading)
