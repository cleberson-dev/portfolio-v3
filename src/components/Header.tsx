import { Logo } from './Logo'
import { Navbar } from './Navbar'
import { SociaMedia } from './SocialMedia'
import socials from '../data/socials.json'

const navbar = [
  { link: '#', title: 'sobre mim' },
  { link: '#', title: 'techs' },
  { link: '#', title: 'projetos' },
]

export const Header = (): JSX.Element => {
  return (
    <header className="flex justify-center items-center lg:justify-between">
      <Logo />
      <Navbar items={navbar} />
      <div className="hidden lg:flex">
        {socials.map((social) => (
          <SociaMedia key={social.type} {...social} />
        ))}
      </div>
    </header>
  )
}
