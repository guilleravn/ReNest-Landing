import { MapPin } from 'lucide-react'
import { useI18n } from '@/i18n/I18nProvider'

const cities = [
  { name: 'Cochabamba', country: 'BO' },
  { name: 'Arequipa', country: 'PE' },
  { name: 'San Salvador', country: 'SV' },
  { name: 'Utah', country: 'US' },
] as const

export function Cities() {
  const { t } = useI18n()
  return (
    <section aria-label={t.cities.label} className="border-y border-border bg-surface px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 md:flex-row md:justify-between">
        <p className="text-overline text-text-subtle">{t.cities.label}</p>
        <ul className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4 md:w-auto md:gap-10">
          {cities.map((c) => (
            <li key={c.name} className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0 text-green-strong" aria-hidden="true" />
              <span>
                <span className="block text-sm font-semibold leading-tight">{c.name}</span>
                <span className="block text-xs text-text-subtle">{t.cities.countries[c.country]}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
