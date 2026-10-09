import { useState, type KeyboardEvent } from 'react'
import {
  Bell,
  Camera,
  ClipboardCheck,
  Clock,
  Handshake,
  Search,
  Star,
  CalendarCheck,
  type LucideIcon,
} from 'lucide-react'
import { ButtonLink } from '@/components/Button'
import { Section, SectionHeading } from '@/components/Section'
import { appLink, cn } from '@/lib'

type Step = { icon: LucideIcon; title: string; text: string }

const flows: Record<'buyer' | 'seller', { label: string; steps: Step[]; cta: { href: string; label: string } }> = {
  buyer: {
    label: 'Quiero comprar',
    steps: [
      {
        icon: Search,
        title: 'Explora',
        text: 'Busca por nombre o filtra por Muebles, Electrónica y Hogar. No necesitas cuenta para mirar.',
      },
      {
        icon: CalendarCheck,
        title: 'Reserva y agenda',
        text: 'Elige uno de los puntos y horarios del vendedor y confirma. La reserva y la cita quedan listas a la vez.',
      },
      {
        icon: Handshake,
        title: 'Encuéntrense',
        text: 'Ves el lugar, los días, el link a Google Maps y el WhatsApp del vendedor para acordar el día exacto.',
      },
      {
        icon: ClipboardCheck,
        title: 'Revisa y califica',
        text: 'Con el artículo en mano, confirma la recepción con un checklist rápido y deja de 1 a 5 estrellas.',
      },
    ],
    cta: { href: '/feed', label: 'Ver productos' },
  },
  seller: {
    label: 'Quiero vender',
    steps: [
      {
        icon: Camera,
        title: 'Publica',
        text: 'Sube de 1 a 3 fotos, título, precio y estado: como nuevo, poco uso o muy usado. Sale al instante.',
      },
      {
        icon: Clock,
        title: 'Define tus horarios',
        text: 'Agrega de 1 a 3 puntos de recogida: un lugar público, los días y una franja horaria que te acomode.',
      },
      {
        icon: Bell,
        title: 'Recibe la reserva',
        text: 'Cuando alguien reserva, el artículo sale del catálogo y ves quién es, su WhatsApp y el punto elegido.',
      },
      {
        icon: Star,
        title: 'Entrega y suma reputación',
        text: 'Confirma la entrega y la venta queda registrada. Cada calificación construye tu reputación.',
      },
    ],
    cta: { href: '/listings/new', label: 'Publicar un artículo' },
  },
}

type Tab = keyof typeof flows
const tabs: Tab[] = ['buyer', 'seller']

export function HowItWorks() {
  const [active, setActive] = useState<Tab>('buyer')
  const flow = flows[active]

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    const next = tabs[(tabs.indexOf(active) + 1) % tabs.length]
    setActive(next)
    document.getElementById(`tab-${next}`)?.focus()
  }

  return (
    <Section id="como-funciona" className="bg-surface">
      <SectionHeading
        overline="Cómo funciona"
        title="Cuatro pasos, de la foto a la entrega"
        intro="Una misma cuenta sirve para comprar y vender. Eres vendedor en tus publicaciones y comprador en tus reservas."
      />

      <div role="tablist" aria-label="Elige tu rol" className="mx-auto mb-12 flex w-fit rounded-full border border-border bg-background p-1">
        {tabs.map((t) => (
          <button
            key={t}
            id={`tab-${t}`}
            role="tab"
            type="button"
            aria-selected={active === t}
            aria-controls="how-panel"
            tabIndex={active === t ? 0 : -1}
            onClick={() => setActive(t)}
            onKeyDown={onKeyDown}
            className={cn(
              'rounded-full px-5 py-2 text-sm font-semibold transition-colors',
              active === t ? 'bg-green-strong text-text-inverse' : 'text-text-muted hover:text-foreground',
            )}
          >
            {flows[t].label}
          </button>
        ))}
      </div>

      <div id="how-panel" role="tabpanel" aria-labelledby={`tab-${active}`}>
        <ol key={active} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {flow.steps.map((s, i) => (
            <li
              key={s.title}
              className="relative animate-fade-up rounded-2xl border border-border bg-background p-6 shadow-card"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl bg-green-surface text-green-strong">
                  <s.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-heading text-4xl text-border-strong" aria-hidden="true">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-sans text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center">
          <ButtonLink href={appLink(flow.cta.href)} size="lg">
            {flow.cta.label}
          </ButtonLink>
        </div>
      </div>
    </Section>
  )
}
