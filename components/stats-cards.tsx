import Image from "next/image"
import { BarChart3, Crown, Film, Flame, Swords, Target, Users } from "lucide-react"
import { generalStats } from "@/lib/matches"

const numberCards = [
  { label: "Jogadores", value: generalStats.totalPlayers.toLocaleString("pt-BR"), icon: Users },
  { label: "Partidas", value: generalStats.totalMatches.toLocaleString("pt-BR"), icon: Swords },
  { label: "Replays", value: generalStats.totalReplays.toLocaleString("pt-BR"), icon: Film },
]

export function StatsCards() {
  return (
    <section aria-label="Estatísticas gerais">
      <h2 className="mb-5 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">
        <BarChart3 className="size-4" aria-hidden="true" />
        Estatísticas Gerais
      </h2>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {numberCards.map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-2xl stone-panel iron-frame p-5">
            <Icon className="mb-3 size-6 text-primary" aria-hidden="true" />
            <p className="font-display text-2xl font-bold text-foreground">{value}</p>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
          </div>
        ))}

        <div className="flex items-center gap-3 rounded-2xl stone-panel iron-frame p-5">
          <Image
            src={generalStats.topHeroPortrait || "/placeholder.svg"}
            alt={generalStats.topHero}
            width={48}
            height={48}
            className="size-12 rounded-full object-cover ring-1 ring-gold/50"
          />
          <div>
            <p className="font-display text-base font-bold text-foreground">{generalStats.topHero}</p>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Herói Mais Escolhido</p>
          </div>
        </div>

        <div className="rounded-2xl stone-panel iron-frame p-5">
          <Flame className="mb-3 size-6 text-ember" aria-hidden="true" />
          <p className="font-display text-2xl font-bold text-foreground">{generalStats.longestWinStreak} vitórias</p>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Maior Sequência · {generalStats.longestWinStreakPlayer}
          </p>
        </div>

        <div className="rounded-2xl stone-panel iron-frame p-5">
          <Target className="mb-3 size-6 text-gold" aria-hidden="true" />
          <p className="font-display text-2xl font-bold text-foreground">{generalStats.highestKda.toFixed(1)} KDA</p>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Maior KDA · {generalStats.highestKdaPlayer}
          </p>
        </div>

        <div className="col-span-2 flex items-center gap-3 rounded-2xl stone-panel gold-frame p-5 lg:col-span-3">
          <Crown className="size-8 shrink-0 text-gold" aria-hidden="true" />
          <div>
            <p className="font-display text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-gold">
              Líder Atual da Ladder
            </p>
            <p className="font-display text-xl font-bold uppercase tracking-wide text-foreground text-glow-gold">
              {generalStats.ladderLeader}
            </p>
            <p className="text-xs text-muted-foreground">{generalStats.ladderLeaderTeam}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
