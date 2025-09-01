"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

// brands removed per request

export function MultiDeckHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Trigger enter animation after first paint
    const timer = requestAnimationFrame(() => setIsMounted(true))
    return () => cancelAnimationFrame(timer)
  }, [])

  return (
    <header
      className={
        "sticky top-0 z-50 w-full border-b border-border transition-all duration-500 ease-out text-white " +
        (isMounted
          ? "opacity-100 translate-y-0 bg-gray/80 backdrop-blur"
          : "opacity-0 -translate-y-4 bg-black")
      }
    >
      {/* Top deck - Brand showcase */}
      

      {/* Main navigation deck */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" aria-label="EEI Home" className="flex items-center">
                <Image
                  src="/Elogo.jpg"
                  alt="EEI logo"
                  width={120}
                  height={32}
                  priority
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              
              <Link href="/about" className="text-white hover:text-white/80 transition-colors font-medium">
                About
              </Link>
              <Link href="/services" className="text-white hover:text-white/80 transition-colors font-medium">
                Services
              </Link>
              {/* Franchise link and brands dropdown removed */}

              <Link href="/contact" className="text-white hover:text-white/80 transition-colors font-medium">
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <Button className="bg-transparent text-white border border-white hover:bg-white/10">Get Started</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-border text-white">
            <div className="px-4 py-4 space-y-4">
              <Link href="/" className="block text-white hover:text-white/80 transition-colors font-medium">
                Home
              </Link>
              <Link href="/about" className="block text-white hover:text-white/80 transition-colors font-medium">
                About
              </Link>
              <Link href="/services" className="block text-white hover:text-white/80 transition-colors font-medium">
                Services
              </Link>
              {/* Franchise and brands section removed */}
              <Link href="/contact" className="block text-white hover:text-white/80 transition-colors font-medium">
                Contact
              </Link>
              <Button className="w-full bg-transparent text-white border border-white hover:bg-white/10">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
