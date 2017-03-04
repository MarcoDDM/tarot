import { combineReducers } from 'redux'
import choiceReducer from './choiceReducer'
import spreadReducer from './spreadReducer'

const reducers = combineReducers({
  choiceState: choiceReducer,
  spreadState: spreadReducer
})

export default reducers
