const choiceReducer = (state = null, action) => {
  switch (action.type) {
    case 'CHOOSE_CARD':
      return [ ...state ].concat(action.choice)

    case 'CLEAR_CHOICES':
      return []

    default:
      return state
  }
}

export default choiceReducer
