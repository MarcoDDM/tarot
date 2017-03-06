import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './containers/App/App'
import Index from './containers/Index/Index'
import TarotTable from './containers/TarotTable/TarotTable'
import Reading from './containers/Reading/Reading'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Index}/>
        <Route path="tarot-table" component={TarotTable} />
        <Route path="reading" component={Reading} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
