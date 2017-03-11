const backsideStyleReducer = (state = 1, action) => {
  switch (action.type) {
    case 'CHOOSE_BACKSIDE_STYLE':
      return action.choice

    default:
      return state
  }
}

export default backsideStyleReducer
