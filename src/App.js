import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import GoldMadness from './GoldMadness'
import LastHammer from './LastHammer'
import FourImages  from './FourImages'
import Footer from './Footer'

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

<Footer  />
    
        
      </div>
    );
  }
}

export default App;
