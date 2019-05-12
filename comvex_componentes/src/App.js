import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MenuComponent, { MeusComponentes } from './components/MenuComponent.js';

class App extends Component {

  render() {
    const nome = 'TreinaWeb';
    const cvx_component = MeusComponentes[nome];
    return (
      <div className="App">
        <MenuComponent />
        <MeusComponentes.TreinaWeb />
        <cvx_component />
      </div>
    );
  }
}

export default App;
