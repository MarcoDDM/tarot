export const formatIfIsReversedCard = cardNumber => {
  if(cardNumber !== undefined){
    const str = cardNumber.toString()
    return str[0] === '-' ? str.substring(1) : cardNumber
  }
}

export const checkIfIsReversedCard = cardNumber => {
  if(cardNumber !== undefined){
    const str = cardNumber.toString()
    return str[0] === '-' ? true : false
  }
}
