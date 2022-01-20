import { GithubIcon } from '../icons/Github.icon'
import { InstagramIcon } from '../icons/Instagram.icon'
import { LinkedinIcon } from '../icons/Linkedin.icon'
import { ISVGProps } from '../interfaces/svg-props.interface'

export type SocialMediaProps = {
  type: string
  link?: string
}

export const SociaMedia = ({
  type,
  link = '#',
}: SocialMediaProps): JSX.Element => {
  const Icon = {
    github: GithubIcon,
    instagram: InstagramIcon,
    linkedin: LinkedinIcon,
  }[type] as (_: ISVGProps) => JSX.Element

  const iconSize = '28px'
  const defaultProps = {
    color: 'white',
    width: iconSize,
    height: iconSize,
  }
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="ml-4 hover:opacity-50"
    >
      <Icon {...defaultProps} />
    </a>
  )
}
