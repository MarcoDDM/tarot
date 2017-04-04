import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { List, ListItem } from 'material-ui/List'
import { chooseCard, clearChoices } from '../actions'

const SavedGames = props => {

  const {
    storedState,
    chooseCard,
    clearChoices,
    navigate
  } = props

  const handleItemClick = choices => {
    clearChoices()
    chooseCard(choices)
    navigate(`/reading`)
  }

  const listItems = Object.values(storedState.savedGames).map((item, i) =>
    (<ListItem
      key={i}
      primaryText={item.observations}
      secondaryText={`${item.fullDate} - ${item.hour}`}
      onClick={() => handleItemClick(item.choices)}
      secondaryTextLines={2}
    />))

  return(
    <div>
      <h1 className="page-title">Jogos salvos</h1>
      <List>
        {listItems}
      </List>
    </div>
  )
}

const mapStateToProps = state => ({
  storedState: state.storedState
})

const mapDispatchToProps = dispatch => ({
  chooseCard: choice => dispatch(chooseCard(choice)),
  clearChoices: () => dispatch(clearChoices()),
  navigate: route => dispatch(push(route))
})

export default connect(mapStateToProps, mapDispatchToProps)(SavedGames)
