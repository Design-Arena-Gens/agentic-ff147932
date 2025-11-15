import Hero from '../components/Hero'
import Section from '../components/Section'
import ClassCard, { GymClass } from '../components/ClassCard'
import Button from '../components/Button'
import Container from '../components/Container'

const classes: GymClass[] = [
  { title: 'HIIT', level: 'Interm?diaire', durationMin: 45, description: 'Entra?nement par intervalles ? haute intensit? pour br?ler un max de calories.' },
  { title: 'Yoga', level: 'D?butant', durationMin: 60, description: 'Assouplissement, respiration et relaxation pour ?quilibrer le corps et l?esprit.' },
  { title: 'Cross Training', level: 'Avanc?', durationMin: 60, description: 'Renforcement complet combinant cardio, force et mobilit?.' },
]

export default function Page() {
  return (
    <>
      <Hero />
      <Section title="Cours populaires" subtitle="Des sessions vari?es adapt?es ? tous les niveaux">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((c) => <ClassCard key={c.title} classInfo={c} />)}
        </div>
        <div className="mt-6">
          <Button as="link" href="/classes" variant="ghost">Voir tout le planning</Button>
        </div>
      </Section>
      <Section title="Pourquoi Pulse Gym ?">
        <div className="grid gap-6 md:grid-cols-3">
          <Feature title="Coachs certifi?s" text="Une ?quipe passionn?e pour vous guider." />
          <Feature title="Mat?riel premium" text="Des ?quipements modernes et entretenus." />
          <Feature title="Ambiance motivante" text="Un lieu convivial pour performer." />
        </div>
      </Section>
      <Section title="Pr?t ? commencer ?">
        <Container className="flex flex-col items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xl font-semibold">Passez ? l?action aujourd?hui</div>
            <div className="text-white/70 text-sm">Rejoignez la communaut? et b?n?ficiez d?un coaching personnalis?.</div>
          </div>
          <div className="flex gap-3">
            <Button as="link" href="/pricing">Choisir un abonnement</Button>
            <Button as="link" href="/contact" variant="ghost">Nous contacter</Button>
          </div>
        </Container>
      </Section>
    </>
  )
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-5">
      <div className="mb-2 inline-block rounded bg-brand/20 px-2 py-1 text-xs text-brand">{title}</div>
      <p className="text-sm text-white/80">{text}</p>
    </div>
  )
}
