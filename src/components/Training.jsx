export default function Training() {
  return (
    <section className="bg-cream px-12 py-24 max-md:px-6 max-md:py-16" id="training">
      <div className="mx-auto max-w-275">
        <div className="mb-4 text-[0.7rem] tracking-[0.22em] text-terra uppercase">Training</div>
        <h2 className="mb-12 font-serif text-[clamp(28px,4vw,44px)] font-normal text-dark">Education &amp; Training</h2>
        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
          <div className="col-span-full flex flex-col gap-1.5 rounded border-none bg-terra p-7 text-white">
            <div className="font-serif text-2xl text-white">Baldwin Wallace University</div>
            <div className="text-[1.05rem] tracking-[0.02em] text-white/90">Bachelor of Music in Music Theatre</div>
            <div className="mt-1 text-[0.8rem] tracking-[0.1em] text-white/60 uppercase">Conservatory of Performing Arts</div>
          </div>
          <div className="rounded border border-terra/15 bg-white p-7">
            <div className="mb-2.5 text-[0.65rem] tracking-[0.18em] text-terra uppercase">Voice</div>
            <p className="text-[0.9rem] leading-[1.6] text-[#4a2e22]">Susan Wallin</p>
          </div>
          <div className="rounded border border-terra/15 bg-white p-7">
            <div className="mb-2.5 text-[0.65rem] tracking-[0.18em] text-terra uppercase">Acting</div>
            <p className="text-[0.9rem] leading-[1.6] text-[#4a2e22]">Jennifer Hemphill &amp; Richard Biever</p>
          </div>
          <div className="rounded border border-terra/15 bg-white p-7">
            <div className="mb-2.5 text-[0.65rem] tracking-[0.18em] text-terra uppercase">Dance</div>
            <p className="text-[0.9rem] leading-[1.6] text-[#4a2e22]">Jazz · Tap (Greg Daniels) · Contemporary · Ballet · Modern (Christina &amp; Sabrina Lindhout)</p>
          </div>
          <div className="col-span-2 rounded border border-terra/15 bg-white p-7 max-md:col-span-1">
            <div className="mb-2.5 text-[0.65rem] tracking-[0.18em] text-terra uppercase">Master Classes</div>
            <p className="text-[0.9rem] leading-[1.6] text-[#4a2e22]">Michael Cassara · Andrew Byrne · Merri Sugarman (TRC Company) · Michael Goddard · Ellery Sandhu</p>
          </div>
        </div>
      </div>
    </section>
  )
}
