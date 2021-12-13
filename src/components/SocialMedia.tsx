import { GithubIcon } from '../icons/Github.icon'
import { InstagramIcon } from '../icons/Instagram.icon'
import { LinkedinIcon } from '../icons/Linkedin.icon'

type SocialMediaTypes = 'github' | 'linkedin' | 'instagram'

export type SocialMediaProps = {
  type: SocialMediaTypes
  link?: string
}

export const SociaMedia = ({ type, link = '#' }: SocialMediaProps) => {
  const Icon = {
    github: GithubIcon,
    instagram: InstagramIcon,
    linkedin: LinkedinIcon,
  }[type]

  const iconSize = '28px'
  const defaultProps = {
    color: 'white',
    width: iconSize,
    height: iconSize,
  }
  return (
    <a href={link} className="ml-4">
      <Icon {...defaultProps} />
    </a>
  )
}
