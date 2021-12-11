import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Header } from './components/Header'

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="text-center min-h-screen text-white text-sm px-28 py-20">
      <Header />
    </div>
  )
}

export default App
