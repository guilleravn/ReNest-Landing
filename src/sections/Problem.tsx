import { CalendarCheck, MessagesSquare, Ghost, Zap, MapPinned, ShieldQuestion } from 'lucide-react'
import { Section, SectionHeading } from '@/components/Section'
import { useI18n } from '@/i18n/I18nProvider'

const pairs = [
  { key: 'schedule', beforeIcon: MessagesSquare, afterIcon: CalendarCheck },
  { key: 'double', beforeIcon: Ghost, afterIcon: Zap },
  { key: 'place', beforeIcon: ShieldQuestion, afterIcon: MapPinned },
] as const

export function Problem() {
  const { t } = useI18n()
  const p = t.problem
  return (
    <Section>
      <SectionHeading overline={p.overline} title={p.title} intro={p.intro} />
      <div className="grid gap-4 md:grid-cols-3">
        {pairs.map(({ key, beforeIcon: BeforeIcon, afterIcon: AfterIcon }) => (
          <div key={key} className="flex flex-col overflow-hidden rounded-2xl border border-border">
            <div className="flex-1 bg-surface p-6">
              <p className="text-overline text-text-subtle">{p.before}</p>
              <BeforeIcon className="mt-4 size-6 text-text-subtle" aria-hidden="true" />
              <p className="mt-3 text-text-muted">{p.pairs[key].before}</p>
            </div>
            <div className="flex-1 bg-green-surface p-6">
              <p className="text-overline text-green-strong">{p.after}</p>
              <AfterIcon className="mt-4 size-6 text-green-strong" aria-hidden="true" />
              <p className="mt-3 font-medium">{p.pairs[key].after}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
