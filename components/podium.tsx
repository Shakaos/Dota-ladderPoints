import Image from "next/image"
import { Clock, Crown, Medal, Swords, Trophy } from "lucide-react"
import { PlayerBadges } from "@/components/player-badges"
import { RankBadge } from "@/components/rank-badge"
import { type Player, playerWinRate, totalMatches } from "@/lib/players"
import { cn } from "@/lib/utils"

type PodiumSlot = {
  player: Player
  rank: number
}

const rankStyles: Record<
  number,
  { frame: string; badge: string; text: string; ring: string; icon: typeof Crown; label: string }
> = {
  1: {
    frame: "gold-frame",
    badge: "bg-gold/15 text-gold",
    text: "text-gold",
    ring: "ring-gold/60",
    icon: Crown,
    label: "Líder da Ladder",
  },
  2: {
    frame: "iron-frame",
    badge: "bg-silver/15 text-silver",
    text: "text-silver",
    ring: "ring-silver/50",
    icon: Trophy,
    label: "2º Lugar",
  },
  3: {
    frame: "iron-frame",
    badge: "bg-bronze/15 text-bronze",
    text: "text-bronze",
    ring: "ring-bronze/50",
    icon: Medal,
    label: "3º Lugar",
  },
}

function PodiumCard({ player, rank }: PodiumSlot) {
  const s = rankStyles[rank]
  const Icon = s.icon
  const wr = playerWinRate(player)
  return (
    <div
      className={cn(
        "flex flex-col items-center rounded-2xl stone-panel p-6 text-center",
        s.frame,
        rank === 1 ? "lg:-mt-4 lg:pb-8" : "lg:mt-6",
      )}
    >
      <span
        className={cn(
          "mb-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-display text-xs font-semibold uppercase tracking-wide gold-frame",
          s.badge,
        )}
      >
        <Icon className="size-3.5" aria-hidden="true" />
        {s.label}
      </span>

      <div className="relative mb-4">
        <div
          className={cn(
            "overflow-hidden rounded-full ring-2 ring-offset-2 ring-offset-card",
            s.ring,
            rank === 1 ? "size-24" : "size-20",
          )}
        >
          <Image
            src={player.heroPortrait || "/placeholder.svg"}
            alt={`${player.name} jogando ${player.hero}`}
            width={96}
            height={96}
            className="size-full object-cover"
          />
        </div>
        <span
          className={cn(
            "absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full px-2 py-0.5 font-display text-xs font-bold gold-frame",
            s.badge,
          )}
        >
          #{rank}
        </span>
      </div>

      <p className="font-display text-lg font-bold uppercase tracking-wide text-foreground">{player.name}</p>

      <div className="mt-2">
        <RankBadge points={player.points} />
      </div>

      {player.badges.length > 0 && (
        <div className="mt-3">
          <PlayerBadges badges={player.badges} />
        </div>
      )}

      <p className={cn("mt-4 font-display text-2xl font-bold text-glow-gold", s.text)}>
        {player.points.toLocaleString("pt-BR")}
      </p>
      <p className="text-xs uppercase tracking-wide text-muted-foreground">Pontos de ELO</p>

      <div className="mt-4 grid w-full grid-cols-3 gap-2 border-t border-border pt-4 text-sm">
        <div>
          <p className="font-display font-bold text-foreground">{wr}%</p>
          <p className="text-[0.65rem] uppercase tracking-wide text-muted-foreground">Win Rate</p>
        </div>
        <div>
          <p className="font-display font-bold text-foreground">{player.kda.toFixed(1)}</p>
          <p className="text-[0.65rem] uppercase tracking-wide text-muted-foreground">KDA</p>
        </div>
        <div>
          <p className="font-display font-bold text-foreground">{totalMatches(player)}</p>
          <p className="text-[0.65rem] uppercase tracking-wide text-muted-foreground">Partidas</p>
        </div>
      </div>

      <div className="mt-3 flex w-full items-center justify-between gap-2 rounded-lg bg-secondary/60 px-3 py-2">
        <div className="flex items-center gap-2">
          <Image
            src={player.heroPortrait || "/placeholder.svg"}
            alt=""
            width={24}
            height={24}
            className="size-6 rounded-full object-cover ring-1 ring-border"
          />
          <span className="text-xs text-muted-foreground">
            Main: <span className="font-medium text-foreground">{player.hero}</span>
          </span>
        </div>
        <span className="flex items-center gap-1 text-[0.65rem] text-muted-foreground">
          <Clock className="size-3" aria-hidden="true" />
          {player.lastMatch}
        </span>
      </div>
    </div>
  )
}

export function Podium({ players }: { players: Player[] }) {
  const [first, second, third] = players
  return (
    <section aria-label="Melhores jogadores">
      <h2 className="mb-5 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">
        <Swords className="size-4" aria-hidden="true" />
        Topo da Ladder
      </h2>
      <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-3">
        <div className="order-2 sm:order-1">{second && <PodiumCard player={second} rank={2} />}</div>
        <div className="order-1 sm:order-2">{first && <PodiumCard player={first} rank={1} />}</div>
        <div className="order-3 sm:order-3">{third && <PodiumCard player={third} rank={3} />}</div>
      </div>
    </section>
  )
}
