import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'

import { AppContainer } from './containers'
import { validateRoute } from './helpers/validateRoute'
import { history, store } from './store'

import {
  Home,
  TarotTable,
  Reading,
  SaveGame,
  SavedGames,
  Arcanums,
  Configs,
} from './screens'

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={Home}/>
        <Route
          path="tarot-table"
          component={TarotTable}
          onEnter={() => validateRoute('spreadtype-state', store)}
        />
        <Route
          path="reading"
          component={Reading}
          onEnter={() => validateRoute('userchoice-state', store)}
        />
        <Route
          path="save-game"
          component={SaveGame}
          onEnter={() => validateRoute('userchoice-state', store)}
        />
        <Route path="saved-games" component={SavedGames} />
        <Route path="arcanums" component={Arcanums} />
        <Route path="configs" component={Configs} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
