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
      {items.map((item, idx) => (
        <NavbarItem key={item.link} isNotLast={idx < items.length} {...item} />
      ))}
    </nav>
  )
}
