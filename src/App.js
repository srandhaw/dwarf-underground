import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import GoldMadness from './GoldMadness'
import LastHammer from './LastHammer'
import FourImages  from './FourImages'

class App extends Component {
  render() {
    return (
      <div className="App">

      <Header />

    <main className="expanded row">

    <GoldMadness />
      
      <LastHammer />
       <FourImages />

      
    </main>

    <footer className="expanded row">
      <h6>&copy; 2017 Erebor Industries</h6>
      <h6 className="float-right">All rights reserved</h6>
    </footer>
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
