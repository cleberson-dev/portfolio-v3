import { Project } from '../components/Project'

const projects = [
  {
    name: 'Poll It',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et lacus at urna imperdiet egestas nec dignissim massa. Vivamus semper rutrum consequat. ',
    techs: [],
    cover:
      'https://unsplash.com/photos/gySMaocSdqs/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQwMDAxNDA1&force=true&w=640',
  },
]

export const ProjectsSection = (): JSX.Element => {
  return (
    <section>
      <h1 className="font-bold lowercase text-xl lg:text-3xl">Projects</h1>

      <div className="grid grid-cols-1 gap-y-12 justify-items-center lg:grid-cols-3 gap-x-3 mt-20">
        <Project {...projects[0]} />
        <Project {...projects[0]} />
        <Project {...projects[0]} />
      </div>
    </section>
  )
}
