import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { fahrnexLinks, externalLinkProps } from "@/lib/links"

const proofPoints = [
  "Fristen bleiben sichtbar",
  "Dokumente bleiben geordnet",
  "Kosten bleiben nachvollziehbar",
  "Teams teilen eine Sicht",
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-80 max-w-4xl rounded-full bg-primary/15 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              Für kleine Flotten und Betriebe mit mehreren Fahrzeugen
            </span>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Verpassen Sie nie wieder TÜV-, Service- oder Fahrzeugfristen.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Fahrnex gibt kleinen Flotten und Betrieben mit mehreren Fahrzeugen
              einen gemeinsamen Arbeitsbereich für Dokumente, Fristen,
              Erinnerungen und Fahrzeugkosten.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href={fahrnexLinks.signup} {...externalLinkProps}>
                  Kostenlos starten
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={fahrnexLinks.demo} {...externalLinkProps}>
                  Demo buchen
                </a>
              </Button>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {proofPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
              <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                <span className="size-3 rounded-full bg-muted" />
                <span className="size-3 rounded-full bg-muted" />
                <span className="size-3 rounded-full bg-muted" />
                <span className="ml-3 text-xs text-muted-foreground">Fahrnex Dashboard</span>
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-2 py-0.5 text-xs font-medium text-primary">
                  <span className="size-1.5 rounded-full bg-primary" />
                  Live-Demo bereit
                </span>
              </div>
              <Image
                src="/dashboard-preview.png"
                alt="Fahrnex Dashboard mit Fahrzeugübersicht, anstehenden Fristen und Kostenauswertung"
                width={900}
                height={640}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
