import { hashHistory } from 'react-router'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import { loadState } from '../helpers'

import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import promise from 'redux-promise'
import reducers from '../reducers'

const logger = createLogger()
const persistedState = () => loadState()

export const store = createStore(
  combineReducers({
    ...reducers,
    persistedState: persistedState,
    routing: routerReducer,
  }),
  compose(
    applyMiddleware(thunk, promise, logger),
    applyMiddleware(routerMiddleware(hashHistory)),
  ),
)

export const history = syncHistoryWithStore(hashHistory, store)
