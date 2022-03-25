
import React from 'react';
import './App.css';
import Portfolio from './Portfolio';
import Header from './Header';
import Bio from './Bio';
import Footer from './Footer';
import Skills from './Skills';

function App() {
  return (
    <div className="App " 
    >
      <Header  />
      <Bio/>
      <Skills/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
