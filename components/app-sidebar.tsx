"use client"

import {
  BarChart3,
  Calendar,
  Gem,
  Shield,
  Swords,
  Trophy,
  Users,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Ranking", icon: Trophy, active: true },
  { label: "Temporadas", icon: Calendar, active: false },
  { label: "Torneios", icon: Swords, active: false },
  { label: "Heróis", icon: Users, active: false },
  { label: "Itens", icon: Gem, active: false },
  { label: "Estatísticas", icon: BarChart3, active: false },
  { label: "Administração", icon: Shield, active: false },
]

function SidebarContent() {
  return (
    <nav className="flex flex-col gap-1 p-4" aria-label="Menu lateral">
      <p className="mb-2 px-3 font-display text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-gold">
        Navegação
      </p>
      {navItems.map(({ label, icon: Icon, active }) => (
        <a
          key={label}
          href="#"
          aria-current={active ? "page" : undefined}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2.5 font-display text-sm font-medium uppercase tracking-wide transition-colors",
            active
              ? "bg-gradient-to-r from-gold/20 to-transparent text-gold gold-frame"
              : "text-muted-foreground hover:bg-accent hover:text-foreground",
          )}
        >
          <Icon className="size-4 shrink-0" aria-hidden="true" />
          {label}
        </a>
      ))}
    </nav>
  )
}

export function AppSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {/* Desktop */}
      <aside className="sticky top-[57px] hidden h-[calc(100vh-57px)] w-60 shrink-0 border-r border-border bg-sidebar lg:block">
        <SidebarContent />
      </aside>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-background/70 backdrop-blur-sm transition-opacity",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={onClose}
        />
        <aside
          className={cn(
            "absolute left-0 top-0 h-full w-64 border-r border-border bg-sidebar shadow-2xl transition-transform duration-300",
            open ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <span className="font-display text-sm font-bold uppercase tracking-wide text-gold">Menu</span>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground"
              aria-label="Fechar menu"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>
          <SidebarContent />
        </aside>
      </div>
    </>
  )
}
