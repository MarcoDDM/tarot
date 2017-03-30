export const loadStoredState = () => {
  const serializedState = localStorage.getItem('myTarot_state')
  if(serializedState) return JSON.parse(serializedState)
}

export const updateStoredState = state => {
  const serializedState = JSON.stringify(state)
  localStorage.setItem('myTarot_state', serializedState)
}
