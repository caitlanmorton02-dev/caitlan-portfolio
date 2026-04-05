const APPROACH_ITEMS = [
  {
    num: "01",
    title: "Identify Friction",
    body: "Pinpoint where users struggle, hesitate, or drop within a journey. Not only at obvious entry and exit points.",
  },
  {
    num: "02",
    title: "Validate Direction",
    body: "Use concepts, flows, and early testing to understand what improves the experience before committing to a build.",
  },
  {
    num: "03",
    title: "Refine Interaction",
    body: "Design solutions that feel intuitive and lightweight, grounded in real user context rather than edge cases.",
  },
  {
    num: "04",
    title: "Apply the Learning",
    body: "Carry insight from one test into the next. Small interaction changes accumulate into system-level impact over time.",
  },
]

export default function Approach() {
  return (
    <section id="cait-approach">
      <div className="wrap">
        <div className="sec-label r">Approach</div>
        <div className="approach-grid">
          {APPROACH_ITEMS.map((item, i) => (
            <div key={item.num} className={`approach-item r r${i + 1}`}>
              <div className="ap-num">{item.num}</div>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
