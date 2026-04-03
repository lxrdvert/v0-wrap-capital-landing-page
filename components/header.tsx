"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-amber-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/wrapproject-logo.png" alt="WrapProject Tattoo" className="h-16 md:h-20 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#services" className="text-white hover:text-amber-400 transition-colors font-medium">
              Services
            </Link>
            <Link href="/portfolio" className="text-white hover:text-amber-400 transition-colors font-medium">
              Portfolio
            </Link>
            <Link href="/#contact" className="text-white hover:text-amber-400 transition-colors font-medium">
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden text-white hover:text-amber-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-amber-500/20 pt-4">
            <Link
              href="/#services"
              className="text-white hover:text-amber-400 transition-colors font-medium text-lg"
              onClick={handleLinkClick}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-white hover:text-amber-400 transition-colors font-medium text-lg"
              onClick={handleLinkClick}
            >
              Portfolio
            </Link>
            <Link
              href="/#contact"
              className="text-white hover:text-amber-400 transition-colors font-medium text-lg"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
