import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center bg-cream px-6 py-24 text-center">
      <p className="animate-[hero-fade-up_0.8s_ease_forwards] font-serif text-[clamp(64px,10vw,140px)] leading-none font-normal tracking-[-0.01em] text-terra opacity-0 delay-100">
        404
      </p>

      <div className="my-6 flex w-40 animate-[hero-fade-up_0.8s_ease_forwards] items-center gap-2.5 opacity-0 delay-[400ms]">
        <span className="block h-px flex-1 bg-terra" />
        <svg className="shrink-0" viewBox="0 0 16 16" width="14" height="14" fill="none">
          <path d="M8 0 L16 8 L8 16 L0 8 Z" fill="var(--color-terra)" />
        </svg>
        <span className="block h-px flex-1 bg-terra" />
      </div>

      <h1 className="animate-[hero-fade-up_0.8s_ease_forwards] font-serif text-[clamp(28px,4vw,40px)] font-normal text-dark uppercase opacity-0 delay-[550ms]">
        Page Not Found
      </h1>

      <p className="mt-4 animate-[hero-fade-up_0.8s_ease_forwards] text-[0.9rem] tracking-[0.06em] text-dark opacity-0 delay-[550ms]">
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-10 animate-[hero-fade-up_0.8s_ease_forwards] border-none bg-mocha px-6 py-4 text-[0.85rem] tracking-[0.14em] text-white uppercase no-underline transition-colors duration-200 opacity-0 delay-1000 hover:bg-terra"
      >
        Back Home
      </Link>
    </section>
  )
}
