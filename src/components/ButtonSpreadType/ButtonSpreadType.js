import React from 'react'
import SpreadCards from '../SpreadCards'
import './ButtonSpreadType.sass'

const ButtonSpreadType = ({ spreadType, click }) => {
  return (
    <button className="button-spread-type" onClick={() => click(spreadType)}>
      <SpreadCards spreadType={spreadType} showSpreadDescription={true} />
    </button>
  )
}

export default ButtonSpreadType
