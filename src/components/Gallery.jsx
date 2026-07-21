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
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close">✕</button>
        <img src={item.src} alt={item.show} className="lightbox-img" />
        <div className="lightbox-info">
          <p className="lightbox-show">{item.show}</p>
          <p className="lightbox-role">{item.role}</p>
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
          if (Math.abs(s.pos) >= s.halfWidth) s.pos += s.halfWidth
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
    s.nudgeTarget = base + dir * 600
    s.nudgePauseUntil = performance.now() + 1200
    s.lastTime = null
  }

  return (
    <div className="marquee-wrapper">
      <button className="marquee-chevron marquee-chevron--left" onClick={() => nudge(1)} aria-label="Scroll left">
        <svg viewBox="0 0 22 40" width="14" height="26" fill="none">
          <polyline points="20,2 2,20 20,38" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div
        className="marquee"
        onMouseDown={(e) => { e.preventDefault(); dragStart(e.clientX) }}
        onMouseMove={(e) => dragMove(e.clientX)}
        onMouseUp={dragEnd}
        onMouseLeave={dragEnd}
        onTouchStart={(e) => dragStart(e.touches[0].clientX)}
        onTouchMove={(e) => { e.preventDefault(); dragMove(e.touches[0].clientX) }}
        onTouchEnd={dragEnd}
      >
        <div className="marquee-track" ref={trackRef}>
          {doubled.map((item, i) => (
            <img
              key={i}
              src={item.src}
              alt={item.show}
              className="marquee-img"
              draggable={false}
              onClick={() => handleClick(item)}
            />
          ))}
        </div>
      </div>

      <button className="marquee-chevron marquee-chevron--right" onClick={() => nudge(-1)} aria-label="Scroll right">
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
    <section className="gallery-section" id="gallery">
      <div className="gallery-title-box gallery-fade-1">
        <span className="gallery-title">Gallery</span>
      </div>

      <div className="gallery-shows gallery-fade-2">
        <Marquee images={images} onImageClick={setSelected} />
      </div>

      {selected && <Lightbox item={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
