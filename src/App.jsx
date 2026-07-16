import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Credits from './components/Credits'
import Awards from './components/Awards'
import Training from './components/Training'
import Skills from './components/Skills'

function TheatrePage() {
  return <><Credits /><Awards /></>
}

function TrainingPage() {
  return <><Training /><Skills /></>
}

export default function App() {
  return (
    <div className="portfolio">
      <NavBar />
      <Routes>
        <Route path="/"         element={<Hero />} />
        <Route path="/about"    element={<About />} />
        <Route path="/theatre"  element={<TheatrePage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/contact"  element={<Footer />} />
      </Routes>
    </div>
  )
}
