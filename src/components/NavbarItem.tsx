type NavbarItemProps = {
  title: string
  link: string
}

export const NavbarItem = ({ title, link }: NavbarItemProps): JSX.Element => {
  return (
    <a className="font-semibold nav-item" href={link}>
      <span className="hover:opacity-30">{title}</span>
    </a>
  )
}
