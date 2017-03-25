import { CHOOSE_SPREAD_TYPE, CLEAR_SPREAD } from '../constants/ActionTypes'

const spreadType = (state = {}, action = {}) => {
  switch (action.type) {
    case CHOOSE_SPREAD_TYPE:
      return Object.assign({}, state, {
        type: action.payload
      })

    case CLEAR_SPREAD:
      return []

    default:
      return state
  }
}

export default spreadType
