import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import CaseStudy from './components/CaseStudy'
import ZanhuaCase from './components/ZanhuaCase'
import Work from './components/Work'
import Strength from './components/Strength'
import Contact from './components/Contact'
import useReveal from './useReveal'

export default function App() {
  useReveal()

  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <About />
        <CaseStudy />
        <ZanhuaCase />
        <Work />
        <Strength />
        <Contact />
      </main>
    </div>
  )
}
