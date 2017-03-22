import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import RaisedButton from 'material-ui/RaisedButton'
import CardDetails from '../../components/CardDetails'
import './ReadingContainer.sass'

const ReadingContainer = ({ choiceState, spreadState, navigate }) => {

  window.scrollTo(0, 0)

  const cardInfo = choiceState.map(card => {
    return (
      <CardDetails
        key={card}
        card={card}
        choices={choiceState}
        spreadType={spreadState} />
    )
  })

  const btnStyle = { marginBottom: 33 }

  return (
    <div className="reading">
      <RaisedButton label="Novo jogo" style={btnStyle} onTouchTap={() => navigate('/')} />
      {cardInfo}
    </div>
  )
}

const mapStateToProps = state => ({
  spreadState: state.spreadState,
  choiceState: state.choiceState
})

const mapDispatchToProps = dispatch => ({
  navigate: route => dispatch(push(route))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReadingContainer)
