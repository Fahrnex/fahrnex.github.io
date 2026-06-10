import { Fuel, ShieldAlert, ArrowRight } from "lucide-react"
import { fahrnexLinks, externalLinkProps } from "@/lib/links"

const fuelPrices = [
  { label: "Super E10", price: "1,69 €", trend: "−0,02" },
  { label: "Super E5", price: "1,75 €", trend: "+0,01" },
  { label: "Diesel", price: "1,60 €", trend: "−0,03" },
]

export function LiveData() {
  return (
    <section className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex items-center gap-2">
              <Fuel className="size-5 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium text-primary">Live-Daten</span>
            </div>
            <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              Live-Kraftstoffpreise in Deutschland
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Prüfen Sie E10-, E5- und Dieselpreise vor der Fahrt oder vor dem
              nächsten Tankstopp.
            </p>
            <div className="mt-6 space-y-3">
              {fuelPrices.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3"
                >
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold tabular-nums">{item.price}</span>
                    <span
                      className={
                        item.trend.startsWith("+")
                          ? "text-xs tabular-nums text-destructive"
                          : "text-xs tabular-nums text-primary"
                      }
                    >
                      {item.trend}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Täglich aktualisiert</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex items-center gap-2">
              <ShieldAlert className="size-5 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium text-primary">Rückrufe</span>
            </div>
            <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              Ihr Fahrzeug könnte einen offenen Rückruf haben.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Hersteller veröffentlichen regelmäßig Sicherheitsrückrufe. Prüfen
              Sie kostenlos, bevor Sie weiterfahren.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Fahrgestellnummer (VIN) eingeben"
                aria-label="Fahrgestellnummer"
                className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
              />
              <a
                href={fahrnexLinks.vinDecoder}
                {...externalLinkProps}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                VIN prüfen
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Die VIN-Prüfung macht offene Hinweise vor dem Kauf oder dem
              nächsten Termin sichtbar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
