import Image from "next/image"
import { Swords } from "lucide-react"
import type { Hero } from "@/lib/heroes"

function HeroCard({ hero }: { hero: Hero }) {
  return (
    <article className="group overflow-hidden rounded-2xl stone-panel iron-frame transition-transform duration-300 hover:-translate-y-1">
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={hero.portrait || "/placeholder.svg"}
          alt={`Retrato de ${hero.name}`}
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <p className="font-display text-base font-bold uppercase tracking-wide text-foreground text-glow-gold">
            {hero.name}
          </p>
          <p className="text-xs text-muted-foreground">{hero.role}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 divide-x divide-border border-t border-border text-center">
        <div className="px-2 py-3">
          <p className="font-display text-sm font-bold text-gold">{hero.pickRate}%</p>
          <p className="text-[0.65rem] uppercase tracking-wide text-muted-foreground">Escolha</p>
        </div>
        <div className="px-2 py-3">
          <p className="font-display text-sm font-bold text-primary">{hero.winRate}%</p>
          <p className="text-[0.65rem] uppercase tracking-wide text-muted-foreground">Win Rate</p>
        </div>
        <div className="px-2 py-3">
          <p className="font-display text-sm font-bold text-foreground">{hero.matches.toLocaleString("pt-BR")}</p>
          <p className="text-[0.65rem] uppercase tracking-wide text-muted-foreground">Partidas</p>
        </div>
      </div>
    </article>
  )
}

export function HeroesSection({ heroes }: { heroes: Hero[] }) {
  return (
    <section aria-label="Heróis mais jogados">
      <h2 className="mb-5 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">
        <Swords className="size-4" aria-hidden="true" />
        Heróis Mais Jogados
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </section>
  )
}
