import { useState } from 'react'

const platforms = [
  {
    key: 'youtube',
    label: 'YouTube',
    url: 'https://youtube.com/@isabelleusuquen8126?si=6-G5eSZl29Lkvfff',
    aspect: '16 / 9',
    items: [
      { url: 'https://www.youtube.com/embed/_jdoqR9V3eo?si=E5C8HnucYOJjxlxg', title: 'Anyway - Kait Kerrigan' },
      { url: 'https://www.youtube.com/embed/ZmZ6q3m75XI?si=E7pBWw2Awvy-ykz2', title: 'If This is Love - The Notebook' },
      { url: 'https://www.youtube.com/embed/ZkRdyIjTXWQ?si=H5Pjvi_6R5cAHJOE', title: 'Suddenly Seymour - Little Shop of Horrors' },
    ],
  },
  {
    key: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/isabelleusuquen?utm_source=qr',
    aspect: '9 / 16',
    items: [
      { url: 'https://www.instagram.com/reel/DX4glVbxtCw/embed', title: 'Instagram Reel' },
    ],
  },
  {
    key: 'tiktok',
    label: 'TikTok',
    url: 'https://www.tiktok.com/@isabelle.usuquen?_r=1&_t=ZT-984N27cGbhF',
    aspect: '9 / 16',
    items: [
      { url: 'https://www.tiktok.com/embed/v2/7665142866901077262', title: 'TikTok Video' },
    ],
  },
]

function PlatformRow({ label, url, aspect, items }) {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(null) // 'left' | 'right'
  const total = items.length

  function prev() {
    setDir('right')
    setIndex(i => (i - 1 + total) % total)
  }

  function next() {
    setDir('left')
    setIndex(i => (i + 1) % total)
  }

  return (
    <div className="media-platform">
      <a
        className="media-platform-label media-platform-label--link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
      {total === 0 ? (
        <div className="media-empty">Coming soon</div>
      ) : (
        <div className="media-row">
          {total > 1 && <button className="media-arrow" onClick={prev} aria-label="Previous">&#8249;</button>}
          <div className={`media-slide-clip${aspect === '9 / 16' ? ' media-slide-clip--portrait' : ''}`} style={{ aspectRatio: aspect }}>
            <iframe
              key={`${index}-${dir}`}
              src={items[index].url}
              title={items[index].title}
              className={`media-slide-iframe${dir ? ` media-swipe-${dir}` : ''}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              style={{ border: 'none' }}
            />
          </div>
          {total > 1 && <button className="media-arrow" onClick={next} aria-label="Next">&#8250;</button>}
        </div>
      )}
    </div>
  )
}

export default function Media() {
  return (
    <section className="media-section" id="media">
      <div className="media-title-box media-fade-1">
        <span className="media-title">Media</span>
      </div>

      <div className="media-platforms media-fade-2">
        {platforms.map(p => (
          <PlatformRow key={p.key} label={p.label} url={p.url} aspect={p.aspect} items={p.items} />
        ))}
      </div>
    </section>
  )
}
