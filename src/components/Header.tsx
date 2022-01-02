import { Logo } from './Logo'
import { Navbar } from './Navbar'
import { SociaMedia } from './SocialMedia'
import socials from '../data/socials.json'
import { useRouter } from 'next/router'
import { getTranslatedContent } from '../utils'

export const Header = (): JSX.Element => {
  const { locale } = useRouter()
  const content = getTranslatedContent(locale)

  return (
    <header className="flex justify-center items-center lg:justify-between">
      <Logo />
      <Navbar
        items={content.navbar.map((item) => ({
          title: item.label,
          link: item.link,
        }))}
      />
      <div className="hidden lg:flex">
        {socials.map((social) => (
          <SociaMedia key={social.type} {...social} />
        ))}
      </div>
    </header>
  )
}
