import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/Button'
import { ListingCard } from '@/components/ListingCard'
import { sampleListings, type Category } from '@/components/listings'
import { Section, SectionHeading } from '@/components/Section'
import { useI18n } from '@/i18n/I18nProvider'
import { appLink, cn } from '@/lib'

const filters: Array<Category | 'ALL'> = ['ALL', 'FURNITURE', 'ELECTRONICS', 'HOME']

export function Catalog() {
  const { t } = useI18n()
  const c = t.catalog
  const [filter, setFilter] = useState<(typeof filters)[number]>('ALL')
  const visible = sampleListings.filter((l) => filter === 'ALL' || l.category === filter)

  return (
    <Section id="catalogo" className="bg-surface">
      <SectionHeading overline={c.overline} title={c.title} intro={c.intro} />

      <div className="mb-8 flex flex-wrap justify-center gap-2" role="group" aria-label={c.filterLabel}>
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={cn(
              'rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors',
              filter === f
                ? 'border-green-strong bg-green-strong text-text-inverse'
                : 'border-border-strong bg-background text-text-muted hover:text-foreground',
            )}
          >
            {f === 'ALL' ? c.all : c.categories[f]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {visible.map((l) => (
          <ListingCard key={l.id} listing={l} className="animate-fade-up" />
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-text-subtle">{c.disclaimer}</p>

      <div className="mt-8 text-center">
        <ButtonLink href={appLink('/feed')} variant="outline" size="lg">
          {c.seeAll}
          <ArrowRight className="size-4" aria-hidden="true" />
        </ButtonLink>
      </div>
    </Section>
  )
}
