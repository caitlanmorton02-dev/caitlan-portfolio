import { ReactNode } from "react"

// ---------------------------------------------------------------------------
// CsSection
// ---------------------------------------------------------------------------

interface CsSectionProps {
  children: ReactNode
  className?: string
}

export function CsSection({ children, className }: CsSectionProps) {
  const cls = ["cs-sec", className].filter(Boolean).join(" ")
  return <div className={cls}>{children}</div>
}

// ---------------------------------------------------------------------------
// CsSplit
// ---------------------------------------------------------------------------

interface CsSplitProps {
  text: ReactNode
  visual: ReactNode
  reverse?: boolean
}

export function CsSplit({ text, visual, reverse = false }: CsSplitProps) {
  return (
    <div className={`cs-split${reverse ? " reverse" : ""}`}>
      {reverse ? (
        <>
          <div className="cs-split-visual">{visual}</div>
          <div className="cs-split-text">{text}</div>
        </>
      ) : (
        <>
          <div className="cs-split-text">{text}</div>
          <div className="cs-split-visual">{visual}</div>
        </>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// CsQuote
// ---------------------------------------------------------------------------

interface CsQuoteProps {
  children: ReactNode
}

export function CsQuote({ children }: CsQuoteProps) {
  return <div className="cs-quote">{children}</div>
}

// ---------------------------------------------------------------------------
// CsMetrics
// ---------------------------------------------------------------------------

interface MetricItem {
  n: string
  d: string
}

interface CsMetricsProps {
  items: MetricItem[]
  className?: string // e.g. "three" for the 3-col variant
}

export function CsMetrics({ items, className }: CsMetricsProps) {
  const cls = ["metrics", className].filter(Boolean).join(" ")
  return (
    <div className={cls}>
      {items.map((item, i) => (
        <div key={i} className="m-box">
          <span className="n">{item.n}</span>
          <span className="d">{item.d}</span>
        </div>
      ))}
    </div>
  )
}

// ---------------------------------------------------------------------------
// CsFlow
// ---------------------------------------------------------------------------

interface FlowItem {
  src: string
  label: string
}

interface CsFlowProps {
  items: FlowItem[]
}

export function CsFlow({ items }: CsFlowProps) {
  return (
    <div className="cs-flow">
      {items.map((item, i) => (
        <div key={i} className="cs-flow-item">
          <div className="cs-image">
            <img src={item.src} alt={item.label} />
          </div>
          <div className="cs-flow-label">{item.label}</div>
        </div>
      ))}
    </div>
  )
}

// ---------------------------------------------------------------------------
// CsTwoCol
// ---------------------------------------------------------------------------

interface CsTwoColProps {
  left: ReactNode
  right: ReactNode
}

export function CsTwoCol({ left, right }: CsTwoColProps) {
  return (
    <div className="cs-two">
      <div className="cs-col">{left}</div>
      <div className="cs-col">{right}</div>
    </div>
  )
}

