import React from 'react'
import { spreadTypes } from '../../helpers'
import './SpreadCards.sass'

const SpreadCards = ({ cards, spreadType, showSpreadDescription }) => {

  const spread = spreadTypes[spreadType]
  const amountCards = spread.amountCards
  const spreadDescription = spread.description

  const buildSpreadDescription = () => (
    <div><h4>{amountCards} {amountCards === 1 ? 'carta' : 'cartas'}</h4>
    <p className="spreadDescription">{spreadDescription}</p></div>)

  const classNames = () => ([
    'spread-cards',
    spread.className
  ].join(' '))

  return (
    <div className={classNames()}>
      <div className="cards">
        {cards}
      </div>
      {showSpreadDescription && buildSpreadDescription()}
    </div>
  )
}

export default SpreadCards
