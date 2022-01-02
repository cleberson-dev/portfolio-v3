import { useRouter } from 'next/router'
import { getTranslatedContent } from '../utils'

type FeatureProps = {
  name: string
  value: string
}
const Feature = ({ name, value }: FeatureProps): JSX.Element => {
  return (
    <p className="text-right font-bold mb-4 lg:ml-16">
      <span className="text-black opacity-30 uppercase block text-xs lg:text-sm">
        {name}
      </span>
      <span className="font-bold text-lg lg:text-2xl">{value}</span>
    </p>
  )
}

export const AboutSection = (): JSX.Element => {
  const { locale } = useRouter()
  const content = getTranslatedContent(locale)
  const { about: section } = content.sections

  return (
    <div>
      <h1 className="font-bold text-xl lg:text-3xl lowercase">
        {section.title}
      </h1>
      <div className="flex flex-col lg:flex-row items-center mt-14">
        <img
          src="/img/profile.jpeg"
          alt="Foto de perfil"
          className="rounded-full w-48 h-48 object-cover mb-8 lg:w-64 lg:h-64 lg:mr-20 lg:mb-0"
        />
        <p className="text-sm lg:text-base">{section.description}</p>
      </div>
      <div className="flex flex-col justify-end flex-wrap my-8 lg:flex-row lg:mt-20 lg:mb-0">
        {section.features.map((feature) => (
          <Feature key={feature.name + feature.value} {...feature} />
        ))}
      </div>
    </div>
  )
}
