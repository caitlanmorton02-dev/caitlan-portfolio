const SKILLS = [
  "0 to 1 Product",
  "Design Systems",
  "A/B Experimentation",
  "Mobile First",
  "Figma",
  "Interaction Design",
  "HTML · CSS · JS",
  "Data-led Design",
]

const STATS = [
  {
    num: "7",
    sup: "+",
    title: "Years in product design",
    body: "Across e-commerce, mobile, and internal tooling at every level of seniority.",
  },
  {
    num: "610",
    sup: "+",
    title: "Survey responses on a single project",
    body: "Real user validation, built in from the start.",
  },
  {
    num: "3",
    sup: "+",
    title: "Design systems architected",
    body: "Scalable across web and app, multi-market and multi-region.",
  },
]

const CAREER = [
  {
    co: "PrettyLittleThing",
    role: "Design and Experimentation Manager",
    yr: "2024 to 2025",
    bullets: [
      "Led experimentation design across core journeys, partnering with product, engineering, and analytics.",
      "Defined hypotheses, success metrics, and test strategy aligned to business goals.",
      "Turned behavioural data into clear design recommendations and presented outcomes to senior stakeholders.",
    ],
  },
  {
    co: "PrettyLittleThing",
    role: "Senior Product Designer",
    yr: "2021 to 2024",
    bullets: [
      "Owned design independently across major product features, from research through to shipped UI.",
      "Built and evolved the PLT Design System across web and app, supporting team growth.",
      "Designed the Marketplace App from discovery through to final UI as sole designer, shipped MVP.",
    ],
  },
  {
    co: "PrettyLittleThing",
    role: "UX Designer",
    yr: "2019 to 2021",
    bullets: [
      "Designed end-to-end user journeys for web and app. Delivered wireframes and high-fidelity UI.",
      "Created personas, journey maps, and UX documentation. Contributed to A/B testing and optimisation work.",
    ],
  },
  {
    co: "Diagnostax",
    role: "Software Apprentice",
    yr: "2017 to 2019",
    bullets: [
      "Designed and maintained web forms and UI components. Supported early product design and website development.",
    ],
  },
]

export default function About() {
  return (
    <section id="cait-about">
      <div className="wrap">
        <div className="about-grid">
          {/* Left column — bio + skills */}
          <div className="r">
            <div className="about-label">About</div>
            <h2 className="about-h2">
              I design systems,
              <br />
              <em>not just screens</em>
            </h2>
            <div className="about-body">
              <p>
                I am a senior product designer with 8 years shipping across{" "}
                <strong>e-commerce, mobile, and internal tools</strong>. My focus is on reducing
                friction, preserving context, and turning small interaction changes into meaningful
                product impact.
              </p>
              <p>
                At PrettyLittleThing I owned design independently across core journeys, built and
                evolved the design system, and progressed from{" "}
                <strong>UX Designer to Design and Experimentation Manager</strong>.
              </p>
              <p>
                In 2026 I am looking for a role where{" "}
                <strong>design has a genuine seat at the table</strong> and the standard for
                quality is high.
              </p>
            </div>
            <div className="skill-list">
              {SKILLS.map((s) => (
                <span key={s} className="skill">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Right column — stats */}
          <div className="r r2">
            <div className="stats">
              {STATS.map((s) => (
                <div key={s.title} className="stat">
                  <div className="stat-num">
                    {s.num}
                    <sup>{s.sup}</sup>
                  </div>
                  <div className="stat-desc">
                    <strong>{s.title}</strong>
                    {s.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Career timeline */}
        <div className="career r">
          <div className="career-label">Career</div>
          <div className="career-items">
            {CAREER.map((row) => (
              <div className="career-row" key={row.role}>
                <div>
                  <div className="cr-co">{row.co}</div>
                  <div className="cr-role">{row.role}</div>
                  <div className="cr-yr">{row.yr}</div>
                </div>
                <div className="cr-bullets">
                  {row.bullets.map((b, i) => (
                    <div key={i} className="cr-b">
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
