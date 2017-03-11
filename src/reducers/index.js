import { combineReducers } from 'redux'
import choiceReducer from './choiceReducer'
import spreadReducer from './spreadReducer'
import backsideStyleReducer from './backsideStyleReducer'

const reducers = combineReducers({
  choiceState: choiceReducer,
  spreadState: spreadReducer,
  backsideStyleState: backsideStyleReducer
})

export default reducers
