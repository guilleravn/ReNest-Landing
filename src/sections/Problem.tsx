import { CalendarCheck, MessagesSquare, Ghost, Zap, MapPinned, ShieldQuestion } from 'lucide-react'
import { Section, SectionHeading } from '@/components/Section'

const pairs = [
  {
    before: { icon: MessagesSquare, text: '“¿Sigue disponible?” y veinte mensajes para cuadrar un horario.' },
    after: { icon: CalendarCheck, text: 'El vendedor publica sus horarios. Tú eliges uno al reservar.' },
  },
  {
    before: { icon: Ghost, text: 'Dos personas creen que lo apartaron y al final nadie sabe de quién es.' },
    after: { icon: Zap, text: 'El primero en confirmar se lo lleva. Una reserva, un comprador.' },
  },
  {
    before: { icon: ShieldQuestion, text: '“Pásame tu dirección”: encuentros en casas de desconocidos.' },
    after: { icon: MapPinned, text: 'Siempre en un lugar público: una plaza, un café, un centro comercial.' },
  },
]

export function Problem() {
  return (
    <Section>
      <SectionHeading
        overline="Por qué ReNest"
        title="Comprar usado no debería ser una cadena de mensajes"
        intro="Los grupos de compra y venta funcionan, hasta que hay que coordinar. ReNest convierte esa conversación en una reserva clara."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {pairs.map(({ before, after }) => (
          <div key={before.text} className="flex flex-col overflow-hidden rounded-2xl border border-border">
            <div className="flex-1 bg-surface p-6">
              <p className="text-overline text-text-subtle">Antes</p>
              <before.icon className="mt-4 size-6 text-text-subtle" aria-hidden="true" />
              <p className="mt-3 text-text-muted">{before.text}</p>
            </div>
            <div className="flex-1 bg-green-surface p-6">
              <p className="text-overline text-green-strong">Con ReNest</p>
              <after.icon className="mt-4 size-6 text-green-strong" aria-hidden="true" />
              <p className="mt-3 font-medium">{after.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
