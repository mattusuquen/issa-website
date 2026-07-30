import { useRef, useEffect, useState } from 'react'

const images = [
  { src: '/gallery/gallery1.jpeg', show: 'Little Shop of Horrors', role: 'Audrey' },
  { src: '/gallery/gallery2.jpeg', show: 'Little Shop of Horrors', role: 'Audrey' },
  { src: '/gallery/gallery3.jpeg', show: 'Little Shop of Horrors', role: 'Audrey' },
  { src: '/gallery/gallery4.jpeg', show: 'Little Shop of Horrors', role: 'Audrey' },
  { src: '/gallery/gallery5.png', show: 'The Secret Garden', role: 'Ayah' },
  { src: '/gallery/gallery6.JPG', show: 'The Secret Garden', role: 'Ayah' },
  { src: '/gallery/gallery7.JPG', show: 'The Secret Garden', role: 'Ayah' },
  { src: '/gallery/gallery8.JPG', show: 'The Secret Garden', role: 'Ayah' },
  { src: '/gallery/gallery9.jpeg', show: 'Mean Girls', role: 'Karen Smith' },
  { src: '/gallery/gallery10.jpeg', show: 'Mean Girls', role: 'Karen Smith' },
  { src: '/gallery/gallery11.jpeg', show: 'Mean Girls', role: 'Karen Smith' },
  { src: '/gallery/gallery12.jpeg', show: 'Mean Girls', role: 'Karen Smith' },
  { src: '/gallery/gallery13.jpeg', show: 'Mean Girls', role: 'Karen Smith' },
]

function Lightbox({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-1000 flex animate-[lightbox-fade_0.2s_ease] items-center justify-center bg-dark/82 p-6"
      onClick={onClose}
    >
      <div className="relative flex max-h-[90vh] flex-col items-center gap-5" onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute -top-10 right-0 cursor-pointer border-none bg-none px-2 py-1 text-[1.1rem] text-cream opacity-70 transition-opacity duration-150 hover:opacity-100"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
        <img src={item.src} alt={item.show} className="block max-h-[72vh] max-w-[90vw] w-auto rounded-md object-contain" />
        <div className="text-center">
          <p className="font-serif text-[clamp(18px,2.5vw,28px)] font-normal tracking-[0.08em] text-cream uppercase">{item.show}</p>
          <p className="mt-1.5 text-[0.8rem] tracking-[0.2em] text-rose uppercase">{item.role}</p>
        </div>
      </div>
    </div>
  )
}

