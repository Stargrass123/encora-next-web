import Header from "components/Header"
import Hero from "components/Hero"
import ProductModules from "components/ProductModules"
import AISection from "components/AISection"
import Solutions from "components/Solutions"
import ResultsBand from "components/ResultsBand"
import ClosingCTA from "components/ClosingCTA"
import { StickyCTA } from "components/StickyCTA"

export default function Page() {
  return (
    <main>
      <Hero />
      <ProductModules />
      <AISection />
      <Solutions />
      <ResultsBand />
      <ClosingCTA />
      <StickyCTA />
    </main>
  )
}
