import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App'
import TarotTable from './components/TarotTable'
import CardsReader from './components/CardsReader'
import './assets/css/base.sass'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={TarotTable}/>
      <Route path="cards-reader/:cards" component={CardsReader} />
    </Route>
  </Router>,
  document.getElementById('root')
)
