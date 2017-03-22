import { CHOOSE_SPREAD_TYPE, CLEAR_SPREAD } from '../constants/ActionTypes'

const spreadType = (state = 'simple', action) => {
  switch (action.type) {
    case CHOOSE_SPREAD_TYPE:
      return action.choice

    case CLEAR_SPREAD:
      return []

    default:
      return state
  }
}

export default spreadType
