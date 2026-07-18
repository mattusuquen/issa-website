import { useRef, useEffect } from 'react'

const images = [
  '/gallery/gallery1.jpeg',
  '/gallery/gallery2.jpeg',
  '/gallery/gallery3.jpeg',
  '/gallery/gallery4.jpeg',
  '/gallery/gallery5.png',
  '/gallery/gallery6.JPG',
  '/gallery/gallery7.JPG',
  '/gallery/gallery8.JPG',
  '/gallery/gallery9.jpeg',
  '/gallery/gallery10.jpeg',
  '/gallery/gallery11.jpeg',
  '/gallery/gallery12.jpeg',
  '/gallery/gallery13.jpeg',
]

function Marquee({ images }) {
  const doubled = [...images, ...images]
  const trackRef = useRef(null)
  const stateRef = useRef({
    pos: 0,
    dragging: false,
    dragStartX: 0,
    dragStartPos: 0,
    halfWidth: 0,
    lastTime: null,
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
      if (!s.dragging) {
        if (s.lastTime !== null && s.halfWidth > 0) {
          const speed = s.halfWidth / 100 // match original 100s duration
          s.pos -= speed * ((time - s.lastTime) / 1000)
          if (Math.abs(s.pos) >= s.halfWidth) s.pos += s.halfWidth
        }
        s.lastTime = time
      }
      track.style.transform = `translateX(${s.pos}px)`
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
  }

  const dragMove = (clientX) => {
    const s = stateRef.current
    if (!s.dragging) return
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

  return (
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
        {doubled.map((src, i) => (
          <img key={i} src={src} alt="" className="marquee-img" draggable={false} />
        ))}
      </div>
    </div>
  )
}

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-title-box gallery-fade-1">
        <span className="gallery-title">Gallery</span>
      </div>

      <div className="gallery-shows gallery-fade-2">
        <Marquee images={images} />
      </div>
    </section>
  )
}
