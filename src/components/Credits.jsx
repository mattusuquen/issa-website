import productions from '../data/productions'
import CreditsRow from './CreditsRow'

export default function Credits() {
  return (
    <section className="bg-mocha px-12 py-24 text-white max-md:px-6 max-md:py-16" id="theatre">
      <div className="mx-auto max-w-275">
        <div className="mb-4 text-[0.7rem] tracking-[0.22em] text-rose uppercase">Theatre</div>
        <h2 className="mb-12 font-serif text-[clamp(28px,4vw,44px)] font-normal text-white">Stage Credits</h2>
        <div className="w-full border-t border-white/15">
          <div className="grid grid-cols-[2fr_1.5fr_2fr] gap-6 border-b border-white/15 py-3 text-[0.65rem] tracking-[0.18em] text-rose uppercase max-md:grid-cols-[1.5fr_1fr] max-sm:grid-cols-[1fr_1fr]">
            <span>Production</span>
            <span>Role</span>
            <span className="max-md:hidden">Company</span>
          </div>
          {productions.map((p) => (
            <CreditsRow key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
