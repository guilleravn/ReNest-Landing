import { BadgeCheck, ClipboardCheck, EyeOff, MapPinned, MessageCircle, Star, Zap, type LucideIcon } from 'lucide-react'
import { Section, SectionHeading } from '@/components/Section'
import { cn } from '@/lib'

type Feature = { icon: LucideIcon; title: string; text: string; tone: string }

const features: Feature[] = [
  {
    icon: MapPinned,
    title: 'Solo lugares públicos',
    text: 'Los puntos de recogida son plazas, cafés o centros comerciales. Nunca una dirección particular.',
    tone: 'bg-protected-surface text-protected',
  },
  {
    icon: BadgeCheck,
    title: 'Vendedores verificados',
    text: 'El equipo de ReNest verifica a mano a algunos vendedores, y lo vas a ver en cada publicación.',
    tone: 'bg-verified-surface text-verified',
  },
  {
    icon: Zap,
    title: 'Sin dobles reservas',
    text: 'Si dos personas confirman a la vez, solo una se lo lleva. La otra lo sabe al instante.',
    tone: 'bg-amber-surface text-amber-strong',
  },
  {
    icon: ClipboardCheck,
    title: 'Checklist de recepción',
    text: '¿Coincide con las fotos? ¿Funciona? ¿Trae todo? Lo confirmas al recibir, y puedes reportar lo que quieras.',
    tone: 'bg-green-surface text-green-strong',
  },
  {
    icon: Star,
    title: 'Calificaciones reales',
    text: 'Solo quien compró y recibió el artículo puede calificar, una sola vez. Sin reseñas infladas.',
    tone: 'bg-amber-surface text-amber-strong',
  },
  {
    icon: EyeOff,
    title: 'Tu número, protegido',
    text: 'El WhatsApp del vendedor solo lo ven usuarios registrados. El tuyo, solo el vendedor de lo que reservaste.',
    tone: 'bg-blue-surface text-blue-strong',
  },
]

export function Trust() {
  return (
    <Section id="confianza">
      <SectionHeading
        overline="Confianza"
        title="Diseñado para que ambos lleguen tranquilos al encuentro"
        intro="No movemos tu dinero: pagas en persona, cuando ves el producto. Lo que sí hacemos es poner reglas claras para todos."
      />
      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title}>
            <span className={cn('flex size-11 items-center justify-center rounded-xl', f.tone)}>
              <f.icon className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-sans text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 leading-relaxed text-text-muted">{f.text}</p>
          </div>
        ))}
      </div>

      <Lifecycle />
    </Section>
  )
}

function Lifecycle() {
  return (
    <div className="mt-20 rounded-3xl border border-border bg-surface p-6 md:p-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-overline text-green-strong">Cada quien confirma lo suyo</p>
          <h3 className="mt-3 text-3xl leading-tight">El vendedor confirma la entrega. Tú, la recepción.</h3>
          <p className="mt-4 text-text-muted">
            Ninguno cierra la operación por el otro. Aunque el vendedor ya haya marcado la entrega, tú sigues pudiendo
            revisar el artículo, reportar algo y calificar.
          </p>
        </div>
        <div className="grid gap-6">
          <Track
            who="Vendedor"
            stages={['Activo', 'En proceso', 'Completado']}
            events={['Alguien reserva', 'Confirma la entrega']}
          />
          <Track who="Comprador" stages={['Agendado', 'Completado']} events={['Confirma la recepción']} />
          <p className="flex items-center gap-2 text-sm text-text-muted">
            <MessageCircle className="size-4 text-green-strong" aria-hidden="true" />
            Todo lo que haya que hablar, se habla por WhatsApp.
          </p>
        </div>
      </div>
    </div>
  )
}

function Track({ who, stages, events }: { who: string; stages: string[]; events: string[] }) {
  return (
    <div>
      <p className="mb-3 text-overline text-text-subtle">{who}</p>
      <ol className="flex flex-col gap-2 sm:flex-row sm:items-center">
        {stages.map((stage, i) => (
          <li key={stage} className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <span
              className={cn(
                'inline-flex w-fit items-center rounded-full px-3 py-1.5 text-sm font-semibold',
                i === stages.length - 1 ? 'bg-green-strong text-text-inverse' : 'border border-border-strong bg-background',
              )}
            >
              {stage}
            </span>
            {events[i] && (
              <span className="flex items-center gap-2 pl-3 text-xs text-text-subtle sm:pl-0">
                <span className="hidden h-px w-4 bg-border-strong sm:block" aria-hidden="true" />
                <span className="sm:hidden" aria-hidden="true">↓</span>
                {events[i]}
                <span className="hidden sm:inline" aria-hidden="true">→</span>
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}
