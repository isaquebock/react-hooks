import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0)

  const handleMinus = () => {
    setCounter(prevState => prevState - 1)
  }

  const handlePlus = () => {
    setCounter(prevState => prevState + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        {counter}

        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
      </header>
    </div>
  );
}

export default App;
