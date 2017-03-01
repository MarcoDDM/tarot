const drawingReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHOOSE_DRAWING':      
      return action.choice

    case 'CLEAR_DRAWING':
      return []

    default:
      return state
  }
}

export default drawingReducer
