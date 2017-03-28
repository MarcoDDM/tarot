import { TOGGLE_FULL_DESCRIPTION } from '../constants/ActionTypes'

const defaultState = {
  showFullDescription: false
}

const cardDetails = (state = defaultState, action = {}) => {
  switch (action.type) {
    case TOGGLE_FULL_DESCRIPTION:
      return Object.assign({}, state, {
        showFullDescription: !state.showFullDescription
      })

    default:
      return state
  }
}

export default cardDetails
