import { useState } from 'react'

const RECIPIENT_EMAIL = 'you@example.com'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section className="flex flex-col items-center justify-center flex-grow gap-6 px-5 py-12">
      <div className="text-center">
        <h1 className="text-[var(--text-h)]">Get in touch</h1>
        <p className="text-[var(--text)]">Have a question or want to work together? Send a message.</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={form.name}
          onChange={handleChange}
          className="rounded-md border border-[var(--border)] bg-transparent px-3 py-2 text-[var(--text-h)] outline-none focus-visible:border-[var(--accent-border)]"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={handleChange}
          className="rounded-md border border-[var(--border)] bg-transparent px-3 py-2 text-[var(--text-h)] outline-none focus-visible:border-[var(--accent-border)]"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="rounded-md border border-[var(--border)] bg-transparent px-3 py-2 text-[var(--text-h)] outline-none focus-visible:border-[var(--accent-border)] resize-none"
        />
        <button
          type="submit"
          className="rounded-md border-2 border-transparent bg-[var(--accent-bg)] px-4 py-2 text-[var(--accent)] transition-colors hover:border-[var(--accent-border)]"
        >
          Send message
        </button>
      </form>
    </section>
  )
}

export default Contact
