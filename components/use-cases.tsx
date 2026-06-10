const cases = [
  {
    num: "01",
    title: "Privater Fahrzeughalter",
    desc: "Behalten Sie TÜV, Versicherung und Wartung im Blick, ohne Fristen zu verpassen.",
    result: "Weniger Stress rund um Termine, Unterlagen und Alltagsorganisation.",
  },
  {
    num: "02",
    title: "Kleines Unternehmen mit mehreren Fahrzeugen",
    desc: "Ordnen Sie Fahrzeuge, Kosten und Servicehistorie für den täglichen Betrieb.",
    result: "Weniger manuelle Nachverfolgung und mehr Klarheit über Fahrzeugkosten.",
  },
  {
    num: "03",
    title: "Werkstatt oder Flottenteam",
    desc: "Halten Sie mehrere Fahrzeuge, Erinnerungen und Dokumente in einer gemeinsamen Sicht.",
    result: "Konstantere Fahrzeugbereitschaft und weniger Überraschungen im Tagesgeschäft.",
  },
]

export function UseCases() {
  return (
    <section className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-primary">Anwendungsfälle</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            So wird Fahrnex im Alltag nützlich.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Diese Beispiele zeigen reale Einsatzrichtungen für Fahrer,
            Werkstätten und kleine Flotten.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {cases.map((item) => (
            <div key={item.num} className="flex flex-col rounded-2xl border border-border bg-card p-6">
              <span className="font-mono text-sm text-primary">{item.num}</span>
              <h3 className="mt-4 text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
              <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-foreground/80">
                {item.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
