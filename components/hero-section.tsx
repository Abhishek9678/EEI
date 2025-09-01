"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Users, Zap } from "lucide-react"
import gsap from "gsap"

export function HeroSection() {
  const videoRef = useRef(null)
  const textOverlayRef = useRef(null)
  const contentRef = useRef(null)
  const statsRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    // Video fade in
    gsap.fromTo(videoRef.current,
      { opacity: 0, scale: 1.1 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 2, 
        ease: "power2.out" 
      }
    )

    // Text overlay animation
    gsap.fromTo(textOverlayRef.current,
      { opacity: 0, y: 50, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 1.5, 
        ease: "power3.out",
        delay: 0.5
      }
    )

    // Content section animation
    gsap.fromTo(contentRef.current,
      { opacity: 0, x: -100 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1.2, 
        ease: "power2.out",
        delay: 0.8
      }
    )

    // Stats animation
    gsap.fromTo(statsRef.current,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power2.out",
        delay: 1.2
      }
    )

    // Cards animation
    gsap.fromTo(cardsRef.current,
      { opacity: 0, x: 100 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1.2, 
        ease: "power2.out",
        delay: 1
      }
    )

    // Button hover effects
    const buttons = document.querySelectorAll('.hero-button')
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, { scale: 1.05, duration: 0.2 })
      })
      button.addEventListener('mouseleave', () => {
        gsap.to(button, { scale: 1, duration: 0.2 })
      })
    })
  }, [])

  return (
    <>
      <section>
        <div style={{ position: "relative", width: "100%", height: 900 }}>
          <video
            ref={videoRef}
            src="/m2.mp4"
            poster="/thunder.jpg"
            autoPlay
            muted
            loop
            playsInline
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            ref={textOverlayRef}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 24px",
              textAlign: "center",
              color: "white",
              fontSize: 48,
              fontWeight: 700,
              textShadow: "0 2px 10px rgba(0,0,0,0.6)",
            }}
          >
            What starts here shapes
            <br />
            culture.
          </div>
        </div>
      </section>

      <section className="relative bg-background py-20 lg:py-32 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div ref={contentRef} className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight text-balance">
                  Leading the Future of
                  <span className="text-white/80"> Corporate Excellence</span>
                </h1>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  EEI is a trusted parent company driving innovation across multiple industries. We empower our portfolio
                  of brands to deliver exceptional value and sustainable growth.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="hero-button bg-white text-black hover:bg-white/90">
                  Explore Our Brands
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="hero-button border-white text-white hover:bg-white/10">
                  Learn More About EEI
                </Button>
              </div>

              {/* Stats */}
              <div ref={statsRef} className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                <div className="text-center stagger-animate">
                  <div className="text-3xl font-bold text-white">25+</div>
                  <div className="text-sm text-white/70">Years Experience</div>
                </div>
                <div className="text-center stagger-animate">
                  <div className="text-3xl font-bold text-white">4</div>
                  <div className="text-sm text-white/70">Portfolio Brands</div>
                </div>
                <div className="text-center stagger-animate">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-sm text-white/70">Global Clients</div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div ref={cardsRef} className="relative">
              <div className="bg-white/5 rounded-2xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-xl p-6 shadow-sm stagger-animate">
                    <Shield className="h-8 w-8 text-white mb-4" />
                    <h3 className="font-semibold text-white mb-2">Trusted Leadership</h3>
                    <p className="text-sm text-white/70">Industry-leading expertise across all sectors</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6 shadow-sm stagger-animate">
                    <Users className="h-8 w-8 text-white mb-4" />
                    <h3 className="font-semibold text-white mb-2">Global Reach</h3>
                    <p className="text-sm text-white/70">Serving clients worldwide with excellence</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6 shadow-sm col-span-2 stagger-animate">
                    <Zap className="h-8 w-8 text-white mb-4" />
                    <h3 className="font-semibold text-white mb-2">Innovation First</h3>
                    <p className="text-sm text-white/70">
                      Driving technological advancement and sustainable solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
