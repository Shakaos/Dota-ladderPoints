"use client"

import { useMemo, useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { HeroBanner } from "@/components/hero-banner"
import { HeroesSection } from "@/components/heroes-section"
import { Podium } from "@/components/podium"
import { RankingTable } from "@/components/ranking-table"
import { RecentMatches } from "@/components/recent-matches"
import { StatsCards } from "@/components/stats-cards"
import { heroes } from "@/lib/heroes"
import { matches } from "@/lib/matches"
import { players } from "@/lib/players"

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const ranked = useMemo(() => [...players].sort((a, b) => b.points - a.points), [])
  const topThree = ranked.slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader onToggleSidebar={() => setSidebarOpen(true)} />
      <div className="mx-auto flex max-w-7xl">
        <AppSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 sm:py-8">
          <div className="flex flex-col gap-12">
            <HeroBanner />
            <Podium players={topThree} />
            <RankingTable players={ranked} />
            <HeroesSection heroes={heroes} />
            <StatsCards />
            <RecentMatches matches={matches} />
          </div>
          <footer className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
            Ranking atualizado em tempo real conforme os replays são processados. Dota Allstars — Temporada 12.
          </footer>
        </main>
      </div>
    </div>
  )
}
