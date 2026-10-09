export const APP_URL = import.meta.env.VITE_APP_URL ?? 'https://re-nest-frontend.vercel.app'

export const appLink = (path: string) => `${APP_URL}${path}`

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}
