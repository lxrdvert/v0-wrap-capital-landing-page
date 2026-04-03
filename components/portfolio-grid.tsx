"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { PortfolioLightbox } from "@/components/portfolio-lightbox"
import { portfolioItems, type PortfolioItem } from "@/lib/portfolio-data"

export function PortfolioGrid() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  useEffect(() => {
    const itemSlug = searchParams.get("item")
    if (itemSlug) {
      const item = portfolioItems.find((p) => p.slug === itemSlug)
      if (item) {
        setSelectedItem(item)
      }
    }
  }, [searchParams])

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item)
  }

  const handleCloseLightbox = () => {
    setSelectedItem(null)
    if (searchParams.has("item")) {
      router.replace("/portfolio", { scroll: false })
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleItemClick(item)}
            className="relative aspect-[4/3] bg-zinc-900 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer w-full"
          >
            <img
              src={item.images[0] || "/placeholder.svg"}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {item.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      {selectedItem && <PortfolioLightbox item={selectedItem} onClose={handleCloseLightbox} />}
    </>
  )
}
