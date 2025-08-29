import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Users, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-background py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight text-balance">
                Leading the Future of 
                <span className="text-blue-600 hover:underline"> Corporate Excellence</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                EEI is a trusted parent company driving innovation across multiple industries. We empower our portfolio
                of brands to deliver exceptional value and sustainable growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Explore Our Brands
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More About EEI
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">Portfolio Brands</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Global Clients</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-muted rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-background rounded-xl p-6 shadow-sm">
                  <Shield className="h-8 w-8 text-gray-700 mb-4" />
                  <h3 className="font-semibold text-primary mb-2">Trusted Leadership</h3>
                  <p className="text-sm text-muted-foreground">Industry-leading expertise across all sectors</p>
                </div>
                <div className="bg-background rounded-xl p-6 shadow-sm">
                  <Users className="h-8 w-8 text-gray-700 mb-4" />
                  <h3 className="font-semibold text-primary mb-2">Global Reach</h3>
                  <p className="text-sm text-muted-foreground">Serving clients worldwide with excellence</p>
                </div>
                <div className="bg-background rounded-xl p-6 shadow-sm col-span-2">
                  <Zap className="h-8 w-8 text-gray-700 mb-4" />
                  <h3 className="font-semibold text-primary mb-2">Innovation First</h3>
                  <p className="text-sm text-muted-foreground">
                    Driving technological advancement and sustainable solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
