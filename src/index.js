import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import AppContainer from './containers/App/AppContainer'
import IndexContainer from './containers/Index/IndexContainer'
import TarotTableContainer from './containers/TarotTable/TarotTableContainer'
import ReadingContainer from './containers/Reading/ReadingContainer'

import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={IndexContainer}/>
        <Route path="tarot-table" component={TarotTableContainer} />
        <Route path="reading" component={ReadingContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
