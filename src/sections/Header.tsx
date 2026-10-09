import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ButtonLink } from '@/components/Button'
import { LanguageSwitch } from '@/components/LanguageSwitch'
import { Logo } from '@/components/Logo'
import { useI18n } from '@/i18n/I18nProvider'
import { appLink, cn } from '@/lib'

export function Header() {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const links = [
    { href: '#como-funciona', label: t.header.nav.how },
    { href: '#confianza', label: t.header.nav.trust },
    { href: '#catalogo', label: t.header.nav.catalog },
    { href: '#preguntas', label: t.header.nav.faq },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b bg-background/90 backdrop-blur transition-colors',
        scrolled || open ? 'border-border' : 'border-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#inicio" aria-label={t.header.home}>
          <Logo className="h-8" />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-text-muted transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitch />
          <ButtonLink href={appLink('/login')} variant="outline">
            {t.header.login}
          </ButtonLink>
          <ButtonLink href={appLink('/feed')}>{t.header.explore}</ButtonLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitch />
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg text-foreground hover:bg-surface-sunken"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.header.closeMenu : t.header.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Principal" className="border-t border-border px-4 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-base font-medium">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid gap-2">
            <ButtonLink href={appLink('/feed')} size="lg">
              {t.header.explore}
            </ButtonLink>
            <ButtonLink href={appLink('/login')} variant="outline" size="lg">
              {t.header.login}
            </ButtonLink>
          </div>
        </nav>
      )}
    </header>
  )
}
