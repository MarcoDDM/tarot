import { CHOOSE_BACKSIDE_STYLE } from '../constants/ActionTypes'

const defaultState = { style: 1 }

const backsideStyle = (state = defaultState, action = {}) => {
  switch (action.type) {
    case CHOOSE_BACKSIDE_STYLE:
      return Object.assign({}, state, {
        style: action.payload
      })

    default:
      return state
  }
}

export default backsideStyle
