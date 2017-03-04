const spreadReducer = (state = null, action) => {
  switch (action.type) {
    case 'CHOOSE_SPREAD_TYPE':
      return action.choice

    case 'CLEAR_SPREAD':
      return []

    default:
      return state
  }
}

export default spreadReducer
