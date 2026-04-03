"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { portfolioItems } from "@/lib/portfolio-data"

export function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Our Latest Work</h2>
          <p className="text-xl text-foreground max-w-2xl mx-auto text-pretty leading-relaxed font-semibold">
            Explore our portfolio of stunning vehicle transformations and custom projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {portfolioItems.map((item, index) => (
            <Link key={index} href={`/portfolio?item=${item.slug}`}>
              <Card
                className="group overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={item.images[0] || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-60"
                    }`}
                  />
                  <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p
                      className={`text-sm text-white/90 transition-all duration-300 ${
                        hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                      }`}
                    >
                      {item.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/portfolio">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg px-8 h-14">
              View Full Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
