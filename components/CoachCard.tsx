export type Coach = {
  name: string
  specialty: string
  bio: string
}

export default function CoachCard({ coach }: { coach: Coach }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-5">
      <div className="h-28 w-28 rounded-full bg-white/10" />
      <h3 className="mt-4 text-lg font-semibold">{coach.name}</h3>
      <div className="text-sm text-brand">{coach.specialty}</div>
      <p className="mt-2 text-sm text-white/70">{coach.bio}</p>
    </div>
  )
}
