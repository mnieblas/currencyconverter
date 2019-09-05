import React from 'react';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1 className="App__heading">Currency converter</h1>
      <CurrencyConverter />
      <div className="Copy">
        <p className="Copy__github">by <a href="https://github.com/mnieblas">@mnieblas</a></p>
        <p className="Copy__source">Data powered by the Foreign exchange rates API</p>
      </div>
    </div>
  );
}

export default App;
