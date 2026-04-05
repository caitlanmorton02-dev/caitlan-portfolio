declare function trackEvent(name: string, props?: Record<string, any>): void

export default function Nav() {
  return (
    <>
      <nav id="cait-nav">
        <a href="#" className="nav-logo">
          Caitlan Morton
        </a>
        <ul className="nav-links">
          <li>
            <a
              className="nav-link"
              href="#cait-work"
              onClick={() => trackEvent("nav_click", { section: "work" })}
            >
              Work
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#cait-approach"
              onClick={() => trackEvent("nav_click", { section: "approach" })}
            >
              Approach
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#cait-about"
              onClick={() => trackEvent("nav_click", { section: "about" })}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href="#cait-contact"
              onClick={() => trackEvent("nav_click", { section: "contact" })}
            >
              Contact
            </a>
          </li>
        </ul>
        <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
          <a
            href="https://www.linkedin.com/in/caitlan-morton-242597176"
            target="_blank"
            rel="noopener"
            className="nav-cta"
            onClick={() => {
              trackEvent("cta_click", { label: "Contact me" })
              trackEvent("external_link", { target: "linkedin" })
            }}
          >
            Contact me
          </a>
          <button
            id="cait-hamburger"
            className="nav-hamburger"
            aria-label="Open menu"
            aria-expanded="false"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div id="cait-nav-drawer" className="nav-drawer">
        <a
          className="nav-link"
          href="#cait-work"
          onClick={() => trackEvent("nav_click", { section: "work" })}
        >
          Work
        </a>
        <a
          className="nav-link"
          href="#cait-approach"
          onClick={() => trackEvent("nav_click", { section: "approach" })}
        >
          Approach
        </a>
        <a
          className="nav-link"
          href="#cait-about"
          onClick={() => trackEvent("nav_click", { section: "about" })}
        >
          About
        </a>
        <a
          className="nav-link"
          href="#cait-contact"
          onClick={() => trackEvent("nav_click", { section: "contact" })}
        >
          Contact
        </a>
        <a
          className="nav-link"
          href="mailto:02c.aitlan@gmail.com"
          onClick={() => trackEvent("cta_click", { label: "Get in touch" })}
        >
          Get in touch
        </a>
      </div>
    </>
  )
}