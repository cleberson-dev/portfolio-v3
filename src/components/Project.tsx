type ProjectProps = {
  cover: string
  name: string
  description: string
  techs: string[]
}

export const Project = ({
  cover,
  name,
  description,
}: ProjectProps): JSX.Element => {
  return (
    <div className="w-64">
      <img
        src={cover}
        alt="Project cover"
        className="w-full h-64 object-cover rounded-full"
      />
      <p className="font-bold text-2xl">{name}</p>
      <p className="text-base">{description}</p>
      <div></div>
    </div>
  )
}
