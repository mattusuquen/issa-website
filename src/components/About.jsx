import { useEffect, useRef } from 'react'

export default function About() {
  const contentRef = useRef(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { el.classList.toggle('about-content-visible', entry.isIntersecting) },
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about-section" id="about">
      <div className="about-banner about-fade-1">
        <div className="about-banner-overlay">
          <span className="about-banner-label">About</span>
          <span className="about-banner-name">Isabelle</span>
        </div>
        <button
          className="about-scroll-chevron"
          aria-label="Scroll to content"
          onClick={() => {
            const el = document.getElementById('about-content')
            const top = el.getBoundingClientRect().top + window.scrollY - 60
            window.scrollTo({ top, behavior: 'smooth' })
          }}
        >
          <svg viewBox="0 0 40 22" width="26" height="14" fill="none">
            <polyline points="2,2 20,20 38,2" stroke="var(--cream)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="about-content-section about-content-reveal" id="about-content" ref={contentRef}>
        <div className="about-body-frame">
        <div className="about-body">
          <p>
            <span className="about-drop-name">Isabelle's</span> love for performing began at an early age, growing up in a lively and
            music-rich Filipino household in Central New Jersey. Whether singing solo at the yearly
            Simbang Gabi Christmas mass, making ridiculous parodies with her older brother, or joining
            karaoke sessions, music always found a way to bring joy into her life.
          </p>
          <p>
            Before pursuing her B.M. in Music Theatre at Baldwin Wallace University, Isabelle jumped
            between theatre rehearsals and track practice, where she served as varsity captain and
            pole-vaulted for three years. She is a National Choral Award recipient, and her favorite
            stage roles include Audrey in <em>Little Shop of Horrors</em> and Karen Smith in <em>Mean Girls</em>.
            She was also nominated as Youth Ambassador for the Filipino American Association of Central
            New Jersey (FAACNJ), where she shared music and storytelling with her community, including
            cantoring at St. Patrick's Cathedral in NYC.
          </p>
          <p>
            She is beyond excited to continue connecting and sharing her passion with others. Off stage,
            she can be found training for a half marathon, trying all the dessert spots in town, or
            spending time with her dogs.
          </p>
        </div>
        </div>
      </div>
    </section>
  )
}
