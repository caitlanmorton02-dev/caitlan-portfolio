export default function Contact() {
  return (
    <section id="cait-contact">
      <div className="wrap">
        <div className="contact-inner r">
          <h2 className="contact-h2">Get in touch</h2>
          <div>
            <a href="mailto:02c.aitlan@gmail.com" className="contact-email">
              02c.aitlan@gmail.com
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 16L16 4M16 4H8M16 4V12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/caitlan-morton-242597176"
              target="_blank"
              rel="noopener"
              className="contact-link"
            >
              LinkedIn
            </a>
            <a
              href="https://drive.google.com/file/d/1ELgYexbnGn5YAxzQznjQ_WrFCt34mKpZ/view"
              className="contact-link"
            >
              View CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
