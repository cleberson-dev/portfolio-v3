import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { getTranslatedContent } from '../utils'

const classes = {
  container: '',
  title: 'text-4xl lg:text-7xl font-bold text-left',
  description: 'text-lg font-medium mt-4 lg:mt-8 lg:text-4xl',
  input: [
    'font-bold w-48 lg:max-w-md bg-transparent',
    'focus-within:outline-none',
    'border-b-4 border-white border-solid',
  ].join(' '),
}

const pinkTextStyles = { color: '#F72585' }

export const MainSection = (): JSX.Element => {
  const { locale } = useRouter()
  const content = getTranslatedContent(locale)

  const nameInputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    nameInputRef.current?.focus()
  }, [])

  return (
    <main className={classes.container}>
      <h1 className={classes.title}>
        {content.greeting},{' '}
        <input
          ref={nameInputRef}
          type="text"
          className={classes.input}
          style={pinkTextStyles}
        />
        !
      </h1>
      <p className={classes.description}>
        {content.presentation[0]}{' '}
        <span style={pinkTextStyles}>Cleberson Jr.</span>{' '}
        {content.presentation[1]} <span style={pinkTextStyles}>web</span>.
      </p>
    </main>
  )
}
