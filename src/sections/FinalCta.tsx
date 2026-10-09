import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/Button'
import { NestMark } from '@/components/Logo'
import { appLink } from '@/lib'

export function FinalCta() {
  return (
    <section className="px-4 pb-20 sm:px-6 md:pb-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-green-active px-6 py-16 text-center text-text-inverse md:px-16 md:py-20">
        <NestMark className="pointer-events-none absolute -bottom-16 -right-10 size-72 text-green-hover" />
        <NestMark className="pointer-events-none absolute -left-12 -top-16 size-48 text-green-hover" />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-4xl leading-tight md:text-5xl">
            Lo que a ti ya no te sirve, a alguien le hace falta.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-green-on-dark">
            Crea tu cuenta en un minuto. Compra, vende o las dos cosas con la misma cuenta.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={appLink('/register')} variant="inverse" size="lg">
              Crear cuenta gratis
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={appLink('/feed')} variant="ghost-inverse" size="lg">
              Explorar productos
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
