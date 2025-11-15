import Button from './Button'

type Plan = {
  name: string
  price: string
  features: string[]
  highlighted?: boolean
}

export default function PricingCard({ plan }: { plan: Plan }) {
  return (
    <div className={`flex flex-col rounded-xl border ${plan.highlighted ? 'border-brand bg-white/10' : 'border-white/10 bg-white/5'} p-6`}>
      <div className="text-sm font-semibold text-white/70">{plan.name}</div>
      <div className="mt-2 text-3xl font-extrabold">{plan.price}<span className="text-base font-normal text-white/60">/mois</span></div>
      <ul className="mt-4 space-y-2 text-sm">
        {plan.features.map((f, i) => <li key={i} className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand" /> {f}</li>)}
      </ul>
      <div className="mt-6">
        <Button as="link" href="/contact" variant={plan.highlighted ? 'secondary' : 'primary'} className="w-full">Choisir</Button>
      </div>
    </div>
  )
}
