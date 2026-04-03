export interface PortfolioItem {
  title: string
  description: string
  images: string[] // Changed from single image to array of images
  slug: string // Added slug for URL identification
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Satin Red Tesla",
    description: "Full decal in premium satin red finish",
    images: [
      "https://res.cloudinary.com/de49zugry/image/upload/v1771668014/red-tesla-model-3-car-wrap_smli31.jpg",
      "https://res.cloudinary.com/de49zugry/image/upload/v1771668026/red-tesla-model-3-car-wrap.FRONT_vzq87w.png",
      "https://res.cloudinary.com/de49zugry/image/upload/v1771668035/red-tesla-model-3-car-wrapSIDE_eiu6kt.png",
    ],
    slug: "satin-red-tesla",
  },
]
