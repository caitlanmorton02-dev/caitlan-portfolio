/**
 * case-store.ts
 *
 * Minimal module-level singleton that lets interactions.ts (imperative)
 * talk to CaseStudyModal (React state) without prop-drilling or a full
 * state management library.
 *
 * Place this at: lib/case-store.ts
 */

import type { Case } from "../content/cases"

type SetCase = (cs: Case | null) => void

let _setter: SetCase | null = null

export const caseStore = {
  /** Called once by CaseStudyModal on mount to register its state setter. */
  register(fn: SetCase) {
    _setter = fn
  },
  /** Open a case — triggers React re-render with full content. */
  open(cs: Case) {
    _setter?.(cs)
  },
  /** Clear active case — hides panel content. */
  close() {
    _setter?.(null)
  },
}