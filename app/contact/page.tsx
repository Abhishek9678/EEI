import { MultiDeckHeader } from "@/components/multi-deck-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Building2, Globe, Lightbulb, Award, Send, Calendar } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <MultiDeckHeader />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Contact Us
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6 text-balance">
              Let's Start a<span className="text-accent"> Conversation</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Ready to transform your business? Our team of experts is here to help you find the right solutions across
              all our portfolio brands.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="bg-background">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john.doe@company.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Company Name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="energy">EEI Energy - Renewable Energy Solutions</SelectItem>
                        <SelectItem value="infrastructure">EEI Infrastructure - Development Projects</SelectItem>
                        <SelectItem value="technology">EEI Technology - Digital Solutions</SelectItem>
                        <SelectItem value="consulting">EEI Consulting - Strategic Guidance</SelectItem>
                        <SelectItem value="multiple">Multiple Services</SelectItem>
                        <SelectItem value="other">Other / Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Project Budget Range</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-50k">Under $50,000</SelectItem>
                        <SelectItem value="50k-250k">$50,000 - $250,000</SelectItem>
                        <SelectItem value="250k-1m">$250,000 - $1,000,000</SelectItem>
                        <SelectItem value="1m-5m">$1,000,000 - $5,000,000</SelectItem>
                        <SelectItem value="over-5m">Over $5,000,000</SelectItem>
                        <SelectItem value="discuss">Prefer to discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project, goals, and how we can help..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  We're here to help you succeed. Whether you need strategic guidance, technical expertise, or
                  comprehensive solutions, our team is ready to support your goals.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Phone</h3>
                    <p className="text-muted-foreground">1-800-EEI-CORP (1-800-334-2677)</p>
                    <p className="text-sm text-muted-foreground">Monday - Friday, 8:00 AM - 6:00 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email</h3>
                    <p className="text-muted-foreground">info@eei.com</p>
                    <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Headquarters</h3>
                    <p className="text-muted-foreground">
                      EEI Corporation
                      <br />
                      1234 Corporate Plaza, Suite 500
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Schedule a Meeting</h3>
                    <p className="text-muted-foreground mb-2">Book a consultation with our experts</p>
                    <Button variant="outline" size="sm">
                      Schedule Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand-Specific Contacts */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Contact Our Brands Directly</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Need specific expertise? Reach out directly to our specialized brand teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Building2 className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>EEI Energy</CardTitle>
                <CardDescription>Renewable energy solutions</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="space-y-2 text-sm">
                  <p className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    energy@eei.com
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    1-800-EEI-ENERGY
                  </p>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Contact Energy Team
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Globe className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>EEI Infrastructure</CardTitle>
                <CardDescription>Development & construction</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="space-y-2 text-sm">
                  <p className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    infrastructure@eei.com
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    1-800-EEI-BUILD
                  </p>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Contact Infrastructure Team
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Lightbulb className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>EEI Technology</CardTitle>
                <CardDescription>Digital transformation</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="space-y-2 text-sm">
                  <p className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    technology@eei.com
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    1-800-EEI-TECH
                  </p>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Contact Technology Team
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>EEI Consulting</CardTitle>
                <CardDescription>Strategic business guidance</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="space-y-2 text-sm">
                  <p className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    consulting@eei.com
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    1-800-EEI-CONSULT
                  </p>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Contact Consulting Team
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Our Locations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              With offices across key markets, we're positioned to serve clients globally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  New York (HQ)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  1234 Corporate Plaza, Suite 500
                  <br />
                  New York, NY 10001
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  Mon-Fri: 8:00 AM - 6:00 PM EST
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  +1 (212) 555-0100
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  Los Angeles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  5678 Innovation Drive
                  <br />
                  Los Angeles, CA 90210
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  Mon-Fri: 8:00 AM - 6:00 PM PST
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  +1 (310) 555-0200
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  Chicago
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  9012 Business Center
                  <br />
                  Chicago, IL 60601
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  Mon-Fri: 8:00 AM - 6:00 PM CST
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  +1 (312) 555-0300
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Quick answers to common questions about working with EEI.
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How quickly can you respond to inquiries?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We respond to all inquiries within 24 hours during business days. For urgent matters, please call our
                  main line at 1-800-EEI-CORP for immediate assistance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you work with companies of all sizes?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we work with organizations ranging from startups to Fortune 500 companies. Our diverse portfolio
                  of brands allows us to scale our services to meet your specific needs and budget.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can you provide services across multiple areas?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely. One of our key advantages is the ability to coordinate services across our portfolio
                  brands, providing integrated solutions that span energy, infrastructure, technology, and consulting.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's the typical project timeline?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Project timelines vary significantly based on scope and complexity. During our initial consultation,
                  we'll provide a detailed timeline and milestone schedule tailored to your specific requirements.
                </p>
              </CardContent>
            </Card>
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
