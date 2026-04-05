"use client"

import { useState, useEffect } from "react"
import { Case } from "@/content/cases"
import { caseStore } from "@/lib/case-store"

function handleClose() {
  caseStore.close()
  const overlay = document.getElementById("cait-overlay")
  if (overlay) overlay.classList.remove("open")
  document.body.style.overflow = ""
}

export default function CaseStudyModal() {
  const [activeCase, setActiveCase] = useState<Case | null>(null)

  useEffect(() => {
    caseStore.register(setActiveCase)
  }, [])

  const Body = activeCase?.body ?? null

  return (
    <div className="overlay" id="cait-overlay">
      <div className="cs-panel" id="cait-cs-panel">
        {activeCase && Body && (
          <>
            <div className="cs-hd">
              <button className="cs-close" aria-label="Close" onClick={handleClose}>
                &times;
              </button>
              <span className="cs-hd-tag-mobile">{activeCase.tag}</span>
              <h2>{activeCase.title}</h2>
            </div>

            <div className="cs-subhd">
              <div className="cs-tag">{activeCase.tag}</div>
              <p className="cs-hook">{activeCase.hook}</p>
            </div>

            <div className="cs-meta">
              {activeCase.meta.map((m, i) => (
                <div key={i} className="cs-mi">
                  <div className="k">{m.k}</div>
                  <div className={`v${m.big ? " big" : ""}`}>{m.v}</div>
                </div>
              ))}
            </div>

            <div className="cs-body">
              <Body />
            </div>
          </>
        )}
      </div>
    </div>
  )
}