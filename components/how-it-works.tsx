const steps = [
  {
    step: "Schritt 1",
    title: "Fahrzeug hinzufügen",
    desc: "Mit VIN-Suche oder manuellen Details starten und anschließend Dokumente, Kilometerstand und TÜV-Informationen ergänzen.",
  },
  {
    step: "Schritt 2",
    title: "Fälligkeiten planen",
    desc: "Service-, Kilometer-, Verlängerungs- und Compliance-Erinnerungen anlegen, bevor etwas dringend wird.",
  },
  {
    step: "Schritt 3",
    title: "Echte Aktivitäten erfassen",
    desc: "Servicebesuche, Ausgaben, Belege, Dokumente, Supportanfragen und Telemetrie-Updates erfassen.",
  },
  {
    step: "Schritt 4",
    title: "Auf Basis der Übersicht handeln",
    desc: "Dashboards, KI-Vorschläge, Verlängerungsansichten und Kalenderexport nutzen, um die Arbeit voranzubringen.",
  },
]

export function HowItWorks() {
  return (
    <section id="ablauf" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-primary">Wie der Arbeitsablauf aussieht</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Von einem Fahrzeugdatensatz zu einem ruhigeren Tagesablauf.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Fahrnex zeigt, wie Arbeit von verstreuten Einzelaufgaben zu einem
            sichtbaren System wird – ein kompakter Ablauf für jedes Fahrzeug.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <div key={item.step} className="bg-card p-6">
              <span className="text-sm font-mono text-primary">{item.step}</span>
              <h3 className="mt-4 text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
