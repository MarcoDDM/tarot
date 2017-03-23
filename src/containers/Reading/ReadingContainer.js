import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import RaisedButton from 'material-ui/RaisedButton'
import CardDetails from '../../components/CardDetails'
import './ReadingContainer.sass'

const ReadingContainer = ({ userChoiceState, spreadTypeState, navigate }) => {

  window.scrollTo(0, 0)

  const cardInfo = userChoiceState.map(card => {
    return (
      <CardDetails
        key={card}
        card={card}
        choices={userChoiceState}
        spreadType={spreadTypeState} />
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
  spreadTypeState: state.spreadTypeState,
  userChoiceState: state.userChoiceState
})

const mapDispatchToProps = dispatch => ({
  navigate: route => dispatch(push(route))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReadingContainer)
