export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-name hero-fade-1">Isabelle<br />Usuquen</h1>

        <div className="hero-ornament hero-fade-2">
          <span className="hero-ornament-line" />
          <svg className="hero-ornament-diamond" viewBox="0 0 16 16" width="14" height="14" fill="none">
            <path d="M8 0 L16 8 L8 16 L0 8 Z" fill="var(--terra)" />
          </svg>
          <span className="hero-ornament-line" />
        </div>

        <p className="hero-tagline hero-fade-2">Actress &nbsp;|&nbsp; Singer &nbsp;|&nbsp; Dancer</p>
      </div>

      <div className="hero-photos hero-fade-3">
        <img src="/headshot1.jpg" alt="Isabelle Usuquen" className="hero-photo" />
        <img src="/headshot2.jpg" alt="Isabelle Usuquen" className="hero-photo hero-photo--center" />
        <img src="/headshot.jpg" alt="Isabelle Usuquen" className="hero-photo" />
      </div>

      <div className="hero-location hero-fade-3">
        <span className="hero-location-line" />
        <p className="hero-location-text">NYC &nbsp;|&nbsp; NJ &nbsp;|&nbsp; CLE</p>
      </div>

    </section>
  )
}
