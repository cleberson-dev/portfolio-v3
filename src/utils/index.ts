import data from '../data'

export function getTranslatedContent(locale: string | undefined) {
  if (locale === 'pt-BR' || locale === 'en') {
    return data[locale]
  }

  return data.en
}
