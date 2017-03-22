import { CHOOSE_BACKSIDE_STYLE } from '../constants/ActionTypes'

const backsideStyle = (state = 1, action) => {
  switch (action.type) {
    case CHOOSE_BACKSIDE_STYLE:
      return action.choice

    default:
      return state
  }
}

export default backsideStyle
