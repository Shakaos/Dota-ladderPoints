import { getRank } from "@/lib/ranks"
import { cn } from "@/lib/utils"

export function RankBadge({
  points,
  size = "md",
  className,
}: {
  points: number
  size?: "sm" | "md"
  className?: string
}) {
  const rank = getRank(points)
  const Icon = rank.icon
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-display font-semibold uppercase tracking-wide",
        rank.chip,
        size === "sm" ? "px-2 py-0.5 text-[0.65rem]" : "px-3 py-1 text-xs",
        className,
      )}
      title={`Patente: ${rank.name}`}
    >
      <Icon className={size === "sm" ? "size-3" : "size-3.5"} aria-hidden="true" />
      {rank.name}
    </span>
  )
}
