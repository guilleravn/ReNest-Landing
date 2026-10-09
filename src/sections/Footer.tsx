import { Logo } from '@/components/Logo'
import { appLink } from '@/lib'

const columns = [
  {
    title: 'Producto',
    links: [
      { href: '#como-funciona', label: 'Cómo funciona' },
      { href: '#confianza', label: 'Confianza' },
      { href: '#preguntas', label: 'Preguntas frecuentes' },
    ],
  },
  {
    title: 'App',
    links: [
      { href: appLink('/feed'), label: 'Explorar productos' },
      { href: appLink('/listings/new'), label: 'Publicar un artículo' },
      { href: appLink('/register'), label: 'Crear cuenta' },
      { href: appLink('/login'), label: 'Ingresar' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface px-4 py-12 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-text-muted">
            El marketplace de segunda mano donde reservas y agendas la recogida en un solo paso.
          </p>
        </div>
        {columns.map((c) => (
          <nav key={c.title} aria-label={c.title}>
            <p className="text-overline text-text-subtle">{c.title}</p>
            <ul className="mt-4 space-y-2.5">
              {c.links.map((l) => (
                <li key={l.label}>
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
