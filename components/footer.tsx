"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black py-12 text-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold">E</span>
              </div>
              <span className="ml-2 text-xl font-bold">EEI</span>
            </div>
            <p className="text-white/70 text-sm">
              Leading corporate excellence across multiple industries with innovation and integrity.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Our Brands</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="#" className="hover:text-white transition-colors">EEI Energy</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">EEI Infrastructure</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">EEI Technology</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">EEI Consulting</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Careers</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>📞 1-800-EEI-CORP</li>
              <li>✉️ info@eei.com</li>
              <li>📍 Corporate Headquarters</li>
              <li>New York, NY</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-white/60">
          <p>&copy; 2024 EEI Corporation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


