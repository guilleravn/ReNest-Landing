import { ChevronDown } from 'lucide-react'
import { Section, SectionHeading } from '@/components/Section'

const faqs = [
  {
    q: '¿Cómo se paga?',
    a: 'En persona, al momento del encuentro. ReNest no procesa pagos ni cobra comisiones: el acuerdo es entre comprador y vendedor.',
  },
  {
    q: '¿Necesito una cuenta para ver los productos?',
    a: 'No. El catálogo, la búsqueda y el detalle de cada producto son públicos. Necesitas cuenta para reservar, publicar, ver el WhatsApp del vendedor o calificar.',
  },
  {
    q: '¿Qué pasa si dos personas quieren el mismo artículo?',
    a: 'Se lo lleva quien confirme primero. Apenas alguien reserva, el artículo sale del catálogo y nadie más puede reservarlo.',
  },
  {
    q: '¿Puedo cancelar una reserva?',
    a: 'Por ahora no. Por eso la reserva incluye el punto y el horario de recogida: confirmas solo cuando ya sabes que puedes ir.',
  },
  {
    q: '¿Cómo acordamos el día exacto?',
    a: 'El vendedor ofrece un lugar, unos días y una franja horaria. Al reservar eliges uno de esos puntos, y el día exacto lo coordinan por WhatsApp.',
  },
  {
    q: '¿Cómo obtengo la insignia de vendedor verificado?',
    a: 'La otorga el equipo de ReNest de forma manual. No se solicita desde la app.',
  },
  {
    q: '¿En qué ciudades funciona?',
    a: 'Cochabamba (Bolivia), Arequipa (Perú), San Salvador (El Salvador) y Utah (Estados Unidos). Los precios se muestran con un “$” genérico y se pagan en la moneda local que acuerden.',
  },
]

export function Faq() {
  return (
    <Section id="preguntas">
      <SectionHeading overline="Preguntas frecuentes" title="Lo que todos preguntan antes de su primera reserva" />
      <div className="mx-auto max-w-3xl divide-y divide-border border-y border-border">
        {faqs.map((f) => (
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
