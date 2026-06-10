import { Button } from "@/components/ui/button"
import { fahrnexLinks, externalLinkProps } from "@/lib/links"

export function CtaSection() {
  return (
    <section className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 text-center sm:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-48 max-w-md rounded-full bg-primary/20 blur-3xl"
          />
          <div className="relative">
            <span className="text-sm font-medium text-primary">Nächster Schritt</span>
            <h2 className="mx-auto mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Starten Sie mit einem klareren System für Fahrzeuge, Termine und Unterlagen.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Testen Sie Fahrnex kostenlos, sehen Sie sich die Funktionen an oder
              prüfen Sie zuerst den VIN-Decoder.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={fahrnexLinks.signup} {...externalLinkProps}>
                  Kostenlos starten
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={fahrnexLinks.features} {...externalLinkProps}>
                  Funktionen ansehen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
