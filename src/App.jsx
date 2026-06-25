import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Credits from './components/Credits'
import Awards from './components/Awards'
import Training from './components/Training'
import Skills from './components/Skills'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="portfolio">
      <NavBar />
      <Hero />
      <About />
      <Credits />
      <Awards />
      <Training />
      <Skills />
      <Footer />
    </div>
  )
}
