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
    <div className="flex flex-col gap-5">
      <a
        className="inline-block border-b border-rose pb-3 font-serif text-[clamp(20px,2.5vw,30px)] font-normal tracking-[0.12em] text-terra uppercase no-underline transition-opacity duration-150 hover:opacity-70"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
      {total === 0 ? (
        <div className="px-0 py-6 text-[0.8rem] tracking-[0.18em] text-dark/40 uppercase">Coming soon</div>
      ) : (
        <div className="flex items-center justify-center gap-12">
          {total > 1 && (
            <button className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center border-none bg-none text-[2.25rem] text-terra transition-opacity duration-150 hover:opacity-70" onClick={prev} aria-label="Previous">&#8249;</button>
          )}
          <div
            className={`relative overflow-hidden ${aspect === '9 / 16' ? 'w-85 flex-none' : 'flex-1'}`}
            style={{ aspectRatio: aspect }}
          >
            <iframe
              key={`${index}-${dir}`}
              src={items[index].url}
              title={items[index].title}
              className={`block h-full w-full border-none ${dir === 'left' ? 'animate-[swipe-in-left_0.35s_cubic-bezier(0.25,0.46,0.45,0.94)_both]' : dir === 'right' ? 'animate-[swipe-in-right_0.35s_cubic-bezier(0.25,0.46,0.45,0.94)_both]' : ''}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {total > 1 && (
            <button className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center border-none bg-none text-[2.25rem] text-terra transition-opacity duration-150 hover:opacity-70" onClick={next} aria-label="Next">&#8250;</button>
          )}
        </div>
      )}
    </div>
  )
}

export default function Media() {
  return (
    <section className="flex flex-col items-center gap-12 bg-cream px-12 pt-16 pb-24" id="media">
      <div className="animate-[hero-fade-up_0.8s_ease_forwards] border-[1.5px] border-terra px-16 py-4.5 opacity-0 delay-100">
        <span className="font-serif text-[clamp(24px,3vw,36px)] font-normal tracking-[0.22em] text-dark uppercase">Media</span>
      </div>

      <div className="flex w-full max-w-200 animate-[hero-fade-up_0.8s_ease_forwards] flex-col gap-14 opacity-0 delay-[550ms]">
        {platforms.map(p => (
          <PlatformRow key={p.key} label={p.label} url={p.url} aspect={p.aspect} items={p.items} />
        ))}
      </div>
    </section>
  )
}
