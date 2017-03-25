import React from 'react'
import { connect } from 'react-redux'

import { showNotification } from '../../actions'
import Snackbar from 'material-ui/Snackbar'

const Notification = ({ notificationState, showNotification }) => {

  const handleRequestClose = () => showNotification({ open: false })

  return(
    <Snackbar
      open={notificationState.open}
      message={notificationState.message}
      autoHideDuration={notificationState.duration}
      onRequestClose={() => handleRequestClose()}
    />
  )
}

const mapStateToProps = state => ({
  notificationState: state.notificationState
})

const mapDispatchToProps = dispatch => ({
  showNotification: notification => dispatch(showNotification(notification))
})

export default connect(mapStateToProps, mapDispatchToProps)(Notification)
