import { Catalog } from '@/sections/Catalog'
import { Cities } from '@/sections/Cities'
import { Faq } from '@/sections/Faq'
import { FinalCta } from '@/sections/FinalCta'
import { Footer } from '@/sections/Footer'
import { Header } from '@/sections/Header'
import { Hero } from '@/sections/Hero'
import { HowItWorks } from '@/sections/HowItWorks'
import { Problem } from '@/sections/Problem'
import { Trust } from '@/sections/Trust'

export default function App() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-background focus:px-4 focus:py-2 focus:shadow-menu"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <Cities />
        <Problem />
        <HowItWorks />
        <Trust />
        <Catalog />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
