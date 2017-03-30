import { SAVE_GAME } from '../constants/ActionTypes'
import { loadStoredState, updateStoredState } from '../helpers'

const defaultState = {
  savedGames: [],
  ...loadStoredState(),
}

const storage = (state = defaultState, action = {}) => {
  switch (action.type) {
    case SAVE_GAME:
      const newState = Object.assign({}, state, {
        ...loadStoredState(),
        savedGames: state.savedGames.concat(action.payload)
      })
      updateStoredState(newState)
      return newState

    default:
      return state
  }
}

export default storage
