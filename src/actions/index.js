export function chooseCard(choice) {
  return {
    type: 'CHOOSE_CARD',
    choice
  }
}

export function clearChoices() {
  return {
    type: 'CLEAR_CHOICES'
  }
}
