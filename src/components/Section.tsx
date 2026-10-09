import type { ReactNode } from 'react'
import { cn } from '@/lib'

export function Section({ id, className, children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={cn('px-4 py-20 sm:px-6 md:py-28', className)}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}

export function SectionHeading({
  overline,
  title,
  intro,
  align = 'center',
}: {
  overline: string
  title: ReactNode
  intro?: ReactNode
  align?: 'center' | 'left'
}) {
  return (
    <div className={cn('mb-12 max-w-2xl md:mb-16', align === 'center' && 'mx-auto text-center')}>
      <p className="text-overline text-green-strong">{overline}</p>
      <h2 className="mt-3 text-3xl leading-tight md:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-lg text-text-muted">{intro}</p>}
    </div>
  )
}
