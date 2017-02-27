import React, { Component } from 'react'
import { connect } from 'react-redux';
import { chooseCard } from '../../actions'
import SpreadCards from '../SpreadCards'
import store from '../../store';
import './TarotTable.sass'

class TarotTable extends Component {

  handleChoice(choice){
    store.dispatch(chooseCard(choice))
    let choices = store.getState().choiceState

    if(choices.length === 3)
      setTimeout(() =>
        this.props.router.push(`/cards-reader`), 500)
  }

  render() {
    return (
      <div className="tarot-table">
        <SpreadCards
          handleChoice={choice => this.handleChoice(choice)}>
        </SpreadCards>
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    choiceState: store.choiceState.choices
  };
};

export default connect(mapStateToProps)(TarotTable);
