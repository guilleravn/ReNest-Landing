import { Armchair, Coffee, CookingPot, Gamepad2, Headphones, Laptop, Lamp, Sofa, type LucideIcon } from 'lucide-react'
import type { Messages } from '@/i18n/messages'

export type Condition = keyof Messages['catalog']['conditions']
export type Category = keyof Messages['catalog']['categories']

export type SampleListing = {
  id: keyof Messages['catalog']['titles']
  priceCents: number
  condition: Condition
  category: Category
  city: string
  verified: boolean
  icon: LucideIcon
  tint: 'green' | 'amber' | 'blue' | 'stone'
}

/** Mirrors a few of the backend's demo listings (prisma/seed/data.ts). Titles live in the messages. */
export const sampleListings: SampleListing[] = [
  { id: 'sofa', priceCents: 85000, condition: 'GENTLY_USED', category: 'FURNITURE', city: 'Cochabamba', verified: true, icon: Sofa, tint: 'amber' },
  { id: 'laptop', priceCents: 180000, condition: 'GENTLY_USED', category: 'ELECTRONICS', city: 'Arequipa', verified: false, icon: Laptop, tint: 'blue' },
  { id: 'headphones', priceCents: 95000, condition: 'LIKE_NEW', category: 'ELECTRONICS', city: 'Cochabamba', verified: true, icon: Headphones, tint: 'stone' },
  { id: 'pots', priceCents: 25000, condition: 'GENTLY_USED', category: 'HOME', city: 'Arequipa', verified: false, icon: CookingPot, tint: 'green' },
  { id: 'switch', priceCents: 140000, condition: 'GENTLY_USED', category: 'ELECTRONICS', city: 'Cochabamba', verified: true, icon: Gamepad2, tint: 'blue' },
  { id: 'lamp', priceCents: 12000, condition: 'LIKE_NEW', category: 'HOME', city: 'Arequipa', verified: false, icon: Lamp, tint: 'amber' },
  { id: 'chair', priceCents: 15000, condition: 'HEAVILY_USED', category: 'FURNITURE', city: 'Cochabamba', verified: true, icon: Armchair, tint: 'stone' },
  { id: 'coffee', priceCents: 4500, condition: 'HEAVILY_USED', category: 'HOME', city: 'Arequipa', verified: false, icon: Coffee, tint: 'green' },
]

export const tintClass: Record<SampleListing['tint'], string> = {
  green: 'bg-green-surface text-green-strong',
  amber: 'bg-amber-surface text-amber-strong',
  blue: 'bg-blue-surface text-blue-strong',
  stone: 'bg-surface-sunken text-text-muted',
}
