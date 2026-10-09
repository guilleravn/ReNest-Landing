import type { ReactNode } from 'react'
import { ArrowRight, BadgeCheck, CalendarClock, CircleCheck, MapPin, MessageCircle, ShieldCheck, Sofa, Star, Wallet } from 'lucide-react'
import { ButtonLink } from '@/components/Button'
import { useI18n } from '@/i18n/I18nProvider'
import { appLink, cn } from '@/lib'

export function Hero() {
  const { t } = useI18n()
  const h = t.hero
  return (
    <section id="inicio" className="relative overflow-hidden px-4 pb-20 pt-10 sm:px-6 md:pb-28 md:pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full bg-green-surface blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-overline text-green-strong">
            <span className="size-1.5 rounded-full bg-green" aria-hidden="true" />
            {h.badge}
          </p>
          <h1 className="mt-6 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            {h.titleA} <span className="block text-green-strong">{h.titleB}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-text-muted md:text-xl">
            {h.leadBefore}
            <strong className="font-semibold text-foreground">{h.leadStrong}</strong>
            {h.leadAfter}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={appLink('/feed')} size="lg">
              {h.explore}
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={appLink('/listings/new')} variant="outline" size="lg">
              {h.sell}
            </ButtonLink>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-muted">
            {h.perks.map((perk) => (
              <li key={perk} className="inline-flex items-center gap-1.5">
                <CircleCheck className="size-4 text-green-strong" aria-hidden="true" />
                {perk}
              </li>
            ))}
          </ul>
        </div>

        <HeroPhone />
      </div>
    </section>
  )
}

function HeroPhone() {
  const { t, formatPrice } = useI18n()
  const p = t.hero.phone
  return (
    <div className="relative mx-auto w-full max-w-[22rem] animate-fade-up [animation-delay:150ms]">
      <div className="animate-float rounded-[2.5rem] border-[10px] border-foreground bg-background shadow-float">
        <div className="overflow-hidden rounded-[1.75rem]">
          <div className="flex flex-col items-center bg-green-strong px-5 pb-6 pt-8 text-center text-text-inverse">
            <span className="inline-flex size-12 items-center justify-center rounded-full bg-background/15">
              <CircleCheck className="size-7" aria-hidden="true" />
            </span>
            <p className="mt-3 font-heading text-2xl">{p.confirmed}</p>
            <p className="mt-1 text-sm text-green-on-dark">{p.confirmedSub}</p>
          </div>

          <div className="space-y-3 bg-surface p-4">
            <div className="flex items-center gap-3 rounded-xl border border-border bg-background p-3">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-amber-surface text-amber-strong">
                <Sofa className="size-7" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{p.item}</p>
                <p className="price-text text-base">{formatPrice(85000)}</p>
              </div>
            </div>

            <div className="space-y-2.5 rounded-xl border border-border bg-background p-3 text-sm">
              <p className="text-overline text-text-subtle">{p.pickup}</p>
              <p className="flex gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-green-strong" aria-hidden="true" />
                {p.place}
              </p>
              <p className="flex gap-2">
                <CalendarClock className="mt-0.5 size-4 shrink-0 text-green-strong" aria-hidden="true" />
                {p.when}
              </p>
              <p className="pl-6 text-xs font-semibold text-blue-strong underline underline-offset-2">{p.maps}</p>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-border bg-background p-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-green-surface text-sm font-bold text-green-strong">
                LG
              </span>
              <div className="min-w-0 flex-1 text-sm">
                <p className="flex items-center gap-1 font-semibold">
                  Laura Gómez <BadgeCheck className="size-4 text-verified" aria-label={p.verified} />
                </p>
                <p className="flex items-center gap-1 text-xs text-text-muted">
                  <Star className="size-3 fill-amber text-amber" aria-hidden="true" /> {p.rating}
                </p>
              </div>
            </div>

            <div className="flex h-11 items-center justify-center gap-2 rounded-lg bg-green-strong text-sm font-semibold text-text-inverse">
              <MessageCircle className="size-4" aria-hidden="true" />
              {p.whatsapp}
            </div>
          </div>
        </div>
      </div>

      <FloatingChip className="-left-14 top-10" icon={<ShieldCheck className="size-4 text-protected" aria-hidden="true" />}>
        {t.hero.chips.publicPlace}
      </FloatingChip>
      <FloatingChip className="-right-12 bottom-28" icon={<Wallet className="size-4 text-amber-strong" aria-hidden="true" />}>
        {t.hero.chips.payInPerson}
      </FloatingChip>
    </div>
  )
}

function FloatingChip({ className, icon, children }: { className: string; icon: ReactNode; children: ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'absolute hidden items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-sm font-semibold shadow-menu sm:flex',
        className,
      )}
    >
      {icon}
      {children}
    </div>
  )
}
