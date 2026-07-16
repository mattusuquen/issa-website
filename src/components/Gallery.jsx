const images = [
  '/gallery/gallery1.png',
  '/gallery/gallery2.JPG',
  '/gallery/gallery3.JPG',
  '/gallery/gallery4.JPG',
  '/gallery/gallery5.jpeg',
  '/gallery/gallery6.JPG',
  '/gallery/gallery7.jpeg',
  '/gallery/gallery8.jpeg',
  '/gallery/gallery9.jpeg',
  '/gallery/gallery10.jpeg',
  '/gallery/gallery11.jpeg',
  '/gallery/gallery16.jpeg',
  '/gallery/gallery17.jpeg',
  '/gallery/gallery18.jpeg',
  '/gallery/gallery19.jpeg',
  '/gallery/gallery20.jpeg',
  '/gallery/gallery21.jpeg',
  '/gallery/gallery22.jpeg',
]




function Marquee({ images }) {
  // Duplicate for seamless loop
  const doubled = [...images, ...images]
  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((src, i) => (
          <img key={i} src={src} alt="" className="marquee-img" />
        ))}
      </div>
    </div>
  )
}

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-title-box">
        <span className="gallery-title">Gallery</span>
      </div>

      <div className="gallery-shows">
        <Marquee images={images} />
      </div>
    </section>
  )
}
