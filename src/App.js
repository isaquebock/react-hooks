import './App.css';
import React, { useState, useCallback } from 'react';

function App() {

  const [counter, setCounter] = useState(0)

  const handlePlus = useCallback(() => {
    setCounter((prevState) => prevState + 1)
  }, [])

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handlePlus}>+</button>
    </div>
  );
}

export default App;
