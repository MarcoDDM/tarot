import { combineReducers } from 'redux'

const choiceReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHOOSE_CARD':
      return [ ...state ].concat(action.choice)

    case 'CLEAR_CHOICES':
      return []

    default:
      return state
  }  
}

const reducers = combineReducers({
  choiceState: choiceReducer
})

export default reducers
