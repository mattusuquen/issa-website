import { useState } from 'react'

export default function Hero() {
  const [showCredit, setShowCredit] = useState(false)

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
          Actor &nbsp;|&nbsp; Singer &nbsp;|&nbsp; Dancer
        </p>
      </div>

      <div className="relative z-1 grid animate-[hero-fade-up_0.8s_ease_forwards] grid-cols-3 items-end gap-3 px-4 opacity-0 delay-1000 max-md:px-3 max-sm:gap-2 max-sm:px-2">
        <button type="button" onClick={() => setShowCredit(true)} className="block cursor-pointer border-none bg-none p-0">
          <img src="/IMG_6219.PNG" alt="Isabelle Usuquen" className="block aspect-3/4 w-full -scale-x-100 rounded-sm object-cover object-top" />
        </button>
        <button type="button" onClick={() => setShowCredit(true)} className="mb-[-8px] block cursor-pointer border-none bg-none p-0">
          <img src="/IMG_6221.PNG" alt="Isabelle Usuquen" className="block aspect-[2.5/4] w-full rounded-sm object-cover object-top" />
        </button>
        <button type="button" onClick={() => setShowCredit(true)} className="block cursor-pointer border-none bg-none p-0">
          <img src="/IMG_6220.PNG" alt="Isabelle Usuquen" className="block aspect-3/4 w-full rounded-sm object-cover object-top" />
        </button>
      </div>

      {showCredit && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark/50 px-6 animate-[lightbox-fade_0.2s_ease_forwards]"
          onClick={() => setShowCredit(false)}
        >
          <div
            className="relative flex flex-col items-center gap-4 border-2 border-terra bg-cream px-12 py-8 text-center shadow-lg max-sm:px-8 max-sm:py-6"
            onClick={e => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowCredit(false)}
              aria-label="Close"
              className="absolute top-2 right-3 cursor-pointer border-none bg-none text-2xl leading-none text-terra transition-opacity duration-150 hover:opacity-70"
            >
              &times;
            </button>
            <p className="font-serif text-[clamp(18px,2.5vw,26px)] tracking-[0.06em] text-dark uppercase">
              Photo by Robert Quiles
            </p>
          </div>
        </div>
      )}

      <div className="relative z-1 flex animate-[hero-fade-up_0.8s_ease_forwards] flex-col items-center gap-5 px-12 pt-7 pb-22 opacity-0 delay-1000 max-md:px-8 max-md:pt-6 max-md:pb-14 max-sm:px-5 max-sm:pt-5 max-sm:pb-12">
        <span className="block h-px w-4/5 max-w-125 bg-rose" />
        <p className="text-[0.8rem] tracking-[0.22em] text-dark uppercase">NYC &nbsp;|&nbsp; NJ &nbsp;|&nbsp; OH</p>
      </div>
    </section>
  )
}
