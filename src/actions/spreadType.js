import { CHOOSE_SPREAD_TYPE } from '../constants/ActionTypes'

export const chooseSpreadType = payload =>
  ({
    type: CHOOSE_SPREAD_TYPE,
    payload
  })
