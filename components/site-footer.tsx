"use client"

import { Car, ArrowRight } from "lucide-react"

const footerLinks = [
  {
    title: "Produkt",
    links: ["Funktionen", "Preise", "VIN-Decoder", "Live-Kraftstoffpreise"],
  },
  {
    title: "Unternehmen",
    links: ["Über uns", "Blog", "Kontakt", "Demo buchen"],
  },
  {
    title: "Rechtliches",
    links: ["Impressum", "Datenschutz", "Sicherheit", "AGB"],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_2fr]">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Car className="size-5" aria-hidden="true" />
              </span>
              <span className="text-lg font-semibold tracking-tight">Fahrnex</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Flottenverwaltung für kleine Teams. Dokumente, Fristen und
              Fahrzeugkosten in einer gemeinsamen Sicht.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2"
            >
              <input
                type="email"
                placeholder="E-Mail für Updates"
                aria-label="E-Mail-Adresse"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
                aria-label="Updates erhalten"
              >
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerLinks.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-medium">{col.title}</h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fahrnex. Alle Rechte vorbehalten.
          </p>
          <p className="text-sm text-muted-foreground">
            Gebaut in Deutschland · info@fahrnex.de
          </p>
        </div>
      </div>
    </footer>
  )
}
