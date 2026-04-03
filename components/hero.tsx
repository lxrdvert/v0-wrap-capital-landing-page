import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/professional-automotive-workshop-interior-with-mod.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-balance leading-tight">
            <span className="block text-white">VEHICLE STYLING,</span>
            <span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600"
              style={{
                WebkitTextStroke: "1.5px",
                WebkitTextStrokeColor: "#fbbf24",
                paintOrder: "stroke fill",
              }}
            >
              DONE PROPERLY
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto text-pretty leading-relaxed font-semibold">
            Custom wraps and visual upgrades, planned digitally and applied professionally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link href="/portfolio">
              <Button
                size="lg"
                className="text-lg px-10 h-14 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold border-2 border-amber-400"
              >
                Our Work
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-background z-10"
        style={{
          clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 60%)",
        }}
      />
    </section>
  )
}
