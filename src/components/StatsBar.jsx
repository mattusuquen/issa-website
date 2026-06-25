const stats = [
  { value: '9', label: 'Productions' },
  { value: 'Soprano', label: 'Voice Type & Belt-Mix' },
  { value: 'B.M.', label: 'Music Theatre' },
  { value: '2', label: 'National Awards' },
]

export default function StatsBar() {
  return (
    <div className="stats-bar">
      {stats.flatMap((s, i) => {
        const stat = (
          <div key={s.label} className="stat">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        )
        return i === 0 ? [stat] : [<div key={`div-${i}`} className="stat-divider" />, stat]
      })}
    </div>
  )
}
