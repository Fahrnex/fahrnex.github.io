"use client"

import { useState } from "react"
import { Mic, Sparkles, CarFront, Send } from "lucide-react"

const capabilities = [
  {
    icon: Mic,
    title: "Sprachgeführter Support",
    desc: "Sprechen Sie natürlich mit dem Assistenten, statt jedes Detail manuell einzutippen.",
  },
  {
    icon: Sparkles,
    title: "Geführte KI-Aktionen",
    desc: "Der Assistent kann Rückfragen stellen, fehlende Details sammeln und Sie durch typische Fahrzeugaufgaben führen.",
  },
  {
    icon: CarFront,
    title: "Erstellt Fahrzeugdatensätze",
    desc: "Nach der Anmeldung kann der Assistent Fahrzeuge anlegen, Erinnerungen erstellen, Ausgaben erfassen oder Profildaten aktualisieren.",
  },
]

const chat = [
  { role: "user", text: "Lege ein neues Fahrzeug für mich an" },
  { role: "ai", text: "Gerne. Welche Marke hat das Fahrzeug?" },
  { role: "user", text: "Toyota" },
  { role: "ai", text: "Ich frage noch ein paar Angaben ab und speichere das Fahrzeug dann automatisch." },
]

export function AiAssistant() {
  const [input, setInput] = useState("")

  return (
    <section className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-medium text-primary">KI, Support und Aktionen</span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Hilfreiche Unterstützung, wenn Nutzer nicht wissen, was als Nächstes kommt.
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Der Assistent beantwortet Produktfragen, sammelt fehlende Angaben
              und hilft Premium-Nutzern dabei, echte Datensätze schneller anzulegen.
            </p>
            <div className="mt-8 space-y-5">
              {capabilities.map((cap) => (
                <div key={cap.title} className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <cap.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-medium">{cap.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-xl">
            <div className="flex items-center gap-2 border-b border-border pb-4">
              <Sparkles className="size-4 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium">Fragen, bestätigen, speichern</span>
            </div>
            <div className="space-y-3 py-5">
              {chat.map((msg, i) => (
                <div
                  key={i}
                  className={msg.role === "user" ? "flex justify-end" : "flex justify-start"}
                >
                  <p
                    className={
                      msg.role === "user"
                        ? "max-w-[80%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground"
                        : "max-w-[80%] rounded-2xl rounded-bl-sm bg-secondary px-4 py-2.5 text-sm text-secondary-foreground"
                    }
                  >
                    {msg.text}
                  </p>
                </div>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setInput("")
              }}
              className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Nachricht an den Assistenten…"
                className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                aria-label="Nachricht an den Assistenten"
              />
              <button
                type="submit"
                className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
                aria-label="Senden"
              >
                <Send className="size-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
