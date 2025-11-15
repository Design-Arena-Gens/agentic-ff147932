import Section from '../../components/Section'
import CoachCard, { Coach } from '../../components/CoachCard'

const coaches: Coach[] = [
  { name: 'L?a Dupont', specialty: 'Yoga & Pilates', bio: 'Sp?cialis?e en mobilit? et respiration.' },
  { name: 'Karim Benali', specialty: 'HIIT & Boxe', bio: 'Toujours ? fond pour vous d?passer.' },
  { name: 'Marie Curier', specialty: 'Cross Training', bio: 'Technique et s?curit? avant tout.' },
]

export default function Page() {
  return (
    <Section title="Nos coachs" subtitle="Des experts passionn?s ? votre service">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {coaches.map((c) => <CoachCard key={c.name} coach={c} />)}
      </div>
    </Section>
  )
}
