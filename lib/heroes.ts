export type Hero = {
  id: number
  name: string
  role: string
  portrait: string
  pickRate: number
  winRate: number
  matches: number
}

export const heroes: Hero[] = [
  { id: 1, name: "Invoker", role: "Mago / Nuker", portrait: "/heroes/invoker.png", pickRate: 62, winRate: 54, matches: 1840 },
  { id: 2, name: "Pudge", role: "Iniciador / Tank", portrait: "/heroes/pudge.png", pickRate: 58, winRate: 49, matches: 1720 },
  { id: 3, name: "Shadow Fiend", role: "Carry / Nuker", portrait: "/heroes/shadow-fiend.png", pickRate: 51, winRate: 52, matches: 1510 },
  { id: 4, name: "Anti-Mage", role: "Carry", portrait: "/heroes/anti-mage.png", pickRate: 47, winRate: 55, matches: 1390 },
  { id: 5, name: "Juggernaut", role: "Carry / Pusher", portrait: "/heroes/juggernaut.png", pickRate: 44, winRate: 53, matches: 1280 },
  { id: 6, name: "Phantom Assassin", role: "Carry / Assassino", portrait: "/heroes/phantom-assassin.png", pickRate: 41, winRate: 51, matches: 1190 },
]
