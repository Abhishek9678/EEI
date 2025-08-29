import { MultiDeckHeader } from "@/components/multi-deck-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Lightbulb, Shield, TrendingUp, Heart, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <MultiDeckHeader />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              About EEI Corporation
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6 text-balance">
              Building Tomorrow's
              <span className="text-ice"> Corporate Legacy</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              For over 25 years, EEI has been at the forefront of corporate excellence, nurturing innovative brands and
              delivering exceptional value across multiple industries.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 text-balance">Our Story</h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Founded in 1999, EEI Corporation began as a vision to create a parent company that could nurture and
                  scale innovative businesses across diverse industries. What started as a small consulting firm has
                  evolved into a powerhouse of corporate excellence.
                </p>
                <p className="leading-relaxed">
                  Today, we proudly oversee four distinct brands, each a leader in their respective fields. Our approach
                  combines strategic oversight with operational independence, allowing our brands to innovate while
                  benefiting from shared resources and expertise.
                </p>
                <p className="leading-relaxed">
                  Through economic cycles, technological shifts, and global challenges, EEI has remained committed to
                  sustainable growth, ethical business practices, and delivering exceptional value to our clients and
                  stakeholders.
                </p>
              </div>
            </div>
            <div className="bg-background rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1999</div>
                  <div className="text-sm text-muted-foreground">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">4</div>
                  <div className="text-sm text-muted-foreground">Portfolio Brands</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Our Foundation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our mission, vision, and values guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-muted border-0">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  To empower exceptional brands with strategic guidance, operational excellence, and sustainable growth
                  opportunities while maintaining the highest standards of corporate integrity.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted border-0">
              <CardHeader className="text-center">
                <Lightbulb className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  To be the premier parent company recognized globally for nurturing industry-leading brands that drive
                  innovation, create value, and contribute positively to society.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted border-0">
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  Integrity, Innovation, Excellence, Sustainability, and Collaboration form the cornerstone of our
                  corporate culture and guide our relationships with all stakeholders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Meet the visionary leaders driving EEI's success and shaping the future of our portfolio brands.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-background">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">JD</span>
                </div>
                <CardTitle>John Davidson</CardTitle>
                <CardDescription>Chief Executive Officer</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  25+ years of corporate leadership experience. Former McKinsey partner with expertise in strategic
                  planning and organizational development.
                </p>
                <div className="flex justify-center gap-2">
                  <Badge variant="outline">Strategy</Badge>
                  <Badge variant="outline">Leadership</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">SR</span>
                </div>
                <CardTitle>Sarah Rodriguez</CardTitle>
                <CardDescription>Chief Operating Officer</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Expert in operational excellence and process optimization. Previously led operations at Fortune 500
                  companies across multiple sectors.
                </p>
                <div className="flex justify-center gap-2">
                  <Badge variant="outline">Operations</Badge>
                  <Badge variant="outline">Process</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">MC</span>
                </div>
                <CardTitle>Michael Chen</CardTitle>
                <CardDescription>Chief Financial Officer</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Financial strategist with deep expertise in corporate finance, M&A, and capital allocation. CPA with
                  MBA from Wharton.
                </p>
                <div className="flex justify-center gap-2">
                  <Badge variant="outline">Finance</Badge>
                  <Badge variant="outline">M&A</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Our Approach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              How we create value and drive success across our portfolio of brands.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Strategic Oversight</h3>
              <p className="text-muted-foreground">
                Providing strategic direction while maintaining operational independence for each brand.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Shared Resources</h3>
              <p className="text-muted-foreground">
                Leveraging collective expertise, technology, and resources across all portfolio brands.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Growth Focus</h3>
              <p className="text-muted-foreground">
                Identifying and capitalizing on growth opportunities through data-driven insights.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Innovation Culture</h3>
              <p className="text-muted-foreground">
                Fostering innovation and continuous improvement across all business units.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Ready to Learn More About EEI?</h2>
          <p className="text-xl mb-8 opacity-90 text-pretty">
            Discover how our approach to corporate excellence can benefit your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Contact Our Team
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              View Our Services
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
            <p>&copy; 2025 EEI Corporation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
