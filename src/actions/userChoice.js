import { CHOOSE_CARD, CLEAR_CHOICES } from '../constants/ActionTypes'

export const chooseCard = choice =>
  ({
    type: CHOOSE_CARD,
    choice
  })

export const clearChoices = () =>
  ({
    type: CLEAR_CHOICES
  })
