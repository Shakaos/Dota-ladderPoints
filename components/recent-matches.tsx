import Image from "next/image"
import { Clock, Play, Swords } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Match } from "@/lib/matches"
import { cn } from "@/lib/utils"

function MatchCard({ match }: { match: Match }) {
  const sentinelWon = match.winner === "Sentinel"
  return (
    <article className="rounded-2xl stone-panel iron-frame p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex flex-1 flex-col items-start">
          <span
            className={cn(
              "font-display text-sm font-bold uppercase tracking-wide",
              sentinelWon ? "text-primary" : "text-muted-foreground",
            )}
          >
            {match.sentinel}
          </span>
          <span className="text-[0.65rem] uppercase tracking-wide text-muted-foreground">Sentinel</span>
        </div>

        <div className="flex flex-col items-center px-3">
          <Swords className="size-5 text-gold" aria-hidden="true" />
          <span className="mt-1 font-display text-xs font-bold text-muted-foreground">VS</span>
        </div>

        <div className="flex flex-1 flex-col items-end">
          <span
            className={cn(
              "font-display text-sm font-bold uppercase tracking-wide",
              !sentinelWon ? "text-ember" : "text-muted-foreground",
            )}
          >
            {match.scourge}
          </span>
          <span className="text-[0.65rem] uppercase tracking-wide text-muted-foreground">Scourge</span>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-lg bg-secondary/60 px-3 py-2">
        <div className="flex items-center gap-2">
          <Image
            src={match.mvpPortrait || "/placeholder.svg"}
            alt=""
            width={28}
            height={28}
            className="size-7 rounded-full object-cover ring-1 ring-gold/50"
          />
          <div className="leading-tight">
            <p className="text-xs font-medium text-foreground">
              MVP: <span className="text-gold">{match.mvp}</span>
            </p>
            <p className="text-[0.65rem] text-muted-foreground">{match.mvpHero}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="size-3.5" aria-hidden="true" />
          {match.duration}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          Vitória:{" "}
          <span className={cn("font-semibold", sentinelWon ? "text-primary" : "text-ember")}>{match.winner}</span>
          {" · "}
          {match.playedAt}
        </span>
        <Button size="sm" variant="secondary" className="gap-1.5 font-display text-xs font-semibold uppercase">
          <Play className="size-3.5" aria-hidden="true" />
          Assistir Replay
        </Button>
      </div>
    </article>
  )
}

export function RecentMatches({ matches }: { matches: Match[] }) {
  return (
    <section aria-label="Últimas partidas">
      <h2 className="mb-5 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">
        <Clock className="size-4" aria-hidden="true" />
        Últimas Partidas
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </section>
  )
}
