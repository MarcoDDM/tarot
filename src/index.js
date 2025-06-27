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
  Register,
  Login,
} from './screens'

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppContainer}>
        <IndexRoute
          component={Home}
          onEnter={() => validateRoute('user-auth', store)}
        />
        <Route
          path="tarot-table"
          component={TarotTable}
          onEnter={() => { validateRoute('user-auth', store); validateRoute('spreadtype-state', store) }}
        />
        <Route
          path="reading"
          component={Reading}
          onEnter={() => { validateRoute('user-auth', store); validateRoute('userchoice-state', store) }}
        />
        <Route
          path="save-game"
          component={SaveGame}
          onEnter={() => { validateRoute('user-auth', store); validateRoute('userchoice-state', store) }}
        />
        <Route
          path="saved-games"
          component={SavedGames}
          onEnter={() => validateRoute('user-auth', store)}
        />
        <Route
          path="arcanums"
          component={Arcanums}
          onEnter={() => validateRoute('user-auth', store)}
        />
        <Route
          path="configs"
          component={Configs}
          onEnter={() => validateRoute('user-auth', store)}
        />
        <Route path="register" component={Register} />
        <Route path="login" component={Login} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
