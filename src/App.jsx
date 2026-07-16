import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Media from './components/Media'
import Awards from './components/Awards'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import HeadshotsResume from './components/HeadshotsResume'
import ScrollToTop from './components/ScrollToTop'

function MediaPage() {
  return <Media />
}

function GalleryPage() {
  return <Gallery />
}

export default function App() {
  return (
    <div className="portfolio">
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/"         element={<Hero />} />
        <Route path="/about"    element={<About />} />
        <Route path="/media"    element={<MediaPage />} />
        <Route path="/gallery"  element={<GalleryPage />} />
        <Route path="/contact"  element={<Contact />} />
        <Route path="/hr"       element={<HeadshotsResume />} />
      </Routes>
      <Footer />
    </div>
  )
}
