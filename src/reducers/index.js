import { combineReducers } from 'redux'
import choiceReducer from './choiceReducer'
import drawingReducer from './drawingReducer'

const reducers = combineReducers({
  choiceState: choiceReducer,
  drawingState: drawingReducer
})

export default reducers
