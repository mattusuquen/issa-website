export default function CreditsRow({ title, role, company, director }) {
  return (
    <div className="credits-row">
      <span className="credit-title">{title}</span>
      <span className="credit-role">{role}</span>
      <span className="credit-company">
        {company}
        {director && <em> / {director}</em>}
      </span>
    </div>
  )
}
