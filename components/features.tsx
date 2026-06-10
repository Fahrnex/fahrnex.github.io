import { FileText, BellRing, Receipt, FolderLock } from "lucide-react"

const features = [
  {
    icon: FileText,
    title: "Fahrzeugakten",
    desc: "Bewahren Sie VIN, Kilometerstand, Besitzdetails und Historie von Anfang an an einem Ort auf.",
  },
  {
    icon: BellRing,
    title: "Sichtbare Erinnerungen",
    desc: "Verfolgen Sie Prüfungen, Serviceintervalle und Verlängerungen, bevor sie dringend werden.",
  },
  {
    icon: Receipt,
    title: "Klare Kosten",
    desc: "Kraftstoff, Reparaturen und Rechnungen bleiben strukturiert statt in Tabellen zu verschwinden.",
  },
  {
    icon: FolderLock,
    title: "Dokumentenkontrolle",
    desc: "Zulassung, Versicherungsunterlagen und Service-PDFs bleiben beim richtigen Fahrzeug.",
  },
]

export function Features() {
  return (
    <section id="funktionen" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-primary">Kernfunktionen</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Alles, was Ihr Fahrzeugbetrieb braucht, an einem Ort.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Statt alter Zwischenablagen bekommt Ihr Team einen sichtbaren Ablauf
            für Fahrzeugakten, Fristen, Kosten und Dokumente.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <feature.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-medium">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
