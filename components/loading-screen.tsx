"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import gsap from "gsap"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time and animate logo
    const tl = gsap.timeline({
      onComplete: () => {
        // Hide loading screen after animation completes
        setTimeout(() => setIsLoading(false), 500)
      }
    })

    // Initial logo state
    gsap.set(".loading-logo", { 
      opacity: 0, 
      scale: 0.5, 
      rotation: -180 
    })

    // Logo entrance animation
    tl.to(".loading-logo", {
      opacity: 1,
      scale: 1.2,
      rotation: 0,
      duration: 1.5,
      ease: "back.out(1.7)"
    })

    // Logo pulse effect
    tl.to(".loading-logo", {
      scale: 1,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.3")

    // Logo glow effect
    tl.to(".loading-logo", {
      boxShadow: "0 0 50px rgba(255, 255, 255, 0.8)",
      duration: 0.8,
      ease: "power2.inOut"
    }, "-=0.5")

    // Fade out loading screen
    tl.to(".loading-screen", {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut"
    }, "+=0.5")

  }, [])

  if (!isLoading) return null

  return (
    <div className="loading-screen fixed inset-0 bg-black z-[100] flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="loading-logo mb-8">
          <Image
            src="/Elogo.jpg"
            alt="EEI Logo"
            width={200}
            height={200}
            className="rounded-lg"
            priority
          />
        </div>
        
        {/* Loading Text */}
        <div className="text-white text-xl font-medium tracking-wider">
          <span className="inline-block animate-pulse">Loading</span>
          <span className="inline-block animate-pulse delay-100">.</span>
          <span className="inline-block animate-pulse delay-200">.</span>
          <span className="inline-block animate-pulse delay-300">.</span>
        </div>
        
        {/* Loading Bar */}
        <div className="mt-6 w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full animate-pulse" style={{
            animation: "loading-bar 2s ease-in-out infinite"
          }}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes loading-bar {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  )
}