function Marquee({ images, onImageClick }) {
  const doubled = [...images, ...images]
  const trackRef = useRef(null)
  const stateRef = useRef({
    pos: 0,
    displayPos: 0,
    nudgeTarget: null,
    nudgePauseUntil: 0,
    dragging: false,
    dragStartX: 0,
    dragStartPos: 0,
    halfWidth: 0,
    lastTime: null,
    didDrag: false,
  })
  const rafRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const initHalfWidth = () => {
      stateRef.current.halfWidth = track.scrollWidth / 2
    }
    initHalfWidth()
    const timer = setTimeout(initHalfWidth, 300)

    const tick = (time) => {
      const s = stateRef.current

      if (s.nudgeTarget !== null) {
        // Smoothly lerp toward nudge target
        s.displayPos += (s.nudgeTarget - s.displayPos) * 0.08
        if (Math.abs(s.nudgeTarget - s.displayPos) < 0.5) {
          s.displayPos = s.nudgeTarget
          s.pos = s.nudgeTarget
          s.nudgeTarget = null
        }
      } else if (!s.dragging && time > s.nudgePauseUntil) {
        if (s.lastTime !== null && s.halfWidth > 0) {
          const speed = s.halfWidth / 100
          s.pos -= speed * ((time - s.lastTime) / 1000)
          if (s.halfWidth > 0) {
            s.pos = ((s.pos % s.halfWidth) - s.halfWidth) % s.halfWidth
          }
        }
        s.lastTime = time
        s.displayPos = s.pos
      } else {
        s.lastTime = time
      }

      track.style.transform = `translateX(${s.nudgeTarget !== null ? s.displayPos : s.pos}px)`
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(rafRef.current)
      clearTimeout(timer)
    }
  }, [])

  const dragStart = (clientX) => {
    const s = stateRef.current
    s.dragging = true
    s.nudgeTarget = null
    s.dragStartX = clientX
    s.dragStartPos = s.pos
    s.lastTime = null
    s.didDrag = false
  }

  const dragMove = (clientX) => {
    const s = stateRef.current
    if (!s.dragging) return
    if (Math.abs(clientX - s.dragStartX) > 4) s.didDrag = true
    let newPos = s.dragStartPos + (clientX - s.dragStartX)
    if (s.halfWidth > 0) {
      let wrapped = newPos % s.halfWidth
      if (wrapped > 0) wrapped -= s.halfWidth
      newPos = wrapped
    }
    s.pos = newPos
    s.displayPos = newPos
  }

  const dragEnd = () => {
    const s = stateRef.current
    s.dragging = false
    s.lastTime = null
  }

  const handleClick = (item) => {
    if (!stateRef.current.didDrag) onImageClick(item)
  }

  const nudge = (dir) => {
    const s = stateRef.current
    const base = s.nudgeTarget !== null ? s.nudgeTarget : s.displayPos
    let target = base + dir * 600
    if (s.halfWidth > 0) {
      target = ((target % s.halfWidth) - s.halfWidth) % s.halfWidth
    }
    s.nudgeTarget = target
    s.nudgePauseUntil = performance.now() + 1200
    s.lastTime = null
  }

  return (
    <div className="relative w-full">
      <button
        className="absolute top-1/2 left-0 z-2 -translate-y-1/2 cursor-pointer border-none bg-none px-5 py-0 text-cream opacity-85 transition-opacity duration-200 [filter:drop-shadow(0_2px_6px_rgba(0,0,0,0.5))] hover:opacity-100"
        onClick={() => nudge(1)}
        aria-label="Scroll left"
      >
        <svg viewBox="0 0 22 40" width="14" height="26" fill="none">
          <polyline points="20,2 2,20 20,38" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div
        className="w-full cursor-grab overflow-hidden active:cursor-grabbing"
        onMouseDown={(e) => { e.preventDefault(); dragStart(e.clientX) }}
        onMouseMove={(e) => dragMove(e.clientX)}
        onMouseUp={dragEnd}
        onMouseLeave={dragEnd}
        onTouchStart={(e) => dragStart(e.touches[0].clientX)}
        onTouchMove={(e) => { e.preventDefault(); dragMove(e.touches[0].clientX) }}
        onTouchEnd={dragEnd}
      >
        <div className="flex w-max gap-3" ref={trackRef}>
          {doubled.map((item, i) => (
            <img
              key={i}
              src={item.src}
              alt={item.show}
              className="block h-70 w-auto shrink-0 cursor-pointer object-cover"
              draggable={false}
              onClick={() => handleClick(item)}
            />
          ))}
        </div>
      </div>

      <button
        className="absolute top-1/2 right-0 z-2 -translate-y-1/2 cursor-pointer border-none bg-none px-5 py-0 text-cream opacity-85 transition-opacity duration-200 [filter:drop-shadow(0_2px_6px_rgba(0,0,0,0.5))] hover:opacity-100"
        onClick={() => nudge(-1)}
        aria-label="Scroll right"
      >
        <svg viewBox="0 0 22 40" width="14" height="26" fill="none">
          <polyline points="2,2 20,20 2,38" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  )
}

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="flex flex-col items-center bg-cream pb-24" id="gallery">
      <div className="my-16 animate-[hero-fade-up_0.8s_ease_forwards] border-[1.5px] border-terra px-16 py-4.5 opacity-0 delay-100">
        <span className="font-serif text-[clamp(24px,3vw,36px)] font-normal tracking-[0.22em] text-dark uppercase">Gallery</span>
      </div>

      <div className="flex w-full animate-[hero-fade-up_0.8s_ease_forwards] flex-col gap-16 opacity-0 delay-[550ms]">
        <Marquee images={images} onImageClick={setSelected} />
      </div>

      {selected && <Lightbox item={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
