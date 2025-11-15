import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="container py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded bg-brand" />
            <span className="text-lg font-bold">Pulse Gym</span>
          </div>
          <p className="mt-3 text-sm text-white/60">Votre salle de sport moderne au coeur de la ville.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-white/80">
            <li><Link href="/classes" className="hover:text-white">Cours</Link></li>
            <li><Link href="/coaches" className="hover:text-white">Coachs</Link></li>
            <li><Link href="/pricing" className="hover:text-white">Tarifs</Link></li>
            <li><Link href="/schedule" className="hover:text-white">Planning</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-white/80 text-sm">123 Rue du Fitness, Paris</p>
          <p className="text-white/80 text-sm">+33 1 23 45 67 89</p>
          <p className="text-white/80 text-sm">contact@pulsegym.fr</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        ? {new Date().getFullYear()} Pulse Gym. Tous droits r?serv?s.
      </div>
    </footer>
  )
}
