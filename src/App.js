import './App.css';
import React, { useState, useRef } from 'react';

function App() {
  console.log('redered')

  const number = useRef(0)

  function handleSetValue() {
    const newNumber = Math.round(Math.random() * (10 - 1) + 1)

    number.current = newNumber
  }

  function handlePrintValue() {
    alert(number.current)
  }

  return (
    <div>
      <button onClick={handleSetValue}>set value</button>
      <button onClick={handlePrintValue}>print value</button>
    </div>
  );
}

export default App;
