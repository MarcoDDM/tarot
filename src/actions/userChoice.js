import { CHOOSE_CARD, CLEAR_CHOICES } from '../constants/ActionTypes'

export const chooseCard = payload =>
  ({
    type: CHOOSE_CARD,
    payload
  })

export const clearChoices = () =>
  ({
    type: CLEAR_CHOICES
  })
