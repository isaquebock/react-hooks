import './App.css';
import React, { useReducer } from 'react';

function reducer(state, action) {
  if(action.type === 'plus') {
    return {
      counter: state.counter + 1,
      clicks: state.clicks + 1 
    }
  }

  if(action.type === 'minus') {
    return {
      counter: state.counter - 1,
      clicks: state.clicks + 1 
    }
  }

  return state;
}

const initialValue = {
  counter: 0,
  clicks: 0
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialValue)

  const handleMinus = () => {
    dispatch({ type: 'minus' })
  }

  const handlePlus = () => {
    dispatch({ type: 'plus' })
  }

  return (
    <div>
        <h1>{ state.counter }</h1>
        <h4>Cliques: { state.clicks }</h4>
        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
    </div>
  );
}

export default App;
