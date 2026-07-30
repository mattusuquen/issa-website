import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    setStatus('sending')
    const res = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })

    if (res.ok) {
      setStatus('sent')
      form.reset()
    } else {
      setStatus('error')
    }
  }

  return (
    <section className="flex flex-col items-center bg-cream pb-24" id="contact">
      <div className="my-16 animate-[hero-fade-up_0.8s_ease_forwards] border-[1.5px] border-terra px-16 py-4.5 opacity-0 delay-100">
        <span className="font-serif text-[clamp(24px,3vw,36px)] font-normal tracking-[0.22em] text-dark uppercase">Contact</span>
      </div>

      <div className="mx-auto flex w-full max-w-275 flex-col items-center gap-4 text-center">
        <h2 className="animate-[hero-fade-up_0.8s_ease_forwards] font-serif text-[clamp(36px,5vw,64px)] font-normal text-dark opacity-0 delay-[400ms]">Isabelle Usuquen</h2>

        <img
          src="/headshot1.jpg"
          alt="Isabelle Usuquen"
          className="my-6 block w-[calc(100%-48px)] max-w-140 animate-[hero-fade-up_0.8s_ease_forwards] rounded-2xl opacity-0 delay-[700ms]"
        />

        <form
          className="mt-12 flex w-full max-w-140 animate-[hero-fade-up_0.8s_ease_forwards] flex-col gap-6 px-6 text-left opacity-0 delay-1000 box-border"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
            <div className="flex flex-col gap-2">
              <label className="text-[0.8rem] tracking-[0.06em] text-dark" htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                required
                className="resize-none border-[1.5px] border-dark/25 bg-transparent px-3.5 py-3 font-sans text-[0.95rem] text-dark outline-none transition-colors duration-150 focus:border-terra"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[0.8rem] tracking-[0.06em] text-dark" htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                required
                className="resize-none border-[1.5px] border-dark/25 bg-transparent px-3.5 py-3 font-sans text-[0.95rem] text-dark outline-none transition-colors duration-150 focus:border-terra"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[0.8rem] tracking-[0.06em] text-dark" htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="resize-none border-[1.5px] border-dark/25 bg-transparent px-3.5 py-3 font-sans text-[0.95rem] text-dark outline-none transition-colors duration-150 focus:border-terra"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[0.8rem] tracking-[0.06em] text-dark" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="resize-none border-[1.5px] border-dark/25 bg-transparent px-3.5 py-3 font-sans text-[0.95rem] text-dark outline-none transition-colors duration-150 focus:border-terra"
            />
          </div>

          {status === 'sent' && (
            <p className="text-[0.9rem] text-terra">Message sent! I'll be in touch soon.</p>
          )}
          {status === 'error' && (
            <p className="text-[0.9rem] text-[#b94040]">Something went wrong. Please try again.</p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="cursor-pointer border-none bg-mocha px-4 py-4 text-[0.85rem] tracking-[0.14em] text-white uppercase transition-colors duration-200 hover:bg-terra disabled:cursor-default disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Send'}
          </button>
        </form>
      </div>
    </section>
  )
}
