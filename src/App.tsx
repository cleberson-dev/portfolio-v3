import { Header } from './components/Header'
import { MainSection } from './sections/Main.section'
import { SkillsSection } from './sections/Skills.section'

function App(): JSX.Element {
  return (
    <div className="min-h-screen text-white text-sm px-28 py-20">
      <Header />
      <MainSection />
      <SkillsSection />
    </div>
  )
}

export default App
