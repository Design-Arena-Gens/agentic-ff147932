import Section from '../../components/Section'
import ScheduleTable from '../../components/ScheduleTable'

const entries = [
  { day: 'Lundi', time: '18:00', title: 'HIIT' },
  { day: 'Mardi', time: '19:00', title: 'Yoga' },
  { day: 'Mercredi', time: '18:30', title: 'Cross Training' },
  { day: 'Jeudi', time: '19:30', title: 'Cycling' },
  { day: 'Vendredi', time: '18:00', title: 'Boxe' },
  { day: 'Samedi', time: '10:00', title: 'Pilates' },
]

export default function Page() {
  return (
    <Section title="Planning hebdomadaire" subtitle="R?servez votre place via l?accueil ou par t?l?phone">
      <ScheduleTable entries={entries} />
    </Section>
  )
}
