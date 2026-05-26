import './App.css'

const productions = [
  { title: 'Secret Garden', role: 'Ayah / Ensemble', company: 'Stocker Arts Center', director: 'Joanna May Cullinan' },
  { title: 'Assassins', role: 'Ensemble', company: 'Baldwin Wallace University', director: 'Richard Biever' },
  { title: 'Pippin', role: 'Catherine / Ensemble (U/S)', company: 'Westminster Conservatory', director: 'Nathan Brewer' },
  { title: 'Little Shop of Horrors', role: 'Audrey', company: 'West Windsor-Plainsboro HS North', director: '' },
  { title: 'Mean Girls', role: 'Karen Smith', company: 'West Windsor-Plainsboro HS North', director: '' },
  { title: 'Bang Bang, You\'re Dead', role: 'The Mom', company: 'West Windsor-Plainsboro HS North', director: '' },
  { title: 'The Little Mermaid', role: 'Andrina', company: 'West Windsor-Plainsboro HS North', director: '' },
  { title: 'How to Kiss a Girl', role: 'Steph', company: 'West Windsor-Plainsboro HS North', director: '' },
  { title: 'Matilda', role: 'Alice', company: 'West Windsor-Plainsboro HS North', director: '' },
]

const skills = [
  'Tinikling (Filipino Folk Dance on Bamboo)',
  'Tagalog / Filipino Songs',
  'British Accent',
  'Pole Vaulting',
  'Varsity Cross Country (4 yrs)',
  'Basic Tumbling',
  'Basic Ukulele',
]

export default function App() {
  return (
    <div className="portfolio">

      {/* NAV */}
      <nav className="nav">
        <span className="nav-name">Isabelle Usuquen</span>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#theatre">Theatre</a>
          <a href="#training">Training</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-eyebrow">Musical Theatre Artist</p>
            <h1 className="hero-name">Isabelle<br />Usuquen</h1>
            <p className="hero-tagline">Actress &nbsp;·&nbsp; Singer &nbsp;·&nbsp; Dancer</p>
            <a href="mailto:Irusuquen@gmail.com" className="hero-cta">Get in Touch</a>
          </div>
        </div>

        {/* STATS BAR */}
        <div className="stats-bar">
          <div className="stat">
            <span className="stat-value">9</span>
            <span className="stat-label">Productions</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-value">Soprano</span>
            <span className="stat-label">Voice Type &amp; Belt-Mix</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-value">B.M.</span>
            <span className="stat-label">Music Theatre</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-value">2</span>
            <span className="stat-label">National Awards</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about-section" id="about">
        <div className="section-inner about-inner">
          <div className="section-label">About</div>
          <div className="about-body">
            <p>
              Isabelle Usuquen's love for performing began at an early age, growing up in a lively and
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
      </section>

      {/* THEATRE CREDITS */}
      <section className="section credits-section" id="theatre">
        <div className="section-inner">
          <div className="section-label">Theatre</div>
          <h2 className="section-heading">Stage Credits</h2>
          <div className="credits-table">
            <div className="credits-header">
              <span>Production</span>
              <span>Role</span>
              <span>Company</span>
            </div>
            {productions.map((p) => (
              <div className="credits-row" key={p.title}>
                <span className="credit-title">{p.title}</span>
                <span className="credit-role">{p.role}</span>
                <span className="credit-company">
                  {p.company}
                  {p.director && <em> / {p.director}</em>}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section className="section training-section" id="training">
        <div className="section-inner">
          <div className="section-label">Training</div>
          <h2 className="section-heading">Education &amp; Training</h2>
          <div className="training-grid">
            <div className="training-card training-card--featured">
              <div className="training-school">Baldwin Wallace University</div>
              <div className="training-degree">Bachelor of Music in Music Theatre</div>
              <div className="training-sub">Conservatory of Performing Arts</div>
            </div>
            <div className="training-card">
              <div className="training-category">Voice</div>
              <p>Susan Wallin</p>
            </div>
            <div className="training-card">
              <div className="training-category">Acting</div>
              <p>Jennifer Hemphill &amp; Richard Biever</p>
            </div>
            <div className="training-card">
              <div className="training-category">Dance</div>
              <p>Jazz · Tap (Greg Daniels) · Contemporary · Ballet · Modern (Christina &amp; Sabrina Lindhout)</p>
            </div>
            <div className="training-card training-card--wide">
              <div className="training-category">Master Classes</div>
              <p>Michael Cassara · Andrew Byrne · Merri Sugarman (TRC Company) · Michael Goddard · Ellery Sandhu</p>
            </div>
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="section awards-section">
        <div className="section-inner awards-inner">
          <div className="award-item">
            <div className="award-year">2025</div>
            <div className="award-name">National School Choral Award</div>
          </div>
          <div className="award-divider" />
          <div className="award-item">
            <div className="award-year">2024</div>
            <div className="award-name">Most Outstanding Youth — Filipino American Association of Central New Jersey</div>
          </div>
        </div>
      </section>

      {/* SPECIAL SKILLS */}
      <section className="section skills-section">
        <div className="section-inner">
          <div className="section-label">Skills</div>
          <h2 className="section-heading">Special Skills</h2>
          <ul className="skills-list">
            {skills.map((s) => (
              <li key={s} className="skill-tag">{s}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer className="footer" id="contact">
        <div className="footer-inner">
          <div className="footer-name">Isabelle Usuquen</div>
          <div className="footer-tagline">Actress · Singer · Dancer · Soprano / Belt-Mix · 5'2"</div>
          <div className="footer-links">
            <a href="mailto:Irusuquen@gmail.com">Irusuquen@gmail.com</a>
            <span className="footer-dot">·</span>
            <a href="tel:6095299443">(609) 529-9443</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
