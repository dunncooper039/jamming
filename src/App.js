import React from 'react'
import './App.css';
import logo from './logo.png'
function App() {
  return (
    <div className="App">
    <header>
      <img src={logo} id="logo" alt="HERE'S YOUR ALT, ARE YOU HAPPY REACT?"/>
      <div id="headerText">
        <h1>Jamming</h1>
        <h2>A Spotify playlist creator</h2>
      </div>
      <a href="dunncooper039.github.io"><h2>Home</h2></a>
    </header>
    </div>
  );
}

export default App;
