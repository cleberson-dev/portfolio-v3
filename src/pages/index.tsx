import Head from 'next/head'
import { Header } from '../components/Header'
import { AboutSection } from '../sections/About.section'
import { MainSection } from '../sections/Main.section'
import { ProjectsSection } from '../sections/Projects.section'
import { SkillsSection } from '../sections/Skills.section'

function HomePage(): JSX.Element {
  return (
    <>
      <Head>
        <title>cleberson.dev</title>
      </Head>
      <div className="text-white text-sm px-28 py-20">
        <div className="h-screen flex flex-col justify-between">
          <Header />
          <MainSection />
          <div className="h-32"></div>
        </div>
        <SkillsSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </>
  )
}

export default HomePage
