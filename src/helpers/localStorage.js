const defaultState = {
  savedGames: []
}

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if(!serializedState) return defaultState
    return JSON.parse(serializedState)
  } catch (err) {
    return {}
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    return undefined
  }
}
