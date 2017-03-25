import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'

import { HeaderContainer } from './'
import { Notification } from '../components'

import 'bootstrap-css-only'
import '../assets/css/base.sass'
import '../assets/css/animations.sass'

injectTapEventPlugin()

const App = ({ children, location }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <main className="main">
      <HeaderContainer />
      <div className="container">
        <ReactCSSTransitionGroup
          transitionName="page-transition"
          transitionAppear={true}
          transitionAppearTimeout={50}
          transitionLeave={false}
          transitionEnterTimeout={300}>
          {React.cloneElement(children, { key: location.pathname })}
        </ReactCSSTransitionGroup>
      </div>
      <Notification />
    </main>
  </MuiThemeProvider>
)

export default App
