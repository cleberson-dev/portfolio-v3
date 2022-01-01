import { NavbarItem } from './NavbarItem'

type NavbarProps = {
  items: {
    title: string
    link: string
  }[]
}

export const Navbar = ({ items }: NavbarProps): JSX.Element => {
  return (
    <nav className="hidden lg:block">
      {items.map((item) => (
        <NavbarItem key={item.link} {...item} />
      ))}
    </nav>
  )
}
