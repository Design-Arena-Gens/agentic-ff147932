import Section from '../../components/Section'
import ClassCard, { GymClass } from '../../components/ClassCard'

const classes: GymClass[] = [
  { title: 'HIIT', level: 'Interm?diaire', durationMin: 45, description: 'Intensit? ?lev?e pour booster votre cardio.' },
  { title: 'Yoga', level: 'D?butant', durationMin: 60, description: 'Travaillez votre souplesse et s?r?nit?.' },
  { title: 'Cross Training', level: 'Avanc?', durationMin: 60, description: 'Force, cardio et mobilit?.' },
  { title: 'Pilates', level: 'D?butant', durationMin: 50, description: 'Renforcement profond et posture.' },
  { title: 'Cycling', level: 'Interm?diaire', durationMin: 45, description: 'Cardio rythm?e sur v?lo.' },
  { title: 'Boxe', level: 'Avanc?', durationMin: 60, description: 'Technique, force et explosivit?.' },
]

export default function Page() {
  return (
    <Section title="Tous nos cours" subtitle="Trouvez le cours id?al pour vos objectifs">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {classes.map((c) => <ClassCard key={c.title} classInfo={c} />)}
      </div>
    </Section>
  )
}
