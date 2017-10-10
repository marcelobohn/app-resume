import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Curriculo from './components/curriculo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Leitor de currículo em JSON</h1>
        </header>
        <p className="App-intro">      
          <Curriculo />
        </p>
      </div>
    );
  }
}

export default App;
