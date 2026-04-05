export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-eyebrow">
          <span className="eyebrow-rule"></span>
          Senior Product Designer
        </div>
        <h1 className="hero-h1">
          End-to-end.
          <br />
          Evidence-led.
          <br />
          <em>Shipped.</em>
        </h1>
      </div>
      <div className="hero-right">
        <p className="hero-bio">
          I design products that reduce friction and drive measurable outcomes.
          From zero-to-one builds to hypothesis-led experimentation at scale.
          Formerly PrettyLittleThing, 7 years.
        </p>
        <div className="hero-facts">
          <div className="hero-fact">
            <b>Focus</b>&nbsp;&nbsp;End-to-end · Experimentation · Systems
          </div>
          <div className="hero-fact">
            <b>Experience</b>&nbsp;&nbsp;7 years e-commerce and mobile
          </div>
          <div className="hero-fact">
            <b>Based in</b>&nbsp;&nbsp;Liverpool, UK
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-chevron"></div>
        <div className="scroll-chevron-2"></div>
      </div>
    </section>
  )
}
