import type { BadgeKey } from "@/lib/ranks"

export type Player = {
  id: number
  name: string
  team: string
  points: number
  wins: number
  losses: number
  kda: number
  hero: string
  heroPortrait: string
  lastMatch: string
  medals: number
  badges: BadgeKey[]
}

function winRate(wins: number, losses: number) {
  return Math.round((wins / (wins + losses)) * 100)
}

export const players: Player[] = [
  { id: 1, name: "Miracle-", team: "Radiant Kings", points: 2480, wins: 42, losses: 8, kda: 6.9, hero: "Invoker", heroPortrait: "/heroes/invoker.png", lastMatch: "há 2h", medals: 5, badges: ["top1", "beyondGodlike", "mvpWeek"] },
  { id: 2, name: "SumaiL", team: "Dire Wolves", points: 2310, wins: 39, losses: 11, kda: 6.1, hero: "Shadow Fiend", heroPortrait: "/heroes/shadow-fiend.png", lastMatch: "há 4h", medals: 4, badges: ["godlike", "rampage"] },
  { id: 3, name: "Arteezy", team: "Aegis Legends", points: 2185, wins: 37, losses: 13, kda: 5.7, hero: "Anti-Mage", heroPortrait: "/heroes/anti-mage.png", lastMatch: "há 6h", medals: 3, badges: ["godlike", "firstBlood"] },
  { id: 4, name: "Puppey", team: "Roshan Squad", points: 1990, wins: 34, losses: 16, kda: 4.8, hero: "Pudge", heroPortrait: "/heroes/pudge.png", lastMatch: "há 8h", medals: 3, badges: ["rampage"] },
  { id: 5, name: "N0tail", team: "Ancient Guard", points: 1875, wins: 32, losses: 18, kda: 4.5, hero: "Juggernaut", heroPortrait: "/heroes/juggernaut.png", lastMatch: "há 12h", medals: 2, badges: ["firstBlood"] },
  { id: 6, name: "Topson", team: "Radiant Kings", points: 1760, wins: 30, losses: 20, kda: 5.2, hero: "Invoker", heroPortrait: "/heroes/invoker.png", lastMatch: "há 1d", medals: 2, badges: ["godlike"] },
  { id: 7, name: "Ceb", team: "Dire Wolves", points: 1640, wins: 28, losses: 22, kda: 3.9, hero: "Phantom Assassin", heroPortrait: "/heroes/phantom-assassin.png", lastMatch: "há 1d", medals: 2, badges: [] },
  { id: 8, name: "Ana", team: "Aegis Legends", points: 1520, wins: 26, losses: 24, kda: 5.5, hero: "Juggernaut", heroPortrait: "/heroes/juggernaut.png", lastMatch: "há 2d", medals: 1, badges: ["rampage"] },
  { id: 9, name: "Yatoro", team: "Roshan Squad", points: 1405, wins: 24, losses: 26, kda: 4.1, hero: "Phantom Assassin", heroPortrait: "/heroes/phantom-assassin.png", lastMatch: "há 2d", medals: 1, badges: [] },
  { id: 10, name: "Collapse", team: "Ancient Guard", points: 1290, wins: 22, losses: 28, kda: 3.6, hero: "Pudge", heroPortrait: "/heroes/pudge.png", lastMatch: "há 3d", medals: 1, badges: ["firstBlood"] },
  { id: 11, name: "Nisha", team: "Radiant Kings", points: 1150, wins: 20, losses: 30, kda: 4.3, hero: "Anti-Mage", heroPortrait: "/heroes/anti-mage.png", lastMatch: "há 3d", medals: 0, badges: [] },
  { id: 12, name: "MinD_ContRoL", team: "Dire Wolves", points: 1020, wins: 18, losses: 32, kda: 3.2, hero: "Shadow Fiend", heroPortrait: "/heroes/shadow-fiend.png", lastMatch: "há 4d", medals: 0, badges: [] },
]

export function playerWinRate(player: Player) {
  return winRate(player.wins, player.losses)
}

export function totalMatches(player: Player) {
  return player.wins + player.losses
}

/** Lista única de clãs para o filtro do ranking. */
export const teams = Array.from(new Set(players.map((p) => p.team))).sort()
