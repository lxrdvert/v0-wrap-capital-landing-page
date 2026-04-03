"use client"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">WrapProject</h3>
            <p className="text-foreground leading-relaxed font-semibold">
              Specialising in high-quality customisation services across the region.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#services" className="text-foreground hover:text-primary transition-colors font-semibold">
                  Services
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-foreground hover:text-primary transition-colors font-semibold">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/#about" className="text-foreground hover:text-primary transition-colors font-semibold">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-foreground hover:text-primary transition-colors font-semibold">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.tiktok.com/@wrapprojecttattoo?_r=1&_t=ZN-92mJfrxCrSA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg overflow-hidden hover:scale-110 transition-transform"
                aria-label="TikTok"
              >
                <Image
                  src="/social/tiktok.png"
                  alt="TikTok"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </a>
              <a
                href="https://www.instagram.com/wrapprojecttattoo?igsh=aDR5YWZ4aXJ0enh6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg overflow-hidden hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Image
                  src="/social/instagram.png"
                  alt="Instagram"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </a>
              <a
                href="https://www.snapchat.com/add/wrapproject?share_id=Cj-5Ufp_qtA&locale=en-US"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg overflow-hidden hover:scale-110 transition-transform"
                aria-label="Snapchat"
              >
                <Image
                  src="/social/snapchat.png"
                  alt="Snapchat"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center text-sm text-foreground font-semibold">
          <p>Copyright {new Date().getFullYear()} © All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
