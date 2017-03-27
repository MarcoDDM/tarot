export const formatReversedCard = cardNumber => {
  if(cardNumber === undefined) return cardNumber

  const str = cardNumber.toString()
  return str[0] === '-' ? Number(str.substring(1)) : cardNumber
}

export const isReversedCard = cardNumber => {
  if(cardNumber === undefined) return cardNumber

  const str = cardNumber.toString()
  return str[0] === '-' ? true : false
}
