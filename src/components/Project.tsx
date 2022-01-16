import { AvailableTechs, TechIconSelector } from './TechIconSelector'

type ProjectProps = {
  cover: string
  name: string
  description: string
  techs: AvailableTechs[]
  links: {
    demo: string
    repo: string
  }
}

export const Project = ({
  cover,
  name,
  description,
  techs,
  links,
}: ProjectProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center bg-white text-black py-6 px-10 rounded-md">
      <p className="w-64 font-bold text-xl text-center lg:text-2xl lg:my-0 lg:mb-4">
        {name}
      </p>
      <img
        src={cover}
        alt="Project cover"
        className="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-full"
      />

      <p className="w-64 text-center text-sm lg:text-left lg:text-base lg:mt-4">
        {description}
      </p>
      <div className="w-full grid grid-cols-5 mt-3 mb-5">
        {techs.map((tech) => (
          <div
            key={tech}
            className="cursor-pointer w-min opacity-30 hover:opacity-100"
          >
            <TechIconSelector
              tech={tech}
              color="black"
              width="30px"
              height="30px"
            />
          </div>
        ))}
      </div>
      <div className="w-full grid grid-cols-2 gap-x-2">
        {Object.entries(links).map(([type, link]) => (
          <a
            key={link}
            href={link}
            className="text-white text-center text-base uppercase w-full py-1 px-2 hover:opacity-80"
            style={{ backgroundColor: '#10002B' }}
          >
            {type}
          </a>
        ))}
      </div>
    </div>
  )
}
