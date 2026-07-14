"use client"

import { useState } from "react"
import { Menu, Swords, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = ["Ranking", "Jogadores", "Heróis", "Estatísticas", "Replays", "Perfil"]

export function DashboardHeader({ onToggleSidebar }: { onToggleSidebar?: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground lg:hidden"
            aria-label="Abrir menu lateral"
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
          <div className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-b from-primary/25 to-primary/5 text-gold gold-frame">
            <Swords className="size-5" aria-hidden="true" />
          </div>
          <div className="leading-tight">
            <p className="hidden font-display text-[0.6rem] font-medium uppercase tracking-[0.3em] text-gold sm:block">
              Ladder Permanente
            </p>
            <h1 className="font-display text-lg font-bold uppercase tracking-wide text-foreground text-glow-gold sm:text-xl">
              Dota Allstars Ladder
            </h1>
          </div>
        </div>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="rounded-md px-3 py-2 font-display text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button className="hidden gap-2 font-display font-semibold uppercase tracking-wide sm:inline-flex">
            <Upload className="size-4" aria-hidden="true" />
            Enviar Replay
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground md:hidden"
            aria-label="Abrir menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div className={cn("border-t border-border md:hidden", mobileOpen ? "block" : "hidden")}>
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3" aria-label="Navegação mobile">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="rounded-md px-3 py-2 font-display text-sm font-medium uppercase tracking-wide text-muted-foreground hover:bg-accent hover:text-foreground"
            >
              {item}
            </a>
          ))}
          <Button className="mt-2 gap-2 font-display font-semibold uppercase tracking-wide">
            <Upload className="size-4" aria-hidden="true" />
            Enviar Replay
          </Button>
        </nav>
      </div>
    </header>
  )
}
