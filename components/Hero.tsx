import Button from './Button'
import Container from './Container'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute -inset-40 -z-10 opacity-30 blur-3xl">
        <div className="h-full w-full bg-gradient-to-br from-brand/60 to-emerald-400/40" />
      </div>
      <Container className="py-16 md:py-28">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Atteignez vos objectifs avec Pulse Gym</h1>
          <p className="mt-4 text-white/80">Des coachs certifi?s, des cours motivants et des ?quipements haut de gamme dans une atmosph?re conviviale.</p>
          <div className="mt-8 flex gap-3">
            <Button as="link" href="/pricing">Commencer maintenant</Button>
            <Button as="link" href="/classes" variant="ghost">Voir les cours</Button>
          </div>
          <div className="mt-10 flex items-center gap-6 text-white/70">
            <div><span className="text-2xl font-bold text-white">+1000</span><div className="text-xs">Membres actifs</div></div>
            <div><span className="text-2xl font-bold text-white">+40</span><div className="text-xs">Cours / semaine</div></div>
            <div><span className="text-2xl font-bold text-white">7j/7</span><div className="text-xs">Ouvert</div></div>
          </div>
        </div>
      </Container>
    </div>
  )
}
