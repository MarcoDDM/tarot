import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'

const logger = createLogger()

const store = createStore(
  reducers,
  applyMiddleware(thunk, promise, logger)
)

export default store
