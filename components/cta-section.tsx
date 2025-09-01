"use client"

import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Ready to Partner with Industry Leaders?</h2>
        <p className="text-xl mb-8 opacity-90 text-pretty">
          Join hundreds of satisfied clients who trust EEI for their most important projects.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary">
            Get Started Today
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
          >
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}


