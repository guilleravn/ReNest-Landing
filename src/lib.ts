export const APP_URL = import.meta.env.VITE_APP_URL ?? 'https://re-nest-frontend.vercel.app'

export const appLink = (path: string) => `${APP_URL}${path}`

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

/** Prices arrive in cents; the app always shows a generic "$" (GEN-2). */
export function formatPrice(cents: number) {
  return `$${new Intl.NumberFormat('es', { maximumFractionDigits: 0 }).format(cents / 100)}`
}
