import cls from 'classnames'
import { GithubIcon } from '../icons/Github.icon'
import { InstagramIcon } from '../icons/Instagram.icon'
import { LinkedinIcon } from '../icons/Linkedin.icon'

type NavBarProps = {
  items: {
    title: string
    link: string
  }[]
}

const NavBar = ({ items }: NavBarProps): JSX.Element => {
  return (
    <nav>
      {items.map((item, idx) => {
        const isNotLast = idx < items.length
        const classes = cls({
          'font-semibold': true,
          'mr-10': isNotLast,
        })
        return (
          <a key={item.link} className={classes} href={item.link}>
            {item.title}
          </a>
        )
      })}
    </nav>
  )
}

const socialMediaIconSize = '36px'
const socialMediaProps = {
  color: 'white',
  width: socialMediaIconSize,
  height: socialMediaIconSize,
}

export const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <h1 className="font-semibold text-2xl">
        cleberson<span style={{ color: '#F72585' }}>.dev</span>
      </h1>
      <NavBar
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
