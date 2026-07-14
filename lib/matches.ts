export type Match = {
  id: number
  sentinel: string
  scourge: string
  winner: "Sentinel" | "Scourge"
  mvp: string
  mvpHero: string
  mvpPortrait: string
  duration: string
  playedAt: string
}

export const matches: Match[] = [
  {
    id: 1,
    sentinel: "Radiant Kings",
    scourge: "Dire Wolves",
    winner: "Sentinel",
    mvp: "Miracle-",
    mvpHero: "Invoker",
    mvpPortrait: "/heroes/invoker.png",
    duration: "42:18",
    playedAt: "há 2h",
  },
  {
    id: 2,
    sentinel: "Aegis Legends",
    scourge: "Roshan Squad",
    winner: "Scourge",
    mvp: "Puppey",
    mvpHero: "Pudge",
    mvpPortrait: "/heroes/pudge.png",
    duration: "37:05",
    playedAt: "há 5h",
  },
  {
    id: 3,
    sentinel: "Ancient Guard",
    scourge: "Radiant Kings",
    winner: "Sentinel",
    mvp: "N0tail",
    mvpHero: "Juggernaut",
    mvpPortrait: "/heroes/juggernaut.png",
    duration: "51:44",
    playedAt: "há 9h",
  },
  {
    id: 4,
    sentinel: "Dire Wolves",
    scourge: "Aegis Legends",
    winner: "Scourge",
    mvp: "Ana",
    mvpHero: "Juggernaut",
    mvpPortrait: "/heroes/juggernaut.png",
    duration: "29:52",
    playedAt: "há 14h",
  },
]

export const generalStats = {
  totalPlayers: 128,
  totalMatches: 3_642,
  totalReplays: 2_918,
  topHero: "Invoker",
  topHeroPortrait: "/heroes/invoker.png",
  longestWinStreak: 17,
  longestWinStreakPlayer: "Miracle-",
  highestKda: 9.4,
  highestKdaPlayer: "SumaiL",
  ladderLeader: "Miracle-",
  ladderLeaderTeam: "Radiant Kings",
}
