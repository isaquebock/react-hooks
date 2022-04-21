import './App.css';
import React, { useState, useMemo } from 'react';

function App() {
  const [name, setName] = useState('')
  const [counter, setCounter] = useState(0)

  const total = useMemo(() => {
    return counter * 10 / 2
  }, [counter])

  const handlePlus = () => {
    setCounter((prevState) => prevState + 1);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handlePlus}>+</button>

      <h2>Resultado: {total}</h2>

      <br /><br />

      <strong>{ name }</strong><br />
      <input onChange={e => setName(e.target.value)} />
    </div>
  );
}

export default App;
