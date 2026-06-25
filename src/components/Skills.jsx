import skills from '../data/skills'

export default function Skills() {
  return (
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
  )
}
