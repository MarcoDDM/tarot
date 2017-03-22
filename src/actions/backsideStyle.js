import { CHOOSE_BACKSIDE_STYLE } from '../constants/ActionTypes'

export const chooseBacksideStyle = choice =>
  ({  
    type: CHOOSE_BACKSIDE_STYLE,
    choice
  })
