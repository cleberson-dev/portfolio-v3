import Head from 'next/head'
import { Header } from '../components/Header'
import { AboutSection } from '../sections/About.section'
import { MainSection } from '../sections/Main.section'
import { ProjectsSection } from '../sections/Projects.section'
import { SkillsSection } from '../sections/Skills.section'
import socials from '../data/socials.json'
import { SociaMedia } from '../components/SocialMedia'

function HomePage(): JSX.Element {
  return (
    <>
      <Head>
        <title>cleberson.dev</title>
      </Head>
      <div className="text-white text-sm px-4 py-6 lg:px-28 lg:py-20">
        <div className="h-screen flex flex-col justify-between">
          <Header />
          <MainSection />
          <div className="flex -ml-4 mb-28 justify-center lg:invisible lg:h-32">
            {socials.map((social) => (
              <SociaMedia key={social.type} {...social} />
            ))}
          </div>
        </div>
        <SkillsSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </>
  )
}

export default HomePage
