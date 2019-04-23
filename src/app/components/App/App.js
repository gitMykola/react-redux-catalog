import React, { Component } from 'react';
import logo from '../../../../src/logo.svg';
import './App.css';
import Catalog from '../Catalog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Catalog />
      </div>
    );
  }
}

export default App;
