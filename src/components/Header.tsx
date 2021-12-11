import { GithubIcon } from '../icons/Github.icon'
import { InstagramIcon } from '../icons/Instagram.icon'
import { LinkedinIcon } from '../icons/Linkedin.icon'
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
      <h1 className="font-semibold text-2xl">
        cleberson<span style={{ color: '#F72585' }}>.dev</span>
      </h1>
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
