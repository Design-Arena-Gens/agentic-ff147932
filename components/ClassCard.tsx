import clsx from 'clsx'

export type GymClass = {
  title: string
  level: 'D?butant' | 'Interm?diaire' | 'Avanc?'
  durationMin: number
  description: string
}

export default function ClassCard({ classInfo, className }: { classInfo: GymClass; className?: string }) {
  return (
    <div className={clsx('rounded-lg border border-white/10 bg-white/5 p-5', className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{classInfo.title}</h3>
        <span className="rounded bg-brand/20 px-2 py-1 text-xs text-brand">{classInfo.level}</span>
      </div>
      <p className="mt-2 text-sm text-white/70">{classInfo.description}</p>
      <div className="mt-4 text-xs text-white/60">{classInfo.durationMin} minutes</div>
    </div>
  )
}
