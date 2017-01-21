import React, { Component } from 'react';
import HeaderApp from './components/HeaderApp';
import TarotTable from './components/TarotTable';

class App extends Component {
  render() {
    return (
      <main>
        <HeaderApp></HeaderApp>
        <TarotTable></TarotTable>
      </main>
    );
  }
}

export default App;
