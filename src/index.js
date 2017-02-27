import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App'
import TarotTable from './components/TarotTable'
import CardsReader from './components/CardsReader'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={TarotTable}/>
        <Route path="cards-reader" component={CardsReader} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
