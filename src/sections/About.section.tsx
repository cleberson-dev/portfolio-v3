const features = [
  { name: 'Escolaridade', value: 'Eng. da Computação' },
  { name: 'Idade', value: '23 anos' },
  { name: 'Nacionalidade', value: 'Brasileiro' },
]

type FeatureProps = {
  name: string
  value: string
}
const Feature = ({ name, value }: FeatureProps): JSX.Element => {
  return (
    <p className="text-right font-bold mb-4 lg:ml-16">
      <span className="text-black opacity-30 uppercase block text-xs lg:text-sm">
        {name}
      </span>
      <span className="font-bold text-lg lg:text-2xl">{value}</span>
    </p>
  )
}

export const AboutSection = (): JSX.Element => {
  return (
    <div>
      <h1 className="font-bold text-xl lg:text-3xl lowercase">Sobre mim</h1>
      <div className="flex flex-col lg:flex-row items-center mt-14">
        <img
          src="/img/profile.jpeg"
          alt="Foto de perfil"
          className="rounded-full w-48 h-48 object-cover mb-8 lg:w-64 lg:h-64 lg:mr-20 lg:mb-0"
        />
        <p className="text-sm lg:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et lacus
          at urna imperdiet egestas nec dignissim massa. Vivamus semper rutrum
          consequat. Aliquam ac magna suscipit, rhoncus ligula ac, faucibus
          lorem. In sed lectus efficitur, congue nulla eu, scelerisque felis.
          Aenean ornare mi orci, ac laoreet justo rhoncus vitae. Quisque et
          viverra odio. Nunc vel neque finibus, fermentum lectus ac, molestie
          justo. Mauris elementum augue eu mi pellentesque, id mattis sapien
          finibus. Mauris sit amet lacus interdum, egestas quam in, lobortis
          mauris. Cras tempor fermentum dignissim. <br /> Fusce consectetur,
          augue sed ornare congue, felis nisl laoreet elit, blandit pellentesque
          enim nibh id augue. Etiam sed imperdiet mauris, ac facilisis est. Nam
          tempor ante non maximus ullamcorper. Mauris dapibus odio sed porttitor
          efficitur. Sed sagittis tempor venenatis. Nullam sed fermentum nisi,
          quis dictum nibh. Etiam viverra enim odio, pretium pulvinar nibh
          tempus posuere. Etiam placerat felis id libero tincidunt gravida.
          Proin in enim ultricies, ornare mauris eu, semper augue. Suspendisse
          quis quam vehicula, aliquet augue quis, sodales neque. Nullam sed
          iaculis quam, vitae malesuada metus. Vestibulum venenatis tempus purus
          nec molestie.
        </p>
      </div>
      <div className="flex flex-col justify-end flex-wrap my-8 lg:flex-row lg:mt-20 lg:mb-0">
        {features.map((feature) => (
          <Feature key={feature.name + feature.value} {...feature} />
        ))}
      </div>
    </div>
  )
}
