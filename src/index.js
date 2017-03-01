import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App'
import Index from './components/Index/Index'
import TarotTable from './components/TarotTable/TarotTable'
import Result from './components/Result/Result'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Index}/>
        <Route path="table" component={TarotTable} />
        <Route path="result" component={Result} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
