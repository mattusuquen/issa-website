import StatsBar from './StatsBar'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-eyebrow">Musical Theatre Artist</p>
          <h1 className="hero-name">Isabelle<br />Usuquen</h1>
          <p className="hero-tagline">Actress &nbsp;·&nbsp; Singer &nbsp;·&nbsp; Dancer</p>
          <a href="mailto:Irusuquen@gmail.com" className="hero-cta">Get in Touch</a>
        </div>
      </div>
      <StatsBar />
    </section>
  )
}
