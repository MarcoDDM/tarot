export const loadStoredUser = () => {
  const serializedUser = localStorage.getItem('myTarot_user')
  if (serializedUser) return JSON.parse(serializedUser)
}

export const updateStoredUser = user => {
  const serializedUser = JSON.stringify(user)
  localStorage.setItem('myTarot_user', serializedUser)
}

export const loadStoredState = () => {
  const user = loadStoredUser()
  const key = user ? `myTarot_state_${user.email}` : 'myTarot_state'
  const serializedState = localStorage.getItem(key)
  if (serializedState) return JSON.parse(serializedState)
}

export const updateStoredState = state => {
  const user = loadStoredUser()
  const key = user ? `myTarot_state_${user.email}` : 'myTarot_state'
  const serializedState = JSON.stringify(state)
  localStorage.setItem(key, serializedState)
}
