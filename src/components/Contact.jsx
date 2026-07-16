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
    <section className="contact-section" id="contact">
      <div className="contact-title-box">
        <span className="contact-title">Contact</span>
      </div>

      <div className="section-inner contact-inner">
        <h2 className="contact-name">Isabelle Usuquen</h2>

        <img src="/headshot1.jpg" alt="Isabelle Usuquen" className="contact-headshot" />

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <div className="contact-field">
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" type="text" name="firstName" required />
            </div>
            <div className="contact-field">
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" type="text" name="lastName" required />
            </div>
          </div>
          <div className="contact-field">
            <label htmlFor="email">Email *</label>
            <input id="email" type="email" name="email" required />
          </div>
          <div className="contact-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={6} />
          </div>

          {status === 'sent' && (
            <p className="contact-form-success">Message sent! I'll be in touch soon.</p>
          )}
          {status === 'error' && (
            <p className="contact-form-error">Something went wrong. Please try again.</p>
          )}

          <button type="submit" className="contact-submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send'}
          </button>
        </form>
      </div>
    </section>
  )
}
