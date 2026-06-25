import productions from '../data/productions'
import CreditsRow from './CreditsRow'

export default function Credits() {
  return (
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
            <CreditsRow key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
