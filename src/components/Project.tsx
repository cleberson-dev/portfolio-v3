import { AvailableTechs, TechIconSelector } from './TechIconSelector'

type ProjectProps = {
  cover: string
  name: string
  description: string
  techs: AvailableTechs[]
}

export const Project = ({
  cover,
  name,
  description,
  techs,
}: ProjectProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center lg:block w-64">
      <img
        src={cover}
        alt="Project cover"
        className="w-48 h-48 lg:w-full lg:h-64 object-cover rounded-full"
      />
      <p className="font-bold text-xl text-center my-2 lg:text-2xl lg:text-left lg:my-0">
        {name}
      </p>
      <p className="text-center text-sm lg:text-left lg:text-base">
        {description}
      </p>
      <div className="grid grid-cols-5 mt-3">
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
    </div>
  )
}
