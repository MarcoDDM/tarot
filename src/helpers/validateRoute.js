import { push } from 'react-router-redux'

export const validateRoute = (rule, store) => {
  switch (rule) {
    case 'spreadtype-state':
      if(!store.getState().spreadTypeState.type)
        store.dispatch(push('/'))
      break

    case 'userchoice-state':
      if(!store.getState().userChoiceState.length)
        store.dispatch(push('/'))
      break

    default:
      break
  }
}
