import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Comparison } from "@/components/comparison"
import { AiAssistant } from "@/components/ai-assistant"
import { Privacy } from "@/components/privacy"
import { LiveData } from "@/components/live-data"
import { Pricing } from "@/components/pricing"
import { UseCases } from "@/components/use-cases"
import { CtaSection } from "@/components/cta-section"
import { Faq } from "@/components/faq"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Comparison />
        <AiAssistant />
        <Privacy />
        <LiveData />
        <Pricing />
        <UseCases />
        <CtaSection />
        <Faq />
      </main>
      <SiteFooter />
    </>
  )
}
