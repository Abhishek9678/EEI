"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Lightbulb, Globe, Award } from "lucide-react"
import gsap from "gsap"

export function BrandsGrid() {
  const titleRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    // Title animation
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power2.out" 
      }
    )

    // Staggered card animations
    const cards = cardsRef.current?.children
    if (cards) {
      gsap.fromTo(cards,
        { opacity: 0, y: 50, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.8, 
          stagger: 0.15,
          ease: "power2.out",
          delay: 0.3
        }
      )
    }

    // Card hover effects
    const cardElements = document.querySelectorAll('.brand-card')
    cardElements.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { 
          y: -10, 
          scale: 1.02, 
          duration: 0.3,
          ease: "power2.out"
        })
      })
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { 
          y: 0, 
          scale: 1, 
          duration: 0.3,
          ease: "power2.out"
        })
      })
    })

    // Icon animations
    const icons = document.querySelectorAll('.brand-icon')
    icons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, { 
          rotation: 360, 
          scale: 1.1, 
          duration: 0.6,
          ease: "power2.out"
        })
      })
      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, { 
          rotation: 0, 
          scale: 1, 
          duration: 0.6,
          ease: "power2.out"
        })
      })
    })
  }, [])

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Our Portfolio of Brands</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Each brand in our portfolio represents excellence in their respective industries, backed by EEI's
            commitment to innovation and quality.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="brand-card bg-background hover:shadow-lg transition-shadow">
            <CardHeader>
              <Building2 className="brand-icon h-12 w-12 text-gray-700 mb-4" />
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

          <Card className="brand-card bg-background hover:shadow-lg transition-shadow">
            <CardHeader>
              <Globe className="brand-icon h-12 w-12 text-gray-700 mb-4" />
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

          <Card className="brand-card bg-background hover:shadow-lg transition-shadow">
            <CardHeader>
              <Lightbulb className="brand-icon h-12 w-12 text-gray-700 mb-4" />
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

          <Card className="brand-card bg-background hover:shadow-lg transition-shadow">
            <CardHeader>
              <Award className="brand-icon h-12 w-12 text-gray-700 mb-4" />
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
  )
}


