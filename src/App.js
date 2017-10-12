import React, { Component } from 'react';
import './App.css';

import Curriculo from './components/curriculo';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Curriculo />
      </div>
    );
  }
}

export default App;
