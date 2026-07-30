const stats = [
  { value: '9', label: 'Productions' },
  { value: 'Soprano', label: 'Voice Type & Belt-Mix' },
  { value: 'B.M.', label: 'Music Theatre' },
  { value: '2', label: 'National Awards' },
]

export default function StatsBar() {
  return (
    <div className="flex items-center justify-center gap-0 bg-terra p-0 max-md:flex-wrap">
      {stats.flatMap((s, i) => {
        const stat = (
          <div key={s.label} className="flex flex-1 flex-col items-center gap-1.5 px-6 py-7 max-md:flex-[1_1_40%]">
            <span className="font-serif text-[2rem] leading-none text-white">{s.value}</span>
            <span className="text-[0.7rem] tracking-[0.14em] text-white/70 uppercase">{s.label}</span>
          </div>
        )
        return i === 0 ? [stat] : [<div key={`div-${i}`} className="h-12 w-px shrink-0 bg-white/20 max-md:hidden" />, stat]
      })}
    </div>
  )
}
