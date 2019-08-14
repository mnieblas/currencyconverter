import React from 'react';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1 className="App__heading">Currency converter</h1>
      <CurrencyConverter />
    </div>
  );
}

export default App;
