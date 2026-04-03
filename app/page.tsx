import { Hero } from "@/components/hero"
import { CompanyInfo } from "@/components/company-info"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CompanyInfo />
      <Services />
      <Portfolio />
      <ContactSection />
      <Footer />
    </main>
  )
}
