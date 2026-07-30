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
      setPdfWidth(Math.min(800, entry.contentRect.width))
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-cream text-dark">
      <div className="relative flex h-55 items-center justify-center bg-terra">
        <div className="flex animate-[hero-fade-up_0.8s_ease_forwards] flex-col items-center gap-2 text-center opacity-0 delay-100">
          <span className="text-[0.75rem] tracking-[0.22em] text-rose uppercase">Download</span>
          <span className="font-serif text-[6rem] font-normal tracking-[0.02em] text-white">H &amp; R</span>
        </div>
      </div>

      <div className="mx-auto flex max-w-300 animate-[hero-fade-up_0.8s_ease_forwards] flex-col gap-20 px-16 py-20 opacity-0 delay-[550ms] max-md:px-8 max-md:py-14 max-sm:gap-14 max-sm:px-5 max-sm:py-10">
        <div>
          <h2 className="mb-8 border-b border-rose pb-3 font-serif text-[clamp(18px,2vw,26px)] font-normal tracking-[0.06em] text-terra uppercase">Headshot</h2>
          <div className="flex justify-center gap-4 max-md:flex-wrap max-sm:gap-2.5">
            {headshots.map((src, i) => (
              <div key={i} className="group relative aspect-3/4 w-full max-w-200 overflow-hidden">
                <img src={src} alt={`Headshot ${i + 1}`} className="block h-full w-full object-cover object-top transition-transform duration-300 ease-in-out group-hover:scale-103" />
                <a
                  href={src}
                  download
                  aria-label={`Download headshot ${i + 1}`}
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 translate-y-2 border border-dark bg-cream px-4.5 py-2 text-[0.72rem] tracking-[0.14em] whitespace-nowrap text-dark uppercase opacity-0 no-underline transition-[opacity,transform,background-color,color] duration-200 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-dark hover:text-cream"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-8 border-b border-rose pb-3 font-serif text-[clamp(18px,2vw,26px)] font-normal tracking-[0.06em] text-terra uppercase">Resume</h2>
          <div className="group relative inline-block w-full" ref={pdfWrapRef}>
            <div className="flex flex-col items-center">
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
                    className="[&_canvas]:block [&_canvas]:max-w-full"
                  />
                ))}
              </Document>
            </div>
            <a
              href="/resume.pdf"
              download
              aria-label="Download resume"
              className="absolute bottom-3 left-1/2 -translate-x-1/2 translate-y-2 border border-dark bg-cream px-4.5 py-2 text-[0.72rem] tracking-[0.14em] whitespace-nowrap text-dark uppercase opacity-0 no-underline transition-[opacity,transform,background-color,color] duration-200 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-dark hover:text-cream"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
