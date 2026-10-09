import { BadgeCheck, ClipboardCheck, EyeOff, MapPinned, MessageCircle, Star, Zap, type LucideIcon } from 'lucide-react'
import { Section, SectionHeading } from '@/components/Section'
import { useI18n } from '@/i18n/I18nProvider'
import type { Messages } from '@/i18n/messages'
import { cn } from '@/lib'

const features: Array<{ key: keyof Messages['trust']['features']; icon: LucideIcon; tone: string }> = [
  { key: 'places', icon: MapPinned, tone: 'bg-protected-surface text-protected' },
  { key: 'verified', icon: BadgeCheck, tone: 'bg-verified-surface text-verified' },
  { key: 'noDouble', icon: Zap, tone: 'bg-amber-surface text-amber-strong' },
  { key: 'checklist', icon: ClipboardCheck, tone: 'bg-green-surface text-green-strong' },
  { key: 'ratings', icon: Star, tone: 'bg-amber-surface text-amber-strong' },
  { key: 'phone', icon: EyeOff, tone: 'bg-blue-surface text-blue-strong' },
]

export function Trust() {
  const { t } = useI18n()
  return (
    <Section id="confianza">
      <SectionHeading overline={t.trust.overline} title={t.trust.title} intro={t.trust.intro} />
      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.key}>
            <span className={cn('flex size-11 items-center justify-center rounded-xl', f.tone)}>
              <f.icon className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-sans text-lg font-semibold">{t.trust.features[f.key].title}</h3>
            <p className="mt-2 leading-relaxed text-text-muted">{t.trust.features[f.key].text}</p>
          </div>
        ))}
      </div>

      <Lifecycle />
    </Section>
  )
}

function Lifecycle() {
  const { t } = useI18n()
  const l = t.trust.lifecycle
  return (
    <div className="mt-20 rounded-3xl border border-border bg-surface p-6 md:p-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-overline text-green-strong">{l.overline}</p>
          <h3 className="mt-3 text-3xl leading-tight">{l.title}</h3>
          <p className="mt-4 text-text-muted">{l.text}</p>
        </div>
        <div className="grid gap-6">
          <Track who={l.seller} stages={l.sellerStages} events={l.sellerEvents} />
          <Track who={l.buyer} stages={l.buyerStages} events={l.buyerEvents} />
          <p className="flex items-center gap-2 text-sm text-text-muted">
            <MessageCircle className="size-4 text-green-strong" aria-hidden="true" />
            {l.whatsapp}
          </p>
        </div>
      </div>
    </div>
  )
}

function Track({ who, stages, events }: { who: string; stages: string[]; events: string[] }) {
  return (
    <div>
      <p className="mb-3 text-overline text-text-subtle">{who}</p>
      <ol className="flex flex-col gap-2 sm:flex-row sm:items-center">
        {stages.map((stage, i) => (
          <li key={stage} className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <span
              className={cn(
                'inline-flex w-fit items-center rounded-full px-3 py-1.5 text-sm font-semibold',
                i === stages.length - 1 ? 'bg-green-strong text-text-inverse' : 'border border-border-strong bg-background',
              )}
            >
              {stage}
            </span>
            {events[i] && (
              <span className="flex items-center gap-2 pl-3 text-xs text-text-subtle sm:pl-0">
                <span className="hidden h-px w-4 bg-border-strong sm:block" aria-hidden="true" />
                <span className="sm:hidden" aria-hidden="true">↓</span>
                {events[i]}
                <span className="hidden sm:inline" aria-hidden="true">→</span>
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}
