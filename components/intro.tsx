"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function MarvelIntro() {
  const overlay = useRef(null)
  const logoMask = useRef(null)
  const video = useRef(null)
  const videoContainer = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Step 1: Logo appears with video inside text
    tl.fromTo(
      logoMask.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power4.out" }
    )

    // Step 2: Expand video from text mask to fullscreen
    tl.to(videoContainer.current, {
      clipPath: "inset(0% 0% 0% 0%)", // removes mask
      duration: 2,
      ease: "power4.inOut",
    })

    // Step 3: Fade out logo outline
    tl.to(
      logoMask.current,
      {
        opacity: 0,
        duration: 1.5,
        ease: "power2.inOut",
      },
      "-=1" // overlap with previous animation
    )

    // Step 4: Slide overlay away
    tl.to(overlay.current, {
      y: "-100%",
      duration: 1.5,
      ease: "power4.inOut",
    })
  }, [])

  return (
    <div
      ref={overlay}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
    >
      {/* Video Container with Text Mask */}
      <div
        ref={videoContainer}
        className="absolute inset-0 w-full h-full"
        style={{
          clipPath: "circle(0% at 50% 50%)",
          clip: "inset(50% 20% 50% 20%)", // Start with a small rectangle in center
        }}
      >
        <video
          ref={video}
          src="/m2.mp4"
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Outline */}
      <h1
        ref={logoMask}
        className="text-[6rem] md:text-[10rem] font-extrabold uppercase tracking-widest relative z-10 pointer-events-none"
        style={{
          color: "transparent",
          WebkitTextStroke: "4px white",
          WebkitTextFillColor: "transparent",
        }}
      >
        EEI Evolve
      </h1>
    </div>
  )
}
