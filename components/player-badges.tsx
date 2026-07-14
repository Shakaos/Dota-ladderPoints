import { BADGES, type BadgeKey } from "@/lib/ranks"
import { cn } from "@/lib/utils"

export function PlayerBadges({
  badges,
  max,
  className,
}: {
  badges: BadgeKey[]
  max?: number
  className?: string
}) {
  if (badges.length === 0) return null
  const shown = max ? badges.slice(0, max) : badges
  const extra = max ? badges.length - shown.length : 0

  return (
    <span className={cn("inline-flex items-center gap-1", className)}>
      {shown.map((key) => {
        const badge = BADGES[key]
        const Icon = badge.icon
        return (
          <span
            key={key}
            title={badge.label}
            aria-label={badge.label}
            className={cn(
              "inline-flex size-5 items-center justify-center rounded-full border border-border bg-secondary/70",
              badge.color,
            )}
          >
            <Icon className="size-3" aria-hidden="true" />
          </span>
        )
      })}
      {extra > 0 && (
        <span className="text-[0.65rem] font-medium text-muted-foreground">+{extra}</span>
      )}
    </span>
  )
}
