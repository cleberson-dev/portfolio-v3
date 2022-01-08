import { useRouter } from 'next/router'
import { Project } from '../components/Project'
import { getTranslatedContent } from '../utils'

export const ProjectsSection = (): JSX.Element => {
  const { locale } = useRouter()
  const content = getTranslatedContent(locale)
  const { projects: section } = content.sections

  return (
    <section>
      <h1 className="font-bold lowercase text-xl lg:text-3xl">Projects</h1>

      <div className="grid grid-cols-1 gap-y-12 justify-items-center lg:grid-cols-3 gap-x-3 mt-20">
        {section.items.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}
