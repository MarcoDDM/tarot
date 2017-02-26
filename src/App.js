import React from 'react'
import HeaderApp from './components/HeaderApp'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './assets/css/animations.sass'

const App = ({ children, location }) => (
  <main>
    <HeaderApp/>
    <ReactCSSTransitionGroup
      component="div"
      transitionName="page-transition"
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}>
      {React.cloneElement(children, {
        key: location.pathname
      })}
    </ReactCSSTransitionGroup>
  </main>
)

export default App
