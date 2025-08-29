import { MultiDeckHeader } from "@/components/multi-deck-header"
import { HeroSection } from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Lightbulb, Globe, Award, Shield, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <MultiDeckHeader />
      <HeroSection />

      {/* Our Brands Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Our Portfolio of Brands</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Each brand in our portfolio represents excellence in their respective industries, backed by EEI's
              commitment to innovation and quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building2 className="h-12 w-12 text-gray-700 mb-4" />
                <CardTitle>EEI Energy</CardTitle>
                <CardDescription>Sustainable energy solutions for the future</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Leading renewable energy projects and infrastructure development.
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-gray-700 mb-4" />
                <CardTitle>EEI Infrastructure</CardTitle>
                <CardDescription>Building tomorrow's infrastructure today</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Large-scale infrastructure projects and urban development solutions.
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-gray-700 mb-4" />
                <CardTitle>EEI Technology</CardTitle>
                <CardDescription>Innovative tech solutions for modern challenges</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Cutting-edge software and digital transformation services.
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-gray-700 mb-4" />
                <CardTitle>EEI Consulting</CardTitle>
                <CardDescription>Strategic guidance for business excellence</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Expert consulting services across multiple industry verticals.
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose EEI Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 text-balance">
                Why Choose EEI as Your Partner
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Proven Track Record</h3>
                    <p className="text-muted-foreground">
                      Over 25 years of successful project delivery and client satisfaction across all our brands.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Expert Team</h3>
                    <p className="text-muted-foreground">
                      Industry-leading professionals with deep expertise in their respective fields.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Innovation Focus</h3>
                    <p className="text-muted-foreground">
                      Constantly pushing boundaries with cutting-edge solutions and sustainable practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-2xl p-8 lg:p-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground mb-6">Successful Projects Delivered</div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-accent">98%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">24/7</div>
                    <div className="text-sm text-muted-foreground">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">E</span>
                </div>
                <span className="ml-2 text-xl font-bold text-primary">EEI</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Leading corporate excellence across multiple industries with innovation and integrity.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-4">Our Brands</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    EEI Energy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    EEI Infrastructure
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    EEI Technology
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    EEI Consulting
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/about" className="hover:text-accent transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-accent transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-accent transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>📞 1-800-EEI-CORP</li>
                <li>✉️ info@eei.com</li>
                <li>📍 Corporate Headquarters</li>
                <li>New York, NY</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 EEI Corporation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
