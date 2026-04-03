import { Button } from "@/components/ui/button"
import Link from "next/link"
export function CompanyInfo() {
  return (
    <section id="about" className="py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600">
              WrapProject
            </span>
          </h2>

          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto font-semibold tracking-normal">
            {"We offer a range of high-quality customization services, including vinyl wraps, paint protection film, window tinting, interior and exterior designing, plastics, and lighting."}
          </p>

          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto font-semibold">
            We serve the entire South West, covering Exeter, Plymouth, Newton Abbot, Taunton, Torquay, Cornwall and areas nearby.  
          </p>

          <div className="pt-4">
            <Link href="/#services">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg px-8 h-14">
                Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
