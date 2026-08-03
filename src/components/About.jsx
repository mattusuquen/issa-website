import { useEffect, useRef, useState } from 'react'

export default function About() {
  const contentRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="relative bg-[url('/headshot3.png')] bg-cover bg-top bg-scroll [@media(hover:hover)_and_(pointer:fine)]:bg-fixed"
      id="about"
    >
      <div className="relative flex min-h-[calc(100vh-60px)] animate-[hero-fade-up_0.8s_ease_forwards] items-center justify-center px-12 opacity-0 delay-100 max-md:px-6 max-md:pt-20 max-md:pb-14">
        <div className="flex items-center gap-5 border-2 border-terra bg-cream/78 px-14 py-7 max-md:px-9 max-md:py-5">
          <span className="[writing-mode:vertical-rl] rotate-180 text-[1.5rem] tracking-[0.28em] text-terra uppercase [text-orientation:mixed]">About</span>
          <span className="font-serif text-[clamp(32px,4.5vw,60px)] leading-none font-normal tracking-[0.04em] text-dark uppercase">Isabelle</span>
        </div>
        <button
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-[chevron-bob_1.8s_ease-in-out_infinite] cursor-pointer border-none bg-none p-2 opacity-80 hover:opacity-100"
          aria-label="Scroll to content"
          onClick={() => {
            const el = document.getElementById('about-content')
            const top = el.getBoundingClientRect().top + window.scrollY - 120
            window.scrollTo({ top, behavior: 'smooth' })
          }}
        >
          <svg viewBox="0 0 40 22" width="26" height="14" fill="none">
            <polyline points="2,2 20,20 38,2" stroke="var(--color-cream)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div
        id="about-content"
        ref={contentRef}
        className={`p-0 transition-[opacity,transform] duration-800 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'}`}
      >
        <div className="bg-cream/78 p-14 max-md:p-8 max-sm:p-6">
          <div className="rounded-xl flex max-w-full flex-col gap-5 bg-cream p-12 max-md:p-0 max-sm:p-4 shadow">
            <p className="font-nunito text-[1.45rem] leading-[1.85] text-[#4a2e22] max-sm:text-base max-sm:leading-[1.7]">
              <span className="font-serif text-[clamp(24px,3.5vw,48px)] leading-none font-normal align-baseline text-terra">Isabelle's</span> love for performing began at an early age, growing up in a lively and
              music-rich Filipino household in Central New Jersey. Whether singing solo at the yearly
              Simbang Gabi Christmas mass, making ridiculous parodies with her older brother, or joining
              karaoke sessions, music always found a way to bring joy into her life.
            </p>
            <p className="font-nunito text-[1.45rem] leading-[1.85] text-[#4a2e22] max-sm:text-base max-sm:leading-[1.7]">
              Before pursuing her B.M. in Music Theatre at Baldwin Wallace University, Isabelle jumped
              between theatre rehearsals and track practice, where she served as varsity captain and
              pole-vaulted for three years. She is a National Choral Award recipient, and her featured
              stage stage credits include Audrey in <em>Little Shop of Horrors</em> and Karen Smith in <em>Mean Girls</em>.
              She was also elected Youth Ambassador for the Filipino American Association of Central
              New Jersey (FAACNJ), where she shared her love of music with her community, including
              cantoring at St. Patrick's Cathedral in NYC and teaching traditional Filipino folk dance.
            </p>
            <p className="font-nunito text-[1.45rem] leading-[1.85] text-[#4a2e22] max-sm:text-base max-sm:leading-[1.7]">
              She is beyond excited to continue connecting and sharing her passion with others. Off stage,
              she can be found training for her next half marathon, trying all the dessert spots in town, or
              spending time with her dogs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
