"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "Ist Fahrnex kostenlos nutzbar?",
    a: "Ja. Fahrnex bietet einen kostenlosen Basic-Plan für den Einstieg. Bezahlte Pläne sind für Nutzer und Teams gedacht, die mehr Fahrzeuge, bessere Übersicht und gemeinsame Workflows brauchen.",
  },
  {
    q: "Ist Fahrnex GDPR-konform?",
    a: "Fahrnex wird mit deutschem und EU-Datenschutz im Blick entwickelt und betrieben. Ihre Fahrzeugdaten bleiben Ihre Daten und werden nicht als Handelsware behandelt.",
  },
  {
    q: "Kann ich eine Fahrzeugflotte verwalten?",
    a: "Ja. Mit den Premium- und Enterprise-Plänen verwalten Sie mehrere Fahrzeuge, Erinnerungen und Dokumente in einer gemeinsamen Sicht – ideal für kleine Flotten und Betriebe.",
  },
  {
    q: "Funktioniert es auf Mobilgeräten?",
    a: "Fahrnex ist für die Nutzung im Büro und unterwegs gebaut. Die Oberfläche passt sich an Mobilgeräte an, sodass Sie Fristen und Dokumente überall im Blick behalten.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-medium text-primary">FAQ</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Häufige Fragen
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Antworten auf die wichtigsten Fragen vor dem Start.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={faq.q} className="overflow-hidden rounded-xl border border-border bg-card">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium">{faq.q}</span>
                  {isOpen ? (
                    <Minus className="size-5 shrink-0 text-primary" aria-hidden="true" />
                  ) : (
                    <Plus className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
                  )}
                </button>
                {isOpen && (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
