import { useState, useRef, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()

const headshots = [
  '/headshot1.jpg',
]

export default function HeadshotsResume() {
  const [numPages, setNumPages] = useState(null)
  const pdfWrapRef = useRef(null)
  const [pdfWidth, setPdfWidth] = useState(800)

  useEffect(() => {
    const el = pdfWrapRef.current
    if (!el) return
    const observer = new ResizeObserver(([entry]) => {
      setPdfWidth(entry.contentRect.width)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="hr-section">
      <div className="hr-banner">
        <div className="hr-banner-overlay hr-fade-1">
          <span className="hr-banner-label">Download</span>
          <span className="hr-banner-name">H &amp; R</span>
        </div>
      </div>

      <div className="hr-content hr-fade-2">
        <div className="hr-block">
          <h2 className="hr-heading">Headshot</h2>
          <div className="hr-grid">
            {headshots.map((src, i) => (
              <div key={i} className="hr-photo-wrap">
                <img src={src} alt={`Headshot ${i + 1}`} className="hr-photo" />
                <a
                  href={src}
                  download
                  className="hr-download-btn"
                  aria-label={`Download headshot ${i + 1}`}
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="hr-block">
          <h2 className="hr-heading">Resume</h2>
          <div className="hr-pdf-wrap" ref={pdfWrapRef}>
            <div className="hr-pdf-pages">
              <Document
                file="/resume.pdf"
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              >
                {Array.from({ length: numPages }, (_, i) => (
                  <Page
                    key={i}
                    pageNumber={i + 1}
                    width={pdfWidth}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                  />
                ))}
              </Document>
            </div>
            <a href="/resume.pdf" download className="hr-resume-btn" aria-label="Download resume">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
