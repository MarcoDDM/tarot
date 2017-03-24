import { CHOOSE_CARD, CLEAR_CHOICES } from '../constants/ActionTypes'

const userChoice = (state = [], action = {}) => {
  switch (action.type) {
    case CHOOSE_CARD:
      return [ ...state ].concat(action.payload)

    case CLEAR_CHOICES:
      return []

    default:
      return state
  }
}

export default userChoice
