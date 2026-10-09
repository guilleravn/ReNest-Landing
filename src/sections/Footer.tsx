import { Logo } from '@/components/Logo'
import { useI18n } from '@/i18n/I18nProvider'
import { appLink } from '@/lib'

export function Footer() {
  const { t } = useI18n()
  const f = t.footer
  const columns = [
    {
      title: f.product,
      links: [
        { href: '#como-funciona', label: f.links.how },
        { href: '#confianza', label: f.links.trust },
        { href: '#preguntas', label: f.links.faq },
      ],
    },
    {
      title: f.app,
      links: [
        { href: appLink('/feed'), label: f.links.explore },
        { href: appLink('/listings/new'), label: f.links.publish },
        { href: appLink('/register'), label: f.links.register },
        { href: appLink('/login'), label: f.links.login },
      ],
    },
  ]

  return (
    <footer className="border-t border-border bg-surface px-4 py-12 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-text-muted">{f.tagline}</p>
        </div>
        {columns.map((c) => (
          <nav key={c.title} aria-label={c.title}>
            <p className="text-overline text-text-subtle">{c.title}</p>
            <ul className="mt-4 space-y-2.5">
              {c.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-text-muted transition-colors hover:text-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-border pt-6 text-xs text-text-subtle sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} ReNest</p>
        <p>Cochabamba · Arequipa · San Salvador · Utah</p>
      </div>
    </footer>
  )
}
