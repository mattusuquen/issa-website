export default function Training() {
  return (
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
  )
}
