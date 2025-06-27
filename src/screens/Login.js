import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { setUser } from '../actions'
import { loadStoredUser } from '../helpers'

class Login extends Component {
  state = { email: '' }

  handleSubmit = () => {
    const stored = loadStoredUser()
    if (stored && stored.email === this.state.email) {
      this.props.setUser(stored)
      this.props.navigate('/')
    } else {
      alert('Usuario no registrado')
    }
  }

  render() {
    return (
      <div className="login">
        <h1 className="page-title">Login</h1>
        <TextField
          floatingLabelText="Email"
          value={this.state.email}
          onChange={e => this.setState({ email: e.target.value })}
        />
        <br />
        <RaisedButton label="Ingresar" primary onClick={this.handleSubmit} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user)),
  navigate: route => dispatch(push(route))
})

export default connect(null, mapDispatchToProps)(Login)
