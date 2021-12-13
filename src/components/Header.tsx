import { Logo } from './Logo'
import { Navbar } from './Navbar'
import { SocialMediaProps, SociaMedia } from './SocialMedia'

const navbar = [
  { link: '#', title: 'sobre mim' },
  { link: '#', title: 'techs' },
  { link: '#', title: 'projetos' },
]

const socials: SocialMediaProps[] = [
  { type: 'github', link: '' },
  { type: 'linkedin', link: '' },
  { type: 'instagram', link: '' },
]

export const Header = (): JSX.Element => {
  return (
    <header className="flex justify-between items-center">
      <Logo />
      <Navbar items={navbar} />
      <div className="flex">
        {socials.map((social) => (
          <SociaMedia key={social.type} {...social} />
        ))}
      </div>
    </header>
  )
}
