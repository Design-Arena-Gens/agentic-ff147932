'use client'
import Section from '../../components/Section'
import { useState } from 'react'

export default function Page() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [message, setMessage] = useState('')

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('bad status')
      setStatus('success')
      setMessage('Merci, votre message a bien ?t? envoy?.')
      form.reset()
    } catch {
      setStatus('error')
      setMessage('Une erreur est survenue. Veuillez r?essayer.')
    }
  }

  return (
    <Section title="Contact" subtitle="Une question ? ?crivez-nous.">
      <form onSubmit={submit} className="mx-auto max-w-xl space-y-4">
        <div>
          <label className="block text-sm mb-1">Nom</label>
          <input name="name" required className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-brand/40" />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" name="email" required className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-brand/40" />
        </div>
        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea name="message" rows={5} required className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-brand/40" />
        </div>
        <button disabled={status === 'loading'} className="rounded-md bg-brand px-5 py-3 text-sm font-semibold hover:bg-brand-dark disabled:opacity-50">Envoyer</button>
        {status !== 'idle' && <p className={`text-sm ${status === 'success' ? 'text-emerald-400' : status === 'error' ? 'text-red-400' : 'text-white/70'}`}>{message}</p>}
      </form>
    </Section>
  )
}
