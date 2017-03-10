import React from 'react'
import SpreadCards from '../SpreadCards'
import './ButtonSpreadType.sass'

function ButtonSpreadType(props){
  return (
    <button className="button-spread-type" onClick={() => props.click(props.spreadType)}>
      <SpreadCards spreadType={props.spreadType} showSpreadDescription={true} />
    </button>
  )
}

export default ButtonSpreadType
