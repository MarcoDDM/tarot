import { SHOW_NOTIFICATION } from '../constants/ActionTypes'

const defaultState = {
  open: false,
  message: '',
  duration: 3000
}

const notifications = (state = defaultState, action = {}) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return Object.assign({}, state, {
        open: action.payload.open,
        message: action.payload.message || defaultState.message,
        duration: action.payload.duration || defaultState.duration
      })

    default:
      return state
  }
}

export default notifications
