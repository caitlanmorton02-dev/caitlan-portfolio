import { CASES } from "../content/cases"
import { caseStore } from "./case-store"

declare function trackEvent(name: string, props?: Record<string, any>): void

/**
 * Opens the case study overlay. Content is now rendered by CaseStudyModal
 * via React state — no more innerHTML.
 */
export function openCS(key: string, root: HTMLElement): void {
  const cs = CASES[key]
  if (!cs) return
  const panel = root.querySelector<HTMLElement>("#cait-cs-panel")
  const overlay = root.querySelector<HTMLElement>("#cait-overlay")
  if (!panel || !overlay) return

  caseStore.open(cs)
  overlay.classList.add("open")
  document.body.style.overflow = "hidden"
  panel.scrollTop = 0

  trackEvent("modal_open", { case_id: key })
}

export function closeCS(root: HTMLElement): void {
  const overlay = root.querySelector<HTMLElement>("#cait-overlay")
  if (overlay) overlay.classList.remove("open")
  document.body.style.overflow = ""
  caseStore.close()

  trackEvent("modal_close")
}

/**
 * Binds scroll-based nav border and scroll reveal observer.
 * Returns a cleanup function.
 */
export function initScrollBehaviours(root: HTMLElement): () => void {
  const nav = root.querySelector<HTMLElement>("#cait-nav")
  function onScroll() {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 30)
  }
  window.addEventListener("scroll", onScroll, { passive: true })
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("on")
          obs.unobserve(e.target)
        }
      })
    },
    { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
  )
  root.querySelectorAll(".r").forEach((el) => obs.observe(el))
  return () => {
    window.removeEventListener("scroll", onScroll)
    obs.disconnect()
  }
}

/**
 * Binds the mobile hamburger toggle and closes on link click.
 * Returns a cleanup function.
 */
export function initMobileNav(root: HTMLElement): () => void {
  const hamburger = root.querySelector<HTMLElement>("#cait-hamburger")
  const drawer = root.querySelector<HTMLElement>("#cait-nav-drawer")
  function toggleMenu() {
    if (!hamburger || !drawer) return
    const isOpen = drawer.classList.toggle("open")
    hamburger.classList.toggle("open", isOpen)
    hamburger.setAttribute("aria-expanded", String(isOpen))
  }
  function closeMenu() {
    if (!drawer || !hamburger) return
    drawer.classList.remove("open")
    hamburger.classList.remove("open")
    hamburger.setAttribute("aria-expanded", "false")
  }
  hamburger?.addEventListener("click", toggleMenu)
  drawer?.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu))
  return () => {
    hamburger?.removeEventListener("click", toggleMenu)
  }
}

/**
 * Binds card [data-cs] click handlers, overlay backdrop click, and Escape key.
 * Returns a cleanup function.
 */
export function initModalHandlers(root: HTMLElement): () => void {
  function handleCardClick(e: Event) {
    const el = e.currentTarget as HTMLElement
    const key = el.dataset.cs ?? ""
    trackEvent("card_click", { case_id: key })
    openCS(key, root)
  }
  const cards = root.querySelectorAll<HTMLElement>("[data-cs]")
  cards.forEach((el) => el.addEventListener("click", handleCardClick))
  function handleOverlayClick(e: Event) {
    if (e.target === root.querySelector("#cait-overlay")) closeCS(root)
  }
  root.querySelector("#cait-overlay")?.addEventListener("click", handleOverlayClick)
  function onKey(e: KeyboardEvent) {
    if (e.key === "Escape") closeCS(root)
  }
  document.addEventListener("keydown", onKey)
  return () => {
    cards.forEach((el) => el.removeEventListener("click", handleCardClick))
    document.removeEventListener("keydown", onKey)
    document.body.style.overflow = ""
  }
}

/**
 * Binds smooth-scroll behaviour to all internal nav anchor links.
 * Returns a cleanup function.
 */
export function initSmoothScroll(root: HTMLElement): () => void {
  const handlers: Array<{ el: HTMLAnchorElement; fn: (e: Event) => void }> = []
  root.querySelectorAll<HTMLAnchorElement>("a[href^='#cait-']").forEach((a) => {
    const fn = (e: Event) => {
      const target = document.getElementById(a.getAttribute("href")!.slice(1))
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: "smooth" })
      }
    }
    a.addEventListener("click", fn)
    handlers.push({ el: a, fn })
  })
  return () => {
    handlers.forEach(({ el, fn }) => el.removeEventListener("click", fn))
  }
}