"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import type { PortfolioItem } from "@/lib/portfolio-data"

interface PortfolioLightboxProps {
  item: PortfolioItem
  onClose: () => void
}

export function PortfolioLightbox({ item, onClose }: PortfolioLightboxProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Handle escape key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  useEffect(() => {
    const handleArrowKeys = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentImageIndex((prev) => (prev - 1 + item.images.length) % item.images.length)
      }
      if (e.key === "ArrowRight") {
        setCurrentImageIndex((prev) => (prev + 1) % item.images.length)
      }
    }
    window.addEventListener("keydown", handleArrowKeys)
    return () => window.removeEventListener("keydown", handleArrowKeys)
  }, [item.images.length])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % item.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + item.images.length) % item.images.length)
  }

  const hasMultipleImages = item.images.length > 1

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={onClose}>
      <button
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10 p-2"
        aria-label="Close"
      >
        <X className="w-8 h-8" />
      </button>

      {hasMultipleImages && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="fixed left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-full transition-all shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="fixed right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-full transition-all shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </>
      )}

      {/* Content */}
      <div className="relative max-w-6xl w-full px-4" onClick={(e) => e.stopPropagation()}>
        {/* Image container */}
        <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
          <img
            src={item.images[currentImageIndex] || "/placeholder.svg"}
            alt={`${item.title} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-contain"
          />

          {hasMultipleImages && (
            <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1.5 rounded-full text-sm backdrop-blur-sm">
              {currentImageIndex + 1} / {item.images.length}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="mt-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-2">{item.title}</h2>
          <p className="text-gray-400 text-lg">{item.description}</p>
        </div>

        {/* Image dots indicator */}
        {hasMultipleImages && (
          <div className="flex justify-center gap-2 mt-4">
            {item.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex ? "bg-amber-500 w-8" : "bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
