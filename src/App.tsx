import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="text-center bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white text-sm">
      Olá, mundo! ({counter})
      <Button title="+" onClick={() => setCounter(counter + 1)} />
    </div>
  )
}

export default App
