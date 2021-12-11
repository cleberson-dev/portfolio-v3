import cls from 'classnames'

type NavbarItemProps = {
  title: string
  link: string
  isNotLast?: boolean
}

export const NavbarItem = ({
  title,
  link,
  isNotLast,
}: NavbarItemProps): JSX.Element => {
  const classes = cls({
    'font-semibold': true,
    'mr-10': isNotLast,
  })

  return (
    <a className={classes} href={link}>
      {title}
    </a>
  )
}
