import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { messages, type Lang, type Messages } from './messages'

const STORAGE_KEY = 'renest-landing-lang'

type I18n = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Messages
  formatPrice: (cents: number) => string
}

const I18nContext = createContext<I18n | null>(null)

/** Saved choice first, then the browser language; Spanish is the default. */
function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'es' || saved === 'en') return saved
  } catch {
    // Storage can be blocked (private mode); fall through to the browser language.
  }
  return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)
  const t = messages[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [lang, t])

  const value = useMemo<I18n>(() => {
    const numbers = new Intl.NumberFormat(t.numberLocale, { maximumFractionDigits: 0 })
    return {
      lang,
      t,
      setLang: (next) => {
        setLangState(next)
        try {
          localStorage.setItem(STORAGE_KEY, next)
        } catch {
          // Not persisting is fine; the choice still applies to this visit.
        }
      },
      // Prices arrive in cents; the app always shows a generic "$" (GEN-2).
      formatPrice: (cents) => `$${numbers.format(cents / 100)}`,
    }
  }, [lang, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>')
  return ctx
}
