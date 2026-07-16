import StatsBar from './StatsBar'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-name">Isabelle<br />Usuquen</h1>
        <p className="hero-tagline">Actress &nbsp;|&nbsp; Singer &nbsp;|&nbsp; Dancer</p>
      </div>
      <div className="hero-photos">
        <img src="/headshot1.jpg" alt="Isabelle Usuquen" className="hero-photo" />
        <img src="/headshot2.jpg" alt="Isabelle Usuquen" className="hero-photo" />
        <img src="/headshot.jpg" alt="Isabelle Usuquen" className="hero-photo" />
      </div>
    </section>
  )
}
