"use client"

import { useState } from "react"
import { Car, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { fahrnexLinks, externalLinkProps } from "@/lib/links"

const navLinks = [
  { label: "Funktionen", href: "#funktionen" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Vergleich", href: "#vergleich" },
  { label: "Preise", href: "#preise" },
  { label: "FAQ", href: "#faq" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Car className="size-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-semibold tracking-tight">Fahrnex</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Hauptnavigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
            <a href={fahrnexLinks.login} {...externalLinkProps}>
              Anmelden
            </a>
          </Button>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href={fahrnexLinks.signup} {...externalLinkProps}>
              Kostenlos starten
            </a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 px-1">
              <Button asChild variant="outline">
                <a href={fahrnexLinks.login} {...externalLinkProps}>
                  Anmelden
                </a>
              </Button>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={fahrnexLinks.signup} {...externalLinkProps}>
                  Kostenlos starten
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
