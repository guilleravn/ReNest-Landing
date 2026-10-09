import type { AnchorHTMLAttributes } from 'react'
import { cn } from '@/lib'

type Variant = 'primary' | 'outline' | 'inverse' | 'ghost-inverse'

const variants: Record<Variant, string> = {
  primary: 'bg-green-strong text-text-inverse hover:bg-green-hover active:bg-green-active',
  outline: 'border-[1.5px] border-border-strong bg-background text-foreground hover:bg-surface-sunken',
  inverse: 'bg-background text-green-active hover:bg-green-surface',
  'ghost-inverse': 'border-[1.5px] border-green-on-dark/40 text-text-inverse hover:bg-green-hover',
}

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; size?: 'md' | 'lg' }

export function ButtonLink({ variant = 'primary', size = 'md', className, ...props }: Props) {
  return (
    <a
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors',
        size === 'lg' ? 'h-12 px-6 text-base' : 'h-10 px-4 text-[0.95rem]',
        variants[variant],
        className,
      )}
      {...props}
    />
  )
}
