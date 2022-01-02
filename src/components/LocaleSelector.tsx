import { useRouter } from 'next/router'

function LocaleSelector(): JSX.Element {
  const { locales, locale: selectedLocale } = useRouter()
  const flags: { [key: string]: string } = {
    en: '/img/flags/uk.svg',
    'pt-BR': '/img/flags/brazil.svg',
  }

  return (
    <div className="hidden lg:flex justify-end">
      {locales?.map((locale) => (
        <a
          key={locale}
          href={'/' + locale}
          style={{
            pointerEvents: selectedLocale === locale ? 'none' : 'auto',
          }}
        >
          <img
            src={flags[locale]}
            className="w-12 h-12 ml-4"
            style={{
              outline: selectedLocale === locale ? '5px solid #F72585' : 'none',
              borderRadius: '50%',
            }}
          />
        </a>
      ))}
    </div>
  )
}

export default LocaleSelector
