import { ShieldCheck, Lock, Activity, MapPin } from "lucide-react"

const signals = [
  {
    icon: ShieldCheck,
    title: "Für GDPR-Erwartungen gebaut",
    desc: "Entwickelt und betrieben mit deutschem und EU-Datenschutz im Blick.",
  },
  {
    icon: Lock,
    title: "Daten bleiben Ihre Daten",
    desc: "Fahrzeugdaten werden nicht als Handelsware behandelt.",
  },
  {
    icon: Activity,
    title: "Betrieb aktiv überwacht",
    desc: "Servicegesundheit und Kernfunktionen werden laufend beobachtet.",
  },
  {
    icon: MapPin,
    title: "Gebaut in Deutschland",
    desc: "EU-Datenschutz und lokale Abläufe werden von Anfang an mitgedacht.",
  },
]

export function Privacy() {
  return (
    <section className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-primary">Datenschutz</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Klare Datenschutz- und Vertrauenssignale.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Keine aufgeblasenen Versprechen, sondern konkrete Hinweise dazu, wie
            Fahrnex mit Fahrzeugdaten und Betriebsabläufen umgeht.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {signals.map((signal, i) => (
            <div key={signal.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <signal.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-sm text-muted-foreground/60">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-medium">{signal.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {signal.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
