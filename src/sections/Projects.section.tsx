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

export const ProjectsSection = () => {
  return (
    <section>
      <h1 className="font-bold text-3xl lowercase">Projects</h1>

      <div className="grid grid-cols-3 gap-x-3 mt-20">
        <Project {...projects[0]} />
      </div>
    </section>
  )
}
