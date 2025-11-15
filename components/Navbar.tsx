'use client'
import Link from 'next/link'
import { useState } from 'react'
import clsx from 'clsx'

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/classes', label: 'Cours' },
  { href: '/coaches', label: 'Coachs' },
  { href: '/pricing', label: 'Tarifs' },
  { href: '/schedule', label: 'Planning' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-black/40">
      <nav className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded bg-brand" />
          <span className="text-lg font-bold">Pulse Gym</span>
        </Link>
        <button aria-label="Menu" onClick={() => setOpen(!open)} className="md:hidden rounded p-2 hover:bg-white/10">
          <div className="h-0.5 w-6 bg-white mb-1.5" />
          <div className="h-0.5 w-6 bg-white mb-1.5" />
          <div className="h-0.5 w-6 bg-white" />
        </button>
        <ul className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <li key={l.href}><Link href={l.href} className="text-sm text-white/80 hover:text-white">{l.label}</Link></li>
          ))}
          <li><Link href="/pricing" className="rounded-md bg-brand px-4 py-2 text-sm font-semibold hover:bg-brand-dark">S'abonner</Link></li>
        </ul>
      </nav>
      <div className={clsx('md:hidden border-t border-white/10', open ? 'block' : 'hidden')}>
        <ul className="container py-3 space-y-2">
          {links.map(l => (
            <li key={l.href}><Link href={l.href} className="block rounded px-3 py-2 text-white/80 hover:bg-white/10" onClick={() => setOpen(false)}>{l.label}</Link></li>
          ))}
        </ul>
      </div>
    </header>
  )
}
