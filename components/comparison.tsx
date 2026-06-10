import { Check, X } from "lucide-react"

const rows = [
  "Wartungserinnerungen",
  "Zentrale Dokumente",
  "Kostentransparenz",
  "KI-gestützte Workflows",
  "Mehrbenutzer-Sichtbarkeit",
  "Deutschlandfokussierte Abläufe",
]

export function Comparison() {
  return (
    <section id="vergleich" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-primary">Warum Teams wechseln</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Ein klarerer Ersatz für Tabellen und alte Tools.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Fahrnex fügt nicht einfach ein weiteres System hinzu. Es ersetzt
            verstreute Fahrzeugverwaltung durch einen modernen Arbeitsbereich.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="px-4 py-4 text-sm font-medium text-muted-foreground sm:px-6">
                  Funktion
                </th>
                <th className="px-4 py-4 text-center text-sm font-semibold text-primary sm:px-6">
                  Fahrnex
                </th>
                <th className="px-4 py-4 text-center text-sm font-medium text-muted-foreground sm:px-6">
                  Tabellen
                </th>
                <th className="px-4 py-4 text-center text-sm font-medium text-muted-foreground sm:px-6">
                  Legacy-Tools
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row}
                  className={i % 2 === 1 ? "bg-card/50" : "bg-card"}
                >
                  <td className="px-4 py-4 text-sm sm:px-6">{row}</td>
                  <td className="px-4 py-4 sm:px-6">
                    <span className="mx-auto flex size-6 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="size-4" aria-hidden="true" />
                      <span className="sr-only">Enthalten</span>
                    </span>
                  </td>
                  <td className="px-4 py-4 sm:px-6">
                    <X className="mx-auto size-4 text-muted-foreground/50" aria-hidden="true" />
                    <span className="sr-only">Nicht enthalten</span>
                  </td>
                  <td className="px-4 py-4 sm:px-6">
                    <X className="mx-auto size-4 text-muted-foreground/50" aria-hidden="true" />
                    <span className="sr-only">Nicht enthalten</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
