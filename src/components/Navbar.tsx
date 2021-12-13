import { NavbarItem } from './NavbarItem'

type NavbarProps = {
  items: {
    title: string
    link: string
  }[]
}

export const Navbar = ({ items }: NavbarProps): JSX.Element => {
  return (
    <nav>
      {items.map((item) => (
        <NavbarItem key={item.link} {...item} />
      ))}
    </nav>
  )
}
