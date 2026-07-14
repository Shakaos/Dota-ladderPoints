"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { ArrowDown, ArrowUp, ChevronsUpDown, ListOrdered, Search } from "lucide-react"
import { PlayerBadges } from "@/components/player-badges"
import { RankBadge } from "@/components/rank-badge"
import { type Player, playerWinRate, teams } from "@/lib/players"
import { cn } from "@/lib/utils"

type SortKey = "points" | "wins" | "losses" | "winRate" | "kda"

const columns: { key: SortKey; label: string }[] = [
  { key: "points", label: "Pontos" },
  { key: "wins", label: "Vitórias" },
  { key: "losses", label: "Derrotas" },
  { key: "winRate", label: "Win Rate" },
  { key: "kda", label: "KDA Médio" },
]

function sortValue(player: Player, key: SortKey) {
  if (key === "winRate") return playerWinRate(player)
  return player[key]
}

function rankColor(rank: number) {
  if (rank === 1) return "text-gold"
  if (rank === 2) return "text-silver"
  if (rank === 3) return "text-bronze"
  return "text-muted-foreground"
}

export function RankingTable({ players }: { players: Player[] }) {
  const [query, setQuery] = useState("")
  const [team, setTeam] = useState("all")
  const [sortKey, setSortKey] = useState<SortKey>("points")
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc")

  // Posição fixa na ladder, sempre por pontos (independente da ordenação da tabela).
  const positionById = useMemo(() => {
    const map = new Map<number, number>()
    ;[...players]
      .sort((a, b) => b.points - a.points)
      .forEach((p, i) => map.set(p.id, i + 1))
    return map
  }, [players])

  const filtered = useMemo(() => {
    let list = players.filter((p) => {
      const matchesQuery =
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.team.toLowerCase().includes(query.toLowerCase())
      const matchesTeam = team === "all" || p.team === team
      return matchesQuery && matchesTeam
    })
    list = [...list].sort((a, b) => {
      const diff = sortValue(a, sortKey) - sortValue(b, sortKey)
      return sortDir === "asc" ? diff : -diff
    })
    return list
  }, [players, query, team, sortKey, sortDir])

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"))
    } else {
      setSortKey(key)
      setSortDir("desc")
    }
  }

  return (
    <section aria-label="Ranking geral">
      <h2 className="mb-5 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">
        <ListOrdered className="size-4" aria-hidden="true" />
        Ranking Geral da Ladder
      </h2>

      {/* Busca e filtros */}
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar jogador ou clã..."
            aria-label="Buscar jogador"
            className="w-full rounded-lg border border-border bg-secondary/50 py-2.5 pl-9 pr-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold/50 focus:ring-1 focus:ring-gold/40"
          />
        </div>
        <select
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          aria-label="Filtrar por clã"
          className="rounded-lg border border-border bg-secondary/50 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-gold/50 focus:ring-1 focus:ring-gold/40 sm:w-52"
        >
          <option value="all">Todos os clãs</option>
          {teams.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-hidden rounded-2xl stone-panel iron-frame">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[940px] text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary/60 font-display text-xs uppercase tracking-wider text-gold">
                <th scope="col" className="px-4 py-3 text-center">Pos</th>
                <th scope="col" className="px-4 py-3">Jogador</th>
                <th scope="col" className="px-4 py-3">Patente</th>
                {columns.map((col) => {
                  const active = sortKey === col.key
                  const Icon = active ? (sortDir === "asc" ? ArrowUp : ArrowDown) : ChevronsUpDown
                  const isCentered = col.key !== "points"
                  return (
                    <th
                      key={col.key}
                      scope="col"
                      className={cn("px-4 py-3", col.key === "points" ? "text-right" : "text-center")}
                    >
                      <button
                        type="button"
                        onClick={() => toggleSort(col.key)}
                        className={cn(
                          "inline-flex items-center gap-1 uppercase tracking-wider transition-colors hover:text-foreground",
                          isCentered ? "justify-center" : "",
                          active ? "text-foreground" : "text-gold",
                        )}
                      >
                        {col.label}
                        <Icon className="size-3" aria-hidden="true" />
                      </button>
                    </th>
                  )
                })}
                <th scope="col" className="px-4 py-3">Herói</th>
                <th scope="col" className="px-4 py-3 text-right">Última Atividade</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((player) => {
                const rank = positionById.get(player.id) ?? 0
                const wr = playerWinRate(player)
                return (
                  <tr
                    key={player.id}
                    className={cn(
                      "border-b border-border/50 transition-colors last:border-0 hover:bg-accent/40",
                      rank <= 3 && "bg-gold/[0.04]",
                    )}
                  >
                    <td className={cn("px-4 py-3 text-center font-display text-base font-bold", rankColor(rank))}>
                      {rank}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <Image
                          src={player.heroPortrait || "/placeholder.svg"}
                          alt=""
                          width={36}
                          height={36}
                          className="size-9 shrink-0 rounded-full object-cover ring-1 ring-border"
                        />
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-foreground">{player.name}</span>
                            <PlayerBadges badges={player.badges} max={3} />
                          </div>
                          <span className="text-xs text-muted-foreground">{player.team}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <RankBadge points={player.points} size="sm" />
                    </td>
                    <td className="px-4 py-3 text-right font-display font-semibold text-foreground">
                      {player.points.toLocaleString("pt-BR")}
                    </td>
                    <td className="px-4 py-3 text-center font-medium text-primary">{player.wins}</td>
                    <td className="px-4 py-3 text-center font-medium text-ember">{player.losses}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={cn("font-medium", wr >= 60 ? "text-gold" : "text-foreground")}>{wr}%</span>
                    </td>
                    <td className="px-4 py-3 text-center font-medium text-foreground">{player.kda.toFixed(1)}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Image
                          src={player.heroPortrait || "/placeholder.svg"}
                          alt=""
                          width={24}
                          height={24}
                          className="size-6 shrink-0 rounded object-cover ring-1 ring-border"
                        />
                        <span className="text-xs text-muted-foreground">{player.hero}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right text-xs text-muted-foreground">{player.lastMatch}</td>
                  </tr>
                )
              })}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={10} className="px-4 py-10 text-center text-sm text-muted-foreground">
                    Nenhum jogador encontrado para a busca atual.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
