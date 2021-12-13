import { GithubIcon } from '../icons/Github.icon'
import { InstagramIcon } from '../icons/Instagram.icon'
import { LinkedinIcon } from '../icons/Linkedin.icon'
import { Logo } from './Logo'
import { Navbar } from './Navbar'

const socialMediaIconSize = '36px'
const socialMediaProps = {
  color: 'white',
  width: socialMediaIconSize,
  height: socialMediaIconSize,
}

export const Header = (): JSX.Element => {
  return (
    <header className="flex justify-between items-center">
      <Logo />
      <Navbar
        items={[
          { link: '#', title: 'sobre mim' },
          { link: '#', title: 'techs' },
          { link: '#', title: 'projetos' },
        ]}
      />
      <div className="flex">
        <a href="#" className="mr-4">
          <GithubIcon {...socialMediaProps} />
        </a>
        <a href="#" className="mr-4">
          <LinkedinIcon {...socialMediaProps} />
        </a>
        <a href="#">
          <InstagramIcon {...socialMediaProps} />
        </a>
      </div>
    </header>
  )
}
