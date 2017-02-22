import React, { Component } from 'react'
//import './CardsReader.sass'

class CardsReader extends Component {

  constructor(props){
    super(props)
    console.log()
  }

  render(){
    let className = `${this.props.show ? 'show' : 'hide'}`
    return (
      <div className={className}>
      teste
      </div>
    )
  }
}

export default CardsReader
