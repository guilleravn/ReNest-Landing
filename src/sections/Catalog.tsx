import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/Button'
import { ListingCard } from '@/components/ListingCard'
import { sampleListings, type Category } from '@/components/listings'
import { Section, SectionHeading } from '@/components/Section'
import { appLink, cn } from '@/lib'

const filters: Array<Category | 'Todo'> = ['Todo', 'Muebles', 'Electrónica', 'Hogar']

export function Catalog() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('Todo')
  const visible = sampleListings.filter((l) => filter === 'Todo' || l.category === filter)

  return (
    <Section id="catalogo" className="bg-surface">
      <SectionHeading
        overline="Catálogo"
        title="Muebles, electrónica y cosas para la casa"
        intro="Cada publicación muestra precio, estado, ciudad y si el vendedor está verificado, para que decidas antes de escribir."
      />

      <div className="mb-8 flex flex-wrap justify-center gap-2" aria-label="Filtrar por categoría">
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
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {visible.map((l) => (
          <ListingCard key={l.title} listing={l} className="animate-fade-up" />
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-text-subtle">Ejemplos de publicaciones. Los precios los pone cada vendedor y se pagan en persona.</p>

      <div className="mt-8 text-center">
        <ButtonLink href={appLink('/feed')} variant="outline" size="lg">
          Ver todo el catálogo
          <ArrowRight className="size-4" aria-hidden="true" />
        </ButtonLink>
      </div>
    </Section>
  )
}
