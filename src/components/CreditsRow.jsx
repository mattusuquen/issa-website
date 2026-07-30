export default function CreditsRow({ title, role, company, director }) {
  return (
    <div className="grid grid-cols-[2fr_1.5fr_2fr] items-baseline gap-6 border-b border-white/8 py-5 transition-colors duration-150 hover:mx-[-16px] hover:bg-white/4 hover:px-4 max-md:grid-cols-[1.5fr_1fr] max-sm:grid-cols-[1fr_1fr]">
      <span className="font-serif text-[1.05rem] text-white italic">{title}</span>
      <span className="text-[0.95rem] text-white/80">{role}</span>
      <span className="text-[0.85rem] text-white/50 max-md:hidden [&_em]:not-italic">
        {company}
        {director && <em> / {director}</em>}
      </span>
    </div>
  )
}
