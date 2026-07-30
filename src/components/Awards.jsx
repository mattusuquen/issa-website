export default function Awards() {
  return (
    <section className="bg-rose px-12 py-14 max-md:px-6 max-md:py-16">
      <div className="mx-auto flex max-w-275 flex-wrap items-center justify-center gap-16 max-md:flex-col max-md:gap-8">
        <div className="text-center">
          <div className="mb-2 font-serif text-[2rem] leading-none text-mocha">2025</div>
          <div className="max-w-65 text-[0.85rem] leading-[1.5] text-dark">National School Choral Award</div>
        </div>
        <div className="h-16 w-px shrink-0 bg-mocha/30 max-md:hidden" />
        <div className="text-center">
          <div className="mb-2 font-serif text-[2rem] leading-none text-mocha">2024</div>
          <div className="max-w-65 text-[0.85rem] leading-[1.5] text-dark">Most Outstanding Youth — Filipino American Association of Central New Jersey</div>
        </div>
      </div>
    </section>
  )
}
