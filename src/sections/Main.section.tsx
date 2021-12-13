import { useEffect, useRef } from 'react'

export const MainSection = (): JSX.Element => {
  const nameInputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    nameInputRef.current?.focus()
  }, [])

  return (
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
  )
}
