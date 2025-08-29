"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const brands = [
  { name: "EEI Energy", href: "/brands/energy" },
  { name: "EEI Infrastructure", href: "/brands/infrastructure" },
  { name: "EEI Technology", href: "/brands/technology" },
  { name: "EEI Consulting", href: "/brands/consulting" },
]

export function MultiDeckHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-background border-b border-border">
      {/* Top deck - Brand showcase */}
      <div className="bg-muted py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="hidden md:flex items-center space-x-6">
              <span>Our Brands:</span>
              {brands.map((brand) => (
                <Link key={brand.name} href={brand.href} className="hover:text-primary transition-colors">
                  {brand.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <span>📞 1-800-EEI-CORP</span>
              <span>✉️ info@eei.com</span>
            </div>
          </div>
        </div>
      </div>

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
              <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
                About
              </Link>
              <Link href="/services" className="text-foreground hover:text-primary transition-colors font-medium">
                Services
              </Link>
              <Link  
              href="/franchise" 
              className="text-foreground hover:text-primary transition-colors font-medium"
               >
                Franchise
               </Link>

              {/* Brands dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors font-medium">
                  Our Brands
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {brands.map((brand) => (
                    <DropdownMenuItem key={brand.name} asChild>
                      <Link href={brand.href}>{brand.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">Get Started</Button>
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
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-4 py-4 space-y-4">
              <Link href="/" className="block text-foreground hover:text-primary transition-colors font-medium">
                Home
              </Link>
              <Link href="/about" className="block text-foreground hover:text-primary transition-colors font-medium">
                About
              </Link>
              <Link href="/services" className="block text-foreground hover:text-primary transition-colors font-medium">
                Services
              </Link>
              <Link href="/franchise" className="block text-foreground hover:text-primary transition-colors font-medium">
                Franchise
              </Link>
              <div className="space-y-2">
                <span className="block text-muted-foreground text-sm font-medium">Our Brands</span>
                {brands.map((brand) => (
                  <Link
                    key={brand.name}
                    href={brand.href}
                    className="block pl-4 text-foreground hover:text-primary transition-colors"
                  >
                    {brand.name}
                  </Link>
                ))}
              </div>
              <Link href="/contact" className="block text-foreground hover:text-accent transition-colors font-medium">
                Contact
              </Link>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
