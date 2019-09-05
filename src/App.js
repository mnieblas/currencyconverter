import React from 'react';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';
import './App.scss';

function App() {
  
  const BACKGROUNDS = [
    'linear-gradient(160deg, #0093E8 0%, #80D0C7 100%)',
    'linear-gradient(90deg, #FAD961 0%, #F76B1C 100%)',
    'linear-gradient(225deg, #FAD961 0%, #FF5ACD 100%)',
    'linear-gradient(270deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)',
    'linear-gradient(225deg, #FA8BFF 0%, #2CD1FF 52%, #2CFF88 100%)',
    'linear-gradient(-43deg, #4158D0 0%, #C751C0 46%, #FFCB70 100%)'
  ];
  
  return (
    <div className="App" style={{backgroundImage: BACKGROUNDS[(Math.random() * BACKGROUNDS.length).toFixed(0)]}}>
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
