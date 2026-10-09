import { Languages } from 'lucide-react'
import { useI18n } from '@/i18n/I18nProvider'
import type { Lang } from '@/i18n/messages'
import { cn } from '@/lib'

const options: Array<{ lang: Lang; short: string; name: string }> = [
  { lang: 'es', short: 'ES', name: 'Español' },
  { lang: 'en', short: 'EN', name: 'English' },
]

export function LanguageSwitch({ className }: { className?: string }) {
  const { lang, setLang, t } = useI18n()
  return (
    <div
      role="group"
      aria-label={t.header.language}
      className={cn('inline-flex items-center gap-1 rounded-full border border-border bg-background p-1', className)}
    >
      <Languages className="ml-1.5 size-4 text-text-subtle" aria-hidden="true" />
      {options.map((o) => (
        <button
          key={o.lang}
          type="button"
          lang={o.lang}
          aria-pressed={lang === o.lang}
          aria-label={o.name}
          title={o.name}
          onClick={() => setLang(o.lang)}
          className={cn(
            'rounded-full px-2.5 py-1 text-xs font-bold transition-colors',
            lang === o.lang ? 'bg-green-strong text-text-inverse' : 'text-text-muted hover:text-foreground',
          )}
        >
          {o.short}
        </button>
      ))}
    </div>
  )
}
