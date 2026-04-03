import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PortfolioGrid } from "@/components/portfolio-grid"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-6xl font-black text-white text-balance">
              OUR{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600">
                PORTFOLIO
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto text-pretty leading-relaxed">
              Explore our collection of custom vehicle wraps and styling projects
            </p>
          </div>

          <Suspense fallback={null}>
            <PortfolioGrid />
          </Suspense>
        </div>
      </main>

      <Footer />
    </div>
  )
}
