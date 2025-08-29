import { MultiDeckHeader } from "@/components/multi-deck-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Building2,
  Globe,
  Lightbulb,
  Award,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Settings,
  Database,
  Cloud,
  Wrench,
  BarChart3,
  Target,
  CheckCircle,
} from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <MultiDeckHeader />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Our Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6 text-balance">
              Comprehensive Solutions
              <span className="text-accent"> Across Industries</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              From energy and infrastructure to technology and consulting, EEI's portfolio brands deliver world-class
              services tailored to meet your unique business challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Building2 className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Energy Solutions</CardTitle>
                <CardDescription>Sustainable energy for the future</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Renewable Energy Projects
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Energy Efficiency Consulting
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Grid Modernization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Energy Storage Solutions
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Globe className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Infrastructure</CardTitle>
                <CardDescription>Building tomorrow's foundations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Urban Development
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Transportation Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Smart City Solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Project Management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Lightbulb className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Technology</CardTitle>
                <CardDescription>Innovation-driven solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Digital Transformation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Cloud Solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    AI & Machine Learning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Cybersecurity
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Consulting</CardTitle>
                <CardDescription>Strategic business guidance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Strategic Planning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Operational Excellence
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Change Management
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Performance Optimization
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Services by Brand */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Services by Brand</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Explore our comprehensive service offerings across each of our specialized brands.
            </p>
          </div>

          <Tabs defaultValue="energy" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="energy">EEI Energy</TabsTrigger>
              <TabsTrigger value="infrastructure">EEI Infrastructure</TabsTrigger>
              <TabsTrigger value="technology">EEI Technology</TabsTrigger>
              <TabsTrigger value="consulting">EEI Consulting</TabsTrigger>
            </TabsList>

            <TabsContent value="energy" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <Zap className="h-8 w-8 text-accent mb-2" />
                    <CardTitle>Renewable Energy Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      End-to-end renewable energy project development including solar, wind, and hydroelectric
                      solutions.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Site assessment and feasibility studies</li>
                      <li>• Permitting and regulatory compliance</li>
                      <li>• Engineering and construction management</li>
                      <li>• Operations and maintenance</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Settings className="h-8 w-8 text-accent mb-2" />
                    <CardTitle>Energy Efficiency Consulting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Comprehensive energy audits and efficiency improvement strategies for commercial and industrial
                      clients.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Energy audits and assessments</li>
                      <li>• Efficiency upgrade recommendations</li>
                      <li>• ROI analysis and financing options</li>
                      <li>• Implementation support</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Database className="h-8 w-8 text-accent mb-2" />
                    <CardTitle>Grid Modernization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Smart grid technologies and infrastructure upgrades for utilities and energy providers.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Smart meter deployment</li>
                      <li>• Grid automation systems</li>
                      <li>• Demand response programs</li>
                      <li>• Grid resilience planning</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="infrastructure" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <Building2 className="h-8 w-8 text-accent mb-2" />
                    <CardTitle>Urban Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Large-scale urban development projects including mixed-use developments and master planning.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Master planning and design</li>
                      <li>• Zoning and permitting</li>
                      <li>• Construction management</li>
                      <li>• Community engagement</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Globe className="h-8 w-8 text-accent mb-2" />
                    <CardTitle>Transportation Systems</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Modern transportation infrastructure including highways, bridges, and public transit systems.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Highway and bridge construction</li>
                      <li>• Public transit infrastructure</li>
                      <li>• Traffic management systems</li>
                      <li>• Maintenance and rehabilitation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Wrench className="h-8 w-8 text-accent mb-2" />
                    <CardTitle>Smart City Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Integrated smart city technologies for improved urban living and municipal efficiency.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• IoT sensor networks</li>
                      <li>• Smart lighting systems</li>
                      <li>• Waste management optimization</li>
                      <li>• Public safety integration</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="technology" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <Cloud className="h-8 w-8 text-accent mb-2" />
                    <CardTitle>Digital Transformation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Complete digital transformation services to modernize business operations and customer
                      experiences.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Digital strategy development</li>
                      <li>• Legacy system modernization</li>
                      <li>• Process automation</li>
                      <li>• Change management support</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Database className="h-8 w-8 text-accent mb-2" />
                    <CardTitle>Cloud Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Enterprise cloud migration, architecture design, and managed cloud services.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Cloud migration strategy</li>
                      <li>• Multi-cloud architecture</li>
                      <li>• DevOps implementation</li>
                      <li>• 24/7 managed services</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Shield className="h-8 w-8 text-accent mb-2" />
                    <CardTitle>Cybersecurity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Comprehensive cybersecurity solutions to protect your digital assets and infrastructure.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Security assessments</li>
                      <li>• Threat monitoring and response</li>
                      <li>• Compliance management</li>
                      <li>• Security training programs</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="consulting" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <Target className="h-8 w-8 text-accent mb-2" />
                    <CardTitle>Strategic Planning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Long-term strategic planning and business development to drive sustainable growth.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Market analysis and positioning</li>
                      <li>• Growth strategy development</li>
                      <li>• Competitive intelligence</li>
                      <li>• Strategic roadmap creation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <BarChart3 className="h-8 w-8 text-accent mb-2" />
                    <CardTitle>Operational Excellence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Process optimization and operational improvements to enhance efficiency and reduce costs.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Process mapping and analysis</li>
                      <li>• Lean Six Sigma implementation</li>
                      <li>• Performance metrics design</li>
                      <li>• Continuous improvement programs</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Users className="h-8 w-8 text-accent mb-2" />
                    <CardTitle>Change Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Comprehensive change management support for organizational transformations.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Change readiness assessment</li>
                      <li>• Communication strategies</li>
                      <li>• Training and development</li>
                      <li>• Stakeholder engagement</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Why Choose EEI Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our integrated approach and proven expertise deliver exceptional results across all service areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Proven Expertise</h3>
              <p className="text-muted-foreground">
                25+ years of industry experience with a track record of successful project delivery.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Integrated Solutions</h3>
              <p className="text-muted-foreground">
                Seamless coordination across all our brands for comprehensive, end-to-end solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Measurable Results</h3>
              <p className="text-muted-foreground">
                Data-driven approach with clear KPIs and measurable outcomes for every engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90 text-pretty">
            Let's discuss how our comprehensive services can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Request Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Download Service Brochure
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
