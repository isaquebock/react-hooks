import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    console.log('useEffect ativo')

    return () => {
      console.log('vai sair da tela')
    }
  }, [])

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
        
        {name}
        <input type="text" onChange={e => setName(e.target.value)} />
      </header>
    </div>
  );
}

export default App;
