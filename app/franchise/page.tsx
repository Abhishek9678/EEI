import { MultiDeckHeader } from "@/components/multi-deck-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, Target } from "lucide-react"

export default function FranchisePage() {
  return (
    <div className="min-h-screen bg-background">
      <MultiDeckHeader />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Franchise Opportunities
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6 text-balance">
              Partner With
              <span className="text-accent"> EEI</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Join our growing network and build a successful business backed by EEI's trusted brands, training, and
              support.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background">
              <CardHeader className="text-center">
                <Building2 className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Proven Brands</CardTitle>
                <CardDescription>Operate with the strength of recognized EEI brands.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Access established playbooks, vendor partnerships, and national marketing.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Training & Support</CardTitle>
                <CardDescription>Comprehensive onboarding and ongoing mentorship.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  From launch to growth stages, our team supports operations, sales, and hiring.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>High-Growth Markets</CardTitle>
                <CardDescription>Tap into demand across energy, infra, tech, and consulting.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Diversified categories reduce risk and enable multi-unit expansion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Ready to Start Your Franchise?</h2>
          <p className="text-xl mb-8 opacity-90 text-pretty">
            Tell us about your goals and preferred market. We'll get in touch shortly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">Apply Now</Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent">
              Download Info Kit
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}


