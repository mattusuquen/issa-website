import { useState } from 'react'
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

  return (
    <section className="hr-section">
      <div className="hr-banner">
        <div className="hr-banner-overlay">
          <span className="hr-banner-name">H &amp; R</span>
        </div>
      </div>

      <div className="hr-content">
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
          <div className="hr-pdf-wrap">
            <div className="hr-pdf-pages">
              <Document
                file="/resume.pdf"
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              >
                {Array.from({ length: numPages }, (_, i) => (
                  <Page
                    key={i}
                    pageNumber={i + 1}
                    width={Math.min(800, window.innerWidth - 128)}
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
