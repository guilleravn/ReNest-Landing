import { BadgeCheck, MapPin } from 'lucide-react'
import { useI18n } from '@/i18n/I18nProvider'
import { cn } from '@/lib'
import { tintClass, type SampleListing } from './listings'

export function VerifiedBadge() {
  const { t } = useI18n()
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-verified-surface px-2 py-0.5 text-[0.65rem] font-semibold text-verified">
      <BadgeCheck className="size-3" aria-hidden="true" />
      {t.catalog.verified}
    </span>
  )
}

export function ListingCard({ listing, className }: { listing: SampleListing; className?: string }) {
  const { t, formatPrice } = useI18n()
  const Icon = listing.icon
  return (
    <article className={cn('overflow-hidden rounded-xl border border-border bg-background shadow-card', className)}>
      <div className={cn('flex aspect-[4/3] items-center justify-center', tintClass[listing.tint])}>
        <Icon className="size-14 opacity-80" strokeWidth={1.25} aria-hidden="true" />
      </div>
      <div className="space-y-1.5 p-3">
        <p className="text-overline text-text-subtle">{t.catalog.categories[listing.category]}</p>
        <h3 className="line-clamp-2 min-h-[2.5em] font-sans text-sm font-semibold leading-tight">
          {t.catalog.titles[listing.id]}
        </h3>
        <p className="price-text text-lg">{formatPrice(listing.priceCents)}</p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-text-muted">
          <span>{t.catalog.conditions[listing.condition]}</span>
          <span className="inline-flex items-center gap-0.5">
            <MapPin className="size-3" aria-hidden="true" />
            {listing.city}
          </span>
        </div>
        {listing.verified && <VerifiedBadge />}
      </div>
    </article>
  )
}
