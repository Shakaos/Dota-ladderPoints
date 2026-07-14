import {
  Award,
  Axe,
  Bird,
  Crown,
  Droplet,
  Flame,
  Shield,
  Skull,
  Sparkles,
  Sprout,
  Star,
  Swords,
  Sword,
  Target,
  Zap,
  type LucideIcon,
} from "lucide-react"

export type Rank = {
  name: string
  minPoints: number
  icon: LucideIcon
  /** Tailwind text color token */
  color: string
  /** Tailwind classes for the tier chip background/border */
  chip: string
}

// Patentes inspiradas no Warcraft III — do mais baixo ao mais alto.
// A ordem importa: getRank percorre de cima para baixo.
export const RANKS: Rank[] = [
  { name: "Legend", minPoints: 2400, icon: Flame, color: "text-gold", chip: "bg-gold/15 text-gold border-gold/40" },
  { name: "Warchief", minPoints: 2100, icon: Swords, color: "text-gold", chip: "bg-gold/10 text-gold border-gold/30" },
  { name: "Gryphon Rider", minPoints: 1800, icon: Bird, color: "text-silver", chip: "bg-silver/10 text-silver border-silver/30" },
  { name: "Sorcerer", minPoints: 1550, icon: Sparkles, color: "text-primary", chip: "bg-primary/10 text-primary border-primary/30" },
  { name: "Raider", minPoints: 1350, icon: Axe, color: "text-primary", chip: "bg-primary/10 text-primary border-primary/25" },
  { name: "Knight", minPoints: 1150, icon: Shield, color: "text-bronze", chip: "bg-bronze/10 text-bronze border-bronze/30" },
  { name: "Archer", minPoints: 950, icon: Target, color: "text-bronze", chip: "bg-bronze/10 text-bronze border-bronze/25" },
  { name: "Footman", minPoints: 700, icon: Sword, color: "text-muted-foreground", chip: "bg-muted text-muted-foreground border-border" },
  { name: "Peasant", minPoints: 0, icon: Sprout, color: "text-muted-foreground", chip: "bg-muted text-muted-foreground border-border" },
]

export function getRank(points: number): Rank {
  return RANKS.find((r) => points >= r.minPoints) ?? RANKS[RANKS.length - 1]
}

export type BadgeKey =
  | "firstBlood"
  | "rampage"
  | "godlike"
  | "beyondGodlike"
  | "top1"
  | "mvpWeek"

export type BadgeDef = {
  label: string
  icon: LucideIcon
  color: string
}

export const BADGES: Record<BadgeKey, BadgeDef> = {
  firstBlood: { label: "First Blood", icon: Droplet, color: "text-ember" },
  rampage: { label: "Rampage", icon: Swords, color: "text-ember" },
  godlike: { label: "Godlike", icon: Zap, color: "text-gold" },
  beyondGodlike: { label: "Beyond Godlike", icon: Skull, color: "text-gold" },
  top1: { label: "Top 1 da Ladder", icon: Crown, color: "text-gold" },
  mvpWeek: { label: "MVP da Semana", icon: Star, color: "text-gold" },
}

export const BADGE_KEYS = Object.keys(BADGES) as BadgeKey[]

// Ícone genérico de conquista, reexportado para conveniência.
export { Award }
