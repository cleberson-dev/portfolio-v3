import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      Olá, mundo! ({counter})
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default App;
