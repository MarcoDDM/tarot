import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { setUser } from '../actions'

class Register extends Component {
  state = { name: '', email: '' }

  handleChange = field => event => {
    this.setState({ [field]: event.target.value })
  }

  handleSubmit = () => {
    const { name, email } = this.state
    if (!name || !email) return
    this.props.setUser({ name, email })
    this.props.navigate('/')
  }

  render() {
    return (
      <div className="register">
        <h1 className="page-title">Registro</h1>
        <TextField
          floatingLabelText="Nombre"
          value={this.state.name}
          onChange={this.handleChange('name')}
        />
        <br />
        <TextField
          floatingLabelText="Email"
          value={this.state.email}
          onChange={this.handleChange('email')}
        />
        <br />
        <RaisedButton label="Registrarse" primary onClick={this.handleSubmit} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user)),
  navigate: route => dispatch(push(route))
})

export default connect(null, mapDispatchToProps)(Register)
