
const videos = [
  { url: 'https://www.youtube.com/embed/_jdoqR9V3eo?si=E5C8HnucYOJjxlxg', title: 'Anyway - Kait Kerrigan' },
  { url: 'https://www.youtube.com/embed/ZmZ6q3m75XI?si=E7pBWw2Awvy-ykz2', title: 'If This is Love - The Notebook' },
  { url: 'https://www.youtube.com/embed/ZkRdyIjTXWQ?si=H5Pjvi_6R5cAHJOE', title: 'Suddenly Seymour - Little Shop of Horrors' },
]

export default function Media() {
  return (
    <section className="media-section" id="media">
      <div className="media-title-box media-fade-1">
        <span className="media-title">Media</span>
      </div>

      <div className="media-videos media-fade-2">
        {videos.map((v) => (
          <div key={v.url} className="media-video-wrapper">
            <iframe
              src={v.url}
              title={v.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </section>
  )
}
