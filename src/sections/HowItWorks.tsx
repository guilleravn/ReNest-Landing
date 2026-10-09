import { useState, type KeyboardEvent } from 'react'
import { Bell, Camera, ClipboardCheck, Clock, Handshake, Search, Star, CalendarCheck, type LucideIcon } from 'lucide-react'
import { ButtonLink } from '@/components/Button'
import { Section, SectionHeading } from '@/components/Section'
import { useI18n } from '@/i18n/I18nProvider'
import type { Messages } from '@/i18n/messages'
import { appLink, cn } from '@/lib'

type How = Messages['how']

const flows = {
  buyer: {
    href: '/feed',
    steps: [
      { key: 'explore', icon: Search },
      { key: 'reserve', icon: CalendarCheck },
      { key: 'meet', icon: Handshake },
      { key: 'review', icon: ClipboardCheck },
    ] satisfies Array<{ key: keyof How['buyer']['steps']; icon: LucideIcon }>,
  },
  seller: {
    href: '/listings/new',
    steps: [
      { key: 'publish', icon: Camera },
      { key: 'times', icon: Clock },
      { key: 'reserved', icon: Bell },
      { key: 'handover', icon: Star },
    ] satisfies Array<{ key: keyof How['seller']['steps']; icon: LucideIcon }>,
  },
}

type Tab = keyof typeof flows
const tabs: Tab[] = ['buyer', 'seller']

export function HowItWorks() {
  const { t } = useI18n()
  const [active, setActive] = useState<Tab>('buyer')
  const copy = t.how[active]
  const stepCopy: Record<string, { title: string; text: string }> = copy.steps

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    const next = tabs[(tabs.indexOf(active) + 1) % tabs.length]
    setActive(next)
    document.getElementById(`tab-${next}`)?.focus()
  }

  return (
    <Section id="como-funciona" className="bg-surface">
      <SectionHeading overline={t.how.overline} title={t.how.title} intro={t.how.intro} />

      <div role="tablist" aria-label={t.how.tablist} className="mx-auto mb-12 flex w-fit rounded-full border border-border bg-background p-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            id={`tab-${tab}`}
            role="tab"
            type="button"
            aria-selected={active === tab}
            aria-controls="how-panel"
            tabIndex={active === tab ? 0 : -1}
            onClick={() => setActive(tab)}
            onKeyDown={onKeyDown}
            className={cn(
              'rounded-full px-5 py-2 text-sm font-semibold transition-colors',
              active === tab ? 'bg-green-strong text-text-inverse' : 'text-text-muted hover:text-foreground',
            )}
          >
            {t.how[tab].label}
          </button>
        ))}
      </div>

      <div id="how-panel" role="tabpanel" aria-labelledby={`tab-${active}`}>
        <ol key={active} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {flows[active].steps.map((s, i) => (
            <li
              key={s.key}
              className="relative animate-fade-up rounded-2xl border border-border bg-background p-6 shadow-card"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl bg-green-surface text-green-strong">
                  <s.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-heading text-4xl text-border-strong" aria-hidden="true">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-sans text-lg font-semibold">{stepCopy[s.key].title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{stepCopy[s.key].text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center">
          <ButtonLink href={appLink(flows[active].href)} size="lg">
            {copy.cta}
          </ButtonLink>
        </div>
      </div>
    </Section>
  )
}
