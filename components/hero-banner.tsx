import Image from "next/image"
import { Flame } from "lucide-react"

export function HeroBanner() {
  return (
    <section aria-label="Destaque do campeonato" className="relative overflow-hidden rounded-2xl iron-frame">
      <div className="relative h-56 w-full sm:h-72 lg:h-80">
        <Image
          src="/heroes/banner.png"
          alt="Heróis lendários do Dota Allstars em campo de batalha"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Iluminação dramática / vinheta */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,transparent,oklch(0.15_0.008_60/0.9))]" />

        <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8">
          <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-ember/15 px-3 py-1 font-display text-xs font-semibold uppercase tracking-wide text-ember gold-frame">
            <Flame className="size-3.5" aria-hidden="true" />
            Ladder Permanente — Ao Vivo
          </span>
          <h2 className="max-w-2xl font-display text-2xl font-bold uppercase leading-tight tracking-wide text-foreground text-balance text-glow-gold sm:text-4xl">
            Suba na Ladder e Torne-se uma Lenda
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground text-pretty sm:text-base">
            Cada replay enviado atualiza o ELO, sua patente e suas insígnias. De Peasant a Legend — a disputa entre amigos nunca termina.
          </p>
        </div>
      </div>
    </section>
  )
}
