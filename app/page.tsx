"use client"

import { useEffect, useRef, useState } from "react"

// Styles
import "../styles/globals.css"

// Sections
import Hero from "../components/sections/Hero"
import Work from "../components/sections/Work"
import Approach from "../components/sections/Approach"
import About from "../components/sections/About"
import Contact from "../components/sections/Contact"

// Patterns
import Nav from "../components/patterns/Nav"
import CaseStudyModal from "../components/patterns/CaseStudyModal"

// Interaction logic
import {
  initScrollBehaviours,
  initMobileNav,
  initModalHandlers,
  initSmoothScroll,
} from "../lib/interactions"

export default function Page() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [cssReady, setCssReady] = useState(false)


  useEffect(() => {
    setCssReady(true)
  }, [])

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const cleanupScroll   = initScrollBehaviours(root)
    const cleanupMobileNav = initMobileNav(root)
    const cleanupModals   = initModalHandlers(root)
    const cleanupSmooth   = initSmoothScroll(root)

    return () => {
      cleanupScroll()
      cleanupMobileNav()
      cleanupModals()
      cleanupSmooth()
    }
  }, [])

  return (
    <div
      id="cait-root"
      ref={rootRef}
      style={{ visibility: cssReady ? "visible" : "hidden" }}
    >
      <Nav />

      <Hero />

      <div className="divider" />

      <Work />

      <div className="divider" />

      <Approach />

      <div className="divider" />

      <About />

      <div className="divider" />

      <Contact />

      <footer>
        <span className="footer-copy">2026 Caitlan Morton</span>
        <a
          href="https://www.linkedin.com/in/caitlan-morton-242597176"
          target="_blank"
          rel="noopener"
          className="footer-copy"
          style={{ color: "var(--text-mid)", textDecoration: "none" }}
        >
          LinkedIn
        </a>
      </footer>

      <CaseStudyModal />
    </div>
  )
}
