import { useEffect, useRef } from 'react'
import { Header } from './components/Header'

function App() {
  const nameInputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    nameInputRef.current?.focus()
  }, [])
  return (
    <div className="min-h-screen text-white text-sm px-28 py-20">
      <Header />
      <main className="w-full mt-20">
        <h1 className="text-7xl font-bold text-left">
          Olá,{' '}
          <input
            ref={nameInputRef}
            type="text"
            className="font-bold max-w-md bg-transparent border-b-4 border-white border-solid focus-within:outline-none"
            style={{ color: '#F72585' }}
          />{' '}
          !
        </h1>
        <p className="text-4xl font-medium mt-8">
          Meu nome é <span style={{ color: '#F72585' }}>Cleberson Jr.</span> e
          desenvolvo para a <span style={{ color: '#F72585' }}>web</span>.
        </p>
      </main>
    </div>
  )
}

export default App
