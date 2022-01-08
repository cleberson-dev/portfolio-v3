type Section<T = null> = {
  title: string
} & T

export interface IData {
  navbar: {
    label: string
    link: string
  }[]
  greeting: string
  presentation: string[]
  sections: {
    techs: Section
    about: Section<{
      description: string
      features: {
        name: string
        value: string
      }[]
    }>
    projects: Section<{
      techs: any[]
      items: {
        id: number
        name: string
        description: string
        cover: string
        links: {
          demo: string
          repo: string
        }[]
      }[]
    }>
  }
}
