import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import { validateRoute } from './helpers/validateRoute'

import AppContainer from './containers/App/AppContainer'
import IndexContainer from './containers/Index/IndexContainer'
import TarotTableContainer from './containers/TarotTable/TarotTableContainer'
import ReadingContainer from './containers/Reading/ReadingContainer'
import ConfigsContainer from './containers/Configs/ConfigsContainer'

import { history, store } from './store'

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={IndexContainer}/>
        <Route path="tarot-table" component={TarotTableContainer}
          onEnter={() => validateRoute('tarot-table', store)} />
        <Route path="reading" component={ReadingContainer}
          onEnter={() => validateRoute('reading', store)} />
        <Route path="configs" component={ConfigsContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
