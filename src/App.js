import React from 'react'
import HeaderApp from './components/HeaderApp/HeaderApp'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import 'bootstrap-css-only'
import './assets/css/base.sass'
import './assets/css/animations.sass'

const App = ({ children, location }) => (
  <main className="container">
    <HeaderApp/>
    <ReactCSSTransitionGroup
      transitionName="page-transition"
      transitionAppear={true}
      transitionAppearTimeout={50}
      transitionLeave={false}
      transitionEnterTimeout={300}>
      {React.cloneElement(children, { key: location.pathname })}
    </ReactCSSTransitionGroup>
  </main>
)

export default App
