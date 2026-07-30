export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream text-dark">
      <img
        src="/leaf.png"
        alt=""
        aria-hidden="true"
        className="absolute top-[-200px] left-[-100px] z-0 w-105 -scale-x-100 rotate-80 pointer-events-none opacity-85 animate-[leaf-slide-left_1.2s_ease_0.3s_both] max-sm:top-[-110px] max-sm:left-[-65px] max-sm:w-60"
      />
      <img
        src="/leaf.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[-60px] bottom-[-200px] z-0 w-105 opacity-85 animate-[leaf-slide-right_1.2s_ease_0.3s_both] max-sm:right-[-32px] max-sm:bottom-[-110px] max-sm:w-60"
      />
      <div className="relative z-1 flex flex-col items-center justify-center px-12 pt-20 pb-12 text-center max-md:px-6 max-md:pt-14 max-md:pb-10">
        <h1 className="mb-6 animate-[hero-fade-up_0.8s_ease_forwards] font-serif text-[clamp(48px,6.5vw,90px)] leading-none font-normal tracking-[-0.01em] text-dark uppercase opacity-0 delay-100">
          Isabelle<br />Usuquen
        </h1>

        <div className="mb-5 flex w-65 animate-[hero-fade-up_0.8s_ease_forwards] items-center gap-2.5 opacity-0 delay-[550ms]">
          <span className="block h-px flex-1 bg-terra" />
          <svg className="shrink-0" viewBox="0 0 16 16" width="14" height="14" fill="none">
            <path d="M8 0 L16 8 L8 16 L0 8 Z" fill="var(--color-terra)" />
          </svg>
          <span className="block h-px flex-1 bg-terra" />
        </div>

        <p className="animate-[hero-fade-up_0.8s_ease_forwards] text-[0.85rem] tracking-[0.18em] text-dark uppercase opacity-0 delay-[550ms]">
          Actress &nbsp;|&nbsp; Singer &nbsp;|&nbsp; Dancer
        </p>
      </div>

      <div className="relative z-1 grid animate-[hero-fade-up_0.8s_ease_forwards] grid-cols-3 items-end gap-3 px-12 opacity-0 delay-1000 max-md:px-8 max-sm:gap-2 max-sm:px-5">
        <img src="/headshot1.jpg" alt="Isabelle Usuquen" className="block aspect-3/4 w-full rounded-[10px] object-cover object-top" />
        <img src="/headshot2.jpg" alt="Isabelle Usuquen" className="mb-[-8px] block aspect-[2.5/4] w-full rounded-[10px] object-cover object-top" />
        <img src="/headshot.jpg" alt="Isabelle Usuquen" className="block aspect-3/4 w-full rounded-[10px] object-cover object-[center_48%]" />
      </div>

      <div className="relative z-1 flex animate-[hero-fade-up_0.8s_ease_forwards] flex-col items-center gap-5 px-12 pt-7 pb-22 opacity-0 delay-1000 max-md:px-8 max-md:pt-6 max-md:pb-14 max-sm:px-5 max-sm:pt-5 max-sm:pb-12">
        <span className="block h-px w-4/5 max-w-125 bg-rose" />
        <p className="text-[0.8rem] tracking-[0.22em] text-dark uppercase">NYC &nbsp;|&nbsp; NJ &nbsp;|&nbsp; OH</p>
      </div>
    </section>
  )
}
