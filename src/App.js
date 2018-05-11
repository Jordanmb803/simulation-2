import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Components
import Header from './component/Header/Header';
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
        <Wizard />
      </div>
    );
  }
}

export default App;
