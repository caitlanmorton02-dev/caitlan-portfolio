import { testimonials } from "../../content/testimonials"

export default function Testimonials() {
  return (
    <section id="cait-testimonials">
      <div className="wrap">
        <div className="sec-label r">Colleagues say</div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className={`t-item r r${i + 1}`}>
              <p className="t-quote">&ldquo;{t.quote}&rdquo;</p>
              <span className="t-author">{t.author}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
