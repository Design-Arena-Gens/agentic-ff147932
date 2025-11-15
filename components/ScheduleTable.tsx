type Entry = {
  day: string
  time: string
  title: string
}

export default function ScheduleTable({ entries }: { entries: Entry[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-white/10">
        <thead>
          <tr className="text-left text-sm text-white/60">
            <th className="px-3 py-2">Jour</th>
            <th className="px-3 py-2">Heure</th>
            <th className="px-3 py-2">Cours</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {entries.map((e, i) => (
            <tr key={i} className="text-sm">
              <td className="px-3 py-3">{e.day}</td>
              <td className="px-3 py-3">{e.time}</td>
              <td className="px-3 py-3">{e.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
