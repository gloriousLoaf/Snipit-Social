import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click the link below!!
        </p>
        <a
          className="App-link"
          href="localhost:3001"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here!
        </a>
      </header>
    </div>
  );
}

export default App;
