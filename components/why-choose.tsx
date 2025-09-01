"use client"

import { Lightbulb, Shield, Users } from "lucide-react"

export function WhyChoose() {
  return (
    <section className="py-20 bg-background  bg-blue-500">
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
  )
}


