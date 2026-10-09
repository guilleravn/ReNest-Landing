import { cn } from '@/lib'

export function NestMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" aria-hidden="true" className={cn('fill-current', className)}>
      <path d="M31.1 84.25A40 40 0 1 1 64.9 84.25L58.14 69.75A24 24 0 1 0 37.86 69.75Z" />
      <circle cx="48" cy="68" r="12" />
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return <img src="/brand/logo-horizontal.svg" alt="ReNest" className={cn('h-9 w-auto', className)} />
}
