import { SHOW_NOTIFICATION } from '../constants/ActionTypes'

export const showNotification = payload =>
  ({
    type: SHOW_NOTIFICATION,
    payload
  })
