import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ButtonLink } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { appLink, cn } from '@/lib'

const links = [
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#confianza', label: 'Confianza' },
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#preguntas', label: 'Preguntas' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" aria-label="ReNest, ir al inicio">
          <Logo className="h-8" />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-text-muted transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ButtonLink href={appLink('/login')} variant="outline">
            Ingresar
          </ButtonLink>
          <ButtonLink href={appLink('/feed')}>Explorar productos</ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg text-foreground hover:bg-surface-sunken md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Principal" className="border-t border-border px-4 pb-6 pt-2 md:hidden">
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
              Explorar productos
            </ButtonLink>
            <ButtonLink href={appLink('/login')} variant="outline" size="lg">
              Ingresar
            </ButtonLink>
          </div>
        </nav>
      )}
    </header>
  )
}
