import React, { Component } from 'react';
import './index.sass';

class CardDetails extends Component {

  render(){
    let className = `card-details ${!this.props.show ? 'hidden' : ''}`;

    return(
      <div className={className}>
        {this.props.cardNumber}
      </div>
    )
  }

}

export default CardDetails;
