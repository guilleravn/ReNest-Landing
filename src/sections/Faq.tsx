import { ChevronDown } from 'lucide-react'
import { Section, SectionHeading } from '@/components/Section'
import { useI18n } from '@/i18n/I18nProvider'

export function Faq() {
  const { t } = useI18n()
  return (
    <Section id="preguntas">
      <SectionHeading overline={t.faq.overline} title={t.faq.title} />
      <div className="mx-auto max-w-3xl divide-y divide-border border-y border-border">
        {t.faq.items.map((f) => (
          <details key={f.q} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-semibold md:text-lg [&::-webkit-details-marker]:hidden">
              {f.q}
              <ChevronDown className="size-5 shrink-0 text-text-subtle transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <p className="pb-5 pr-9 leading-relaxed text-text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
