import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Catalog from './components/Catalog';

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
