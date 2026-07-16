const headshots = [
  '/headshot2.jpg',
  '/headshot3.png',
]

export default function HeadshotsResume() {
  return (
    <section className="hr-section">
      <div className="hr-banner">
        <div className="hr-banner-overlay">
          <span className="hr-banner-label">H&amp;R</span>
          <span className="hr-banner-name">Headshots &amp; Resume</span>
        </div>
      </div>

      <div className="hr-content">
        <div className="hr-block">
          <h2 className="hr-heading">Headshots</h2>
          <div className="hr-grid">
            {headshots.map((src, i) => (
              <div key={i} className="hr-photo-wrap">
                <img src={src} alt={`Headshot ${i + 1}`} className="hr-photo" />
                <a
                  href={src}
                  download
                  className="hr-download-btn"
                  aria-label={`Download headshot ${i + 1}`}
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="hr-block">
          <h2 className="hr-heading">Resume</h2>
          <div className="hr-pdf-wrap">
            <iframe
              src="/resume.pdf"
              title="Isabelle Usuquen Resume"
              className="hr-pdf"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
