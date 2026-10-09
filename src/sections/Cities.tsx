import { MapPin } from 'lucide-react'

const cities = [
  { name: 'Cochabamba', country: 'Bolivia' },
  { name: 'Arequipa', country: 'Perú' },
  { name: 'San Salvador', country: 'El Salvador' },
  { name: 'Utah', country: 'Estados Unidos' },
]

export function Cities() {
  return (
    <section aria-label="Ciudades" className="border-y border-border bg-surface px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 md:flex-row md:justify-between">
        <p className="text-overline text-text-subtle">Ya disponible en</p>
        <ul className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4 md:w-auto md:gap-10">
          {cities.map((c) => (
            <li key={c.name} className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0 text-green-strong" aria-hidden="true" />
              <span>
                <span className="block text-sm font-semibold leading-tight">{c.name}</span>
                <span className="block text-xs text-text-subtle">{c.country}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
