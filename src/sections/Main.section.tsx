import { useEffect, useRef } from 'react'

const classes = {
  container: 'w-full mt-20',
  title: 'text-7xl font-bold text-left',
  description: 'text-4xl font-medium mt-8',
  input: [
    'font-bold max-w-md bg-transparent',
    'focus-within:outline-none',
    'border-b-4 border-white border-solid',
  ].join(' '),
}

const pinkTextStyles = { color: '#F72585' }

export const MainSection = (): JSX.Element => {
  const nameInputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    nameInputRef.current?.focus()
  }, [])

  return (
    <main className={classes.container}>
      <h1 className={classes.title}>
        Olá,{' '}
        <input
          ref={nameInputRef}
          type="text"
          className={classes.input}
          style={pinkTextStyles}
        />{' '}
        !
      </h1>
      <p className={classes.description}>
        Meu nome é <span style={pinkTextStyles}>Cleberson Jr.</span> e
        desenvolvo para a <span style={pinkTextStyles}>web</span>.
      </p>
    </main>
  )
}
