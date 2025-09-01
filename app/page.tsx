"use client"

import { useEffect, useRef } from "react"
import { MultiDeckHeader } from "@/components/multi-deck-header"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { BrandsGrid } from "@/components/brands-grid"
import { WhyChoose } from "@/components/why-choose"
import { CtaSection } from "@/components/cta-section"
import Intro from "@/components/intro"
{/*import { LoadingScreen } from "@/components/loading-screen"*/}
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HomePage() {
  const heroRef = useRef(null)
  const brandsRef = useRef(null)
  const whyChooseRef = useRef(null)
  const ctaRef = useRef(null)
  const footerRef = useRef(null)

  useEffect(() => {
    // Hero Section Animation
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Brands Grid Animation
    gsap.fromTo(brandsRef.current,
      { opacity: 0, y: 80, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: brandsRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Why Choose Section Animation
    gsap.fromTo(whyChooseRef.current,
      { opacity: 0, x: -80 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: whyChooseRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // CTA Section Animation
    gsap.fromTo(ctaRef.current,
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Footer Animation
    gsap.fromTo(footerRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Stagger animation for child elements
    const staggerElements = document.querySelectorAll('.stagger-animate')
    gsap.fromTo(staggerElements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: staggerElements[0],
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
     {/* <LoadingScreen />*/}
      <Intro />
      <MultiDeckHeader />
      
      <div ref={heroRef}>
        <HeroSection />
      </div>

      <div ref={brandsRef}>
        <BrandsGrid />
      </div>

      <div ref={whyChooseRef}>
        <WhyChoose />
      </div>

      <div ref={ctaRef}>
        <CtaSection />
      </div>

      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  )
}
