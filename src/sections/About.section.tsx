import profilePhoto from '../assets/profile.jpeg'

export const AboutSection = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl lowercase">Sobre mim</h1>
      <div className="flex items-center mt-14">
        <img
          src={profilePhoto}
          alt="Foto de perfil"
          className="rounded-full w-64 h-64 object-cover mr-20"
        />
        <p className="text-base">
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
      <div className="flex justify-end mt-20">
        <p className="text-right font-bold">
          <span className="text-black opacity-30 text-sm uppercase block">
            Escolaridade
          </span>
          <span className="font-bold text-2xl">Eng. da Computação</span>
        </p>
        <p className="text-right font-bold ml-16">
          <span className="text-black opacity-30 text-sm uppercase block">
            Idade
          </span>
          <span className="font-bold text-2xl">23 anos</span>
        </p>
        <p className="text-right font-bold ml-16">
          <span className="text-black opacity-30 text-sm uppercase block">
            Nacionalidade
          </span>
          <span className="font-bold text-2xl">Brasileiro</span>
        </p>
      </div>
    </div>
  )
}
