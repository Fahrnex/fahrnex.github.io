import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { fahrnexLinks, externalLinkProps } from "@/lib/links"

const plans = [
  {
    audience: "Privatfahrer",
    name: "Basic",
    price: "Kostenlos",
    period: "",
    features: ["1 Fahrzeug", "Erinnerungen", "Dokumente"],
    cta: "Kostenlos starten",
    href: fahrnexLinks.signup,
    highlighted: false,
  },
  {
    audience: "Power-User",
    name: "Premium",
    price: "7,99 €",
    period: "/Monat",
    features: ["Bis zu 5 Fahrzeuge", "KI-Unterstützung", "Kalenderexport", "Kostenauswertung"],
    cta: "Premium wählen",
    href: fahrnexLinks.pricing,
    highlighted: true,
  },
  {
    audience: "Flottenteam",
    name: "Enterprise",
    price: "Individuell",
    period: "",
    features: ["Individuelle Skalierung", "Teamsteuerung", "Onboarding-Unterstützung"],
    cta: "Kontakt aufnehmen",
    href: fahrnexLinks.contact,
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="preise" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">Preise</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Preise für kleine Teams und einzelne Fahrzeugverantwortliche.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Starten Sie einfach, erweitern Sie bei Bedarf und buchen Sie für
            größere Setups einen betreuten Einstieg.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={
                plan.highlighted
                  ? "relative rounded-2xl border border-primary bg-card p-8 shadow-lg shadow-primary/10"
                  : "rounded-2xl border border-border bg-card p-8"
              }
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Beliebt
                </span>
              )}
              <span className="text-sm text-muted-foreground">{plan.audience}</span>
              <h3 className="mt-1 text-xl font-semibold">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-semibold tracking-tight">{plan.price}</span>
                {plan.period && (
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                )}
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={
                  plan.highlighted
                    ? "mt-8 w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    : "mt-8 w-full"
                }
                variant={plan.highlighted ? "default" : "outline"}
              >
                <a href={plan.href} {...externalLinkProps}>
                  {plan.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
