import { Armchair, Coffee, CookingPot, Gamepad2, Headphones, Laptop, Lamp, Sofa, type LucideIcon } from 'lucide-react'

export type Condition = 'LIKE_NEW' | 'GENTLY_USED' | 'HEAVILY_USED'
export type Category = 'Muebles' | 'Electrónica' | 'Hogar'

export const conditionLabel: Record<Condition, string> = {
  LIKE_NEW: 'Como nuevo',
  GENTLY_USED: 'Poco uso',
  HEAVILY_USED: 'Muy usado',
}

export type SampleListing = {
  title: string
  priceCents: number
  condition: Condition
  category: Category
  city: string
  verified: boolean
  icon: LucideIcon
  tint: 'green' | 'amber' | 'blue' | 'stone'
}

/** Mirrors a few of the backend's demo listings (prisma/seed/data.ts). */
export const sampleListings: SampleListing[] = [
  { title: 'Sofá de tres cuerpos gris', priceCents: 85000, condition: 'GENTLY_USED', category: 'Muebles', city: 'Cochabamba', verified: true, icon: Sofa, tint: 'amber' },
  { title: 'Laptop Lenovo ThinkPad T480', priceCents: 180000, condition: 'GENTLY_USED', category: 'Electrónica', city: 'Arequipa', verified: false, icon: Laptop, tint: 'blue' },
  { title: 'Audífonos Sony WH-1000XM4', priceCents: 95000, condition: 'LIKE_NEW', category: 'Electrónica', city: 'Cochabamba', verified: true, icon: Headphones, tint: 'stone' },
  { title: 'Juego de ollas de acero inoxidable', priceCents: 25000, condition: 'GENTLY_USED', category: 'Hogar', city: 'Arequipa', verified: false, icon: CookingPot, tint: 'green' },
  { title: 'Consola Nintendo Switch con dos controles', priceCents: 140000, condition: 'GENTLY_USED', category: 'Electrónica', city: 'Cochabamba', verified: true, icon: Gamepad2, tint: 'blue' },
  { title: 'Lámpara de pie de madera', priceCents: 12000, condition: 'LIKE_NEW', category: 'Hogar', city: 'Arequipa', verified: false, icon: Lamp, tint: 'amber' },
  { title: 'Silla de escritorio ergonómica', priceCents: 15000, condition: 'HEAVILY_USED', category: 'Muebles', city: 'Cochabamba', verified: true, icon: Armchair, tint: 'stone' },
  { title: 'Cafetera italiana de 6 tazas', priceCents: 4500, condition: 'HEAVILY_USED', category: 'Hogar', city: 'Arequipa', verified: false, icon: Coffee, tint: 'green' },
]

export const tintClass: Record<SampleListing['tint'], string> = {
  green: 'bg-green-surface text-green-strong',
  amber: 'bg-amber-surface text-amber-strong',
  blue: 'bg-blue-surface text-blue-strong',
  stone: 'bg-surface-sunken text-text-muted',
}
