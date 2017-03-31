import { SAVE_GAME } from '../constants/ActionTypes'

export const saveGame = payload =>
  ({
    type: SAVE_GAME,
    payload
  })
