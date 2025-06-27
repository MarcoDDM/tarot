import { SET_USER } from '../constants/ActionTypes'
import { loadStoredUser, updateStoredUser } from '../helpers'

const defaultState = loadStoredUser() || null

const user = (state = defaultState, action = {}) => {
  switch (action.type) {
    case SET_USER:
      updateStoredUser(action.payload)
      return action.payload
    default:
      return state
  }
}

export default user
