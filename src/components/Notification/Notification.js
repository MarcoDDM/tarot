import React, { Component } from 'react'
import Snackbar from 'material-ui/Snackbar'

class Notification extends Component {

  constructor(props){
    super(props)
    this.state = { open: false }
  }

  componentWillReceiveProps(nextProps){
    this.setState({ open: nextProps.open })
  }

  handleRequestClose(){
    this.setState({ open: false })
  }

  render(){
    return(
      <Snackbar
        open={this.state.open}
        message={this.props.message}
        autoHideDuration={this.props.duration}
        onRequestClose={() => this.handleRequestClose()}
      />
    )
  }
}

Notification.defaultProps = {
  open: false,
  message: '',
  duration: 0
}

export default Notification
