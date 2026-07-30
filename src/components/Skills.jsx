import skills from '../data/skills'

export default function Skills() {
  return (
    <section className="bg-cream px-12 pt-20 pb-20 max-md:p-16 max-md:px-6">
      <div className="mx-auto max-w-275">
        <div className="mb-4 text-[0.7rem] tracking-[0.22em] text-terra uppercase">Skills</div>
        <h2 className="mb-12 font-serif text-[clamp(28px,4vw,44px)] font-normal text-dark">Special Skills</h2>
        <ul className="flex list-none flex-wrap gap-3 p-0">
          {skills.map((s) => (
            <li key={s} className="rounded-full border border-rose bg-white px-5.5 py-2.5 text-[0.85rem] tracking-[0.04em] text-mocha">{s}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
