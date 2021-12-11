import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="text-center bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white text-sm">
      Olá, mundo! ({counter})
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default App;
