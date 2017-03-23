import { CHOOSE_SPREAD_TYPE } from '../constants/ActionTypes'

export const chooseSpreadType = choice =>
  ({
    type: CHOOSE_SPREAD_TYPE,
    choice
  })
