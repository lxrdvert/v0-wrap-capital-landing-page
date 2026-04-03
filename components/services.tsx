import { Card, CardContent } from "@/components/ui/card"
import { Wrench, Palette, Sparkles, Shield, Zap, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Palette,
    title: "Decals",
    description: "Completely change the look of your vehicle with an external colour change.",
  },
  {
    icon: Sparkles,
    title: "Vehicle Wraps",
    description: "Anything from full liveries to simple advertising stickers.",
  },
  {
    icon: Wrench,
    title: "Custom Wrapping",
    description: "Customise a smaller part of your vehicle. Dechrome? Done. Mirror caps? Sorted.",
  },
  {
    icon: Zap,
    title: "Light Tinting",
    description: "Smoking your front or rear lights can add a sleek look to your vehicle.",
  },
  {
    icon: Shield,
    title: "Paint Protection Film",
    description: "Our PPF boasts a 10 year guarantee and self healing properties for ultimate protection.",
  },
  {
    icon: Home,
    title: "Interior & Exterior",
    description: "Exterior trim restoration for plastics and interior design wraps for style and protection.",
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="relative py-32 bg-gradient-to-b from-background to-secondary/20 overflow-hidden scroll-mt-20"
    >
      <div
        className="absolute top-0 left-0 right-0 h-32 bg-black z-0"
        style={{
          clipPath: "polygon(0 0, 100% 40%, 100% 100%, 0 100%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="text-center mb-20 space-y-6">
          <h2 className="font-black text-foreground text-5xl tracking-tighter">{"A more organised way to customise."}</h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto text-pretty leading-relaxed font-semibold">
            {
              "Our services are built around the WrapProject app, allowing you to select your vehicle, choose the right services, and submit everything clearly before work begins."
            }
          </p>
          <Link href="https://v0-wrap-project-1.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Button className="mt-4 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold border border-amber-400">
              {"Try WrapProject Today"}
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-black border-2 border-amber-500/30 hover:border-amber-500"
            >
              <CardContent className="p-8 space-y-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="w-10 h-10 text-black" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed font-semibold">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-black z-0"
        style={{
          clipPath: "polygon(0 100%, 100% 100%, 100% 60%, 0 0)",
        }}
      />
    </section>
  )
}
