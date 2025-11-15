import Section from '../../components/Section'
import PricingCard from '../../components/PricingCard'

const plans = [
  { name: 'D?couverte', price: '19?', features: ['Acc?s 7 jours', 'Cours collectifs (2/semaine)', 'Sans engagement'] },
  { name: 'Standard', price: '39?', features: ['Acc?s illimit?', 'Cours collectifs illimit?s', 'Programme personnalis?'], highlighted: true },
  { name: 'Premium', price: '59?', features: ['Tout Standard', 'Coaching 1:1 mensuel', 'Invit?s illimit?s (WE)'] },
]

export default function Page() {
  return (
    <Section title="Nos abonnements" subtitle="Des formules adapt?es ? tous les profils">
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((p) => <PricingCard key={p.name} plan={p} />)}
      </div>
      <p className="mt-6 text-center text-sm text-white/70">Frais d?inscription offerts ce mois-ci.</p>
    </Section>
  )
}
