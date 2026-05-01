/**
 * cases.tsx  (renamed from cases.ts, JSX required for ReactNode bodies)
 *
 * Migration status:
 *   marketplace  ✅ migrated
 *   pdp          ✅ migrated
 *   lab          ✅ migrated
 *   betfred      ✅ migrated
 */

import { ReactNode } from "react"
import {
  CsSection,
  CsSplit,
  CsQuote,
  CsMetrics,
  CsFlow,
  CsTwoCol,
} from "../components/case-study/cs-components"

export interface CaseMeta {
  k: string
  v: string
  big: boolean
}

export interface Case {
  tag: string
  title: string
  hook: string
  meta: CaseMeta[]
  body: () => ReactNode
}

export const CASES: Record<string, Case> = {


hale: {
  tag: "Case Study · Hale · Health UX · Design Task",
  title: "Designing heart scan results people can understand",
  hook: "Medical results often present raw data without context. I focused on translating complex heart scan data into clear, actionable insight.",
  meta: [
    { k: "Role", v: "Product Designer", big: false },
    { k: "Type", v: "Design Task", big: false },
    { k: "Focus", v: "Clarity & comprehension", big: true },
    { k: "User", v: "Patients (40–55)", big: true },
  ],

  body: () => (
    <>

      {/* CONTEXT */}
      <CsSection>
        <h4>Context</h4>
        <p>
          People receiving heart scan results are often anxious and unsure how to interpret what they’re seeing.
        </p>
        <p>
          The data is clinically accurate, but lacks clarity, context, and guidance.
        </p>
      </CsSection>

      {/* CORE QUESTION */}
      <CsSection>
        <h4>Core Question</h4>
        <p>
          I focused the experience around a single user question:
        </p>
        <CsQuote>
          “Am I okay?”
        </CsQuote>
        <p>
          Everything in the design builds from answering this clearly and immediately.
        </p>
      </CsSection>

      {/* PROBLEM */}
      <CsSection>
        <h4>The Problem</h4>
        <p>
          Raw scores don’t answer what users actually need to know.
        </p>
        <ul>
          <li>Is this good or bad?</li>
          <li>How does this compare to others?</li>
          <li>What should I do next?</li>
        </ul>
        <CsQuote>
          The score didn’t answer the question.
        </CsQuote>
      </CsSection>

      {/* CONSTRAINTS */}
      <CsSection>
        <h4>Design Constraints</h4>
        <ul>
          <li>Medical data is unfamiliar to most users</li>
          <li>Risk varies by age and context</li>
          <li>Anxiety is high at point of entry</li>
        </ul>
        <p>
          This meant clarity had to come before depth.
        </p>
      </CsSection>

      {/* STEP 1 */}
      <CsSection>
        <h4>Step 1 · Immediate Clarity</h4>
        <CsSplit
          text={
            <>
              <p>
                The first priority was answering “Am I okay?” instantly.
              </p>
              <ul>
                <li>Clear risk statement</li>
                <li>Age-based percentile context</li>
                <li>Simple visual scale</li>
              </ul>
              <CsQuote>
                Clarity first. Detail later.
              </CsQuote>
            </>
          }
          visual={
            <div className="cs-image">
              <img src="https://i.postimg.cc/zXdR6st3/hale-Top.jpg" alt="" />
            </div>
          }
        />
      </CsSection>

      {/* STEP 2 */}
      <CsSection>
        <h4>Step 2 · Build Understanding</h4>
        <CsSplit
          reverse
          text={
            <>
              <p>
                Once users understand their risk, the next step is explaining why.
              </p>
              <ul>
                <li>Grouped, scannable metrics</li>
                <li>Plain language explanations</li>
                <li>Supporting visual breakdowns</li>
              </ul>
              <p>
                Complex clinical data becomes understandable and contextual.
              </p>
            </>
          }
          visual={
            <div className="cs-image">
              <img src="https://i.postimg.cc/rFht3BnK/hale-Middle.jpg" alt="" />
            </div>
          }
        />
      </CsSection>

      {/* STEP 3 */}
      <CsSection>
        <h4>Step 3 · Support Action</h4>
        <CsSplit
          text={
            <>
              <p>
                The final step focuses on what users should do next.
              </p>
              <ul>
                <li>Simple, actionable guidance</li>
                <li>Small, achievable behaviours</li>
                <li>Expert-backed reassurance</li>
              </ul>
              <p>
                The goal is to move from understanding to action without increasing anxiety.
              </p>
            </>
          }
          visual={
            <div className="cs-image">
              <img src="https://i.postimg.cc/sDnZqk6j/hale-Bottom.jpg" alt="" />
            </div>
          }
        />
      </CsSection>

      {/* FLOW */}
      <CsSection>
        <h4>Experience Flow</h4>
        <p>
          The journey follows a simple progression:
        </p>
        <ul>
          <li>Am I okay?</li>
          <li>What does this mean?</li>
          <li>What should I do next?</li>
        </ul>
      </CsSection>

      {/* MEASUREMENT */}
      <CsSection>
        <h4>Measuring Success</h4>
        <CsSplit
          reverse
          text={
            <>
              <p>
                Success is measured by whether users understand and act.
              </p>
              <ul>
                <li>Primary: action plan starts</li>
                <li>Secondary: engagement with results</li>
                <li>Guardrail: anxiety and drop-off</li>
              </ul>
            </>
          }
          visual={
            <div className="cs-image">
              <img src="https://i.postimg.cc/wT3By7Vw/hale-exp.png" alt="" />
            </div>
          }
        />
      </CsSection>

      {/* OUTCOME */}
      <CsSection>
        <h4>Outcome</h4>
        <p>
          The design shifts results from raw data to clear understanding,
          helping users feel informed, reassured, and able to take action.
        </p>
        <CsQuote>
          Understanding leads to better decisions and better outcomes.
        </CsQuote>
      </CsSection>

    </>
  ),
},



// FUTURE //
membership: {
  tag: "Design Task · Content UX",
  title: "Turning content into a conversion journey",
  hook: "Membership is often introduced as an interruption. I explored how conversion can be structured within editorial flow, aligning prompts with user intent rather than disrupting it.",
  meta: [
    { k: "Type", v: "Design task", big: false },
    { k: "Focus", v: "Conversion & UX", big: true },
    { k: "Method", v: "Experimentation", big: true },
    { k: "Context", v: "Editorial platform", big: false },
  ],

  body: () => (
    <>
      <CsSection>
        <h4>Context</h4>
        <p>Users arrive to read, not subscribe.</p>
        <p>
          Articles are long-form, scroll-heavy, and ad-dense, meaning any
          conversion moment must compete for attention without breaking the
          experience.
        </p>
      </CsSection>

      <CsSection>
        <h4>The Problem</h4>
        <p>Conversion was treated as a single moment rather than a journey.</p>
        <ul>
          <li>Reliance on end-of-article prompts</li>
          <li>Limited reinforcement of value</li>
          <li>Weak connection between content and subscription</li>
        </ul>
        <CsQuote>
          The ask came before the value was fully understood.
        </CsQuote>
      </CsSection>

      <CsSection>
        <h4>Approach</h4>
        <p>
          I restructured membership into a progression across the article.
        </p>
        <ul>
          <li>Entry: introduce value early</li>
          <li>Mid: reinforce through context</li>
          <li>Final: convert at a natural stopping point</li>
        </ul>
        <CsQuote>
          Entry introduces value, mid reinforces it, and final converts once it’s earned.
        </CsQuote>
      </CsSection>

      <CsSection>
        <h4>Entry · Earning Attention</h4>
        <CsSplit
          text={
            <>
              <p>
                Membership is introduced early to capture attention without
                interrupting reading.
              </p>
              <ul>
                <li>Low visual weight</li>
                <li>Integrated within content</li>
                <li>Aligned with scroll behaviour</li>
              </ul>
            </>
          }
          visual={
            <div className="cs-image">
              <img src="https://i.postimg.cc/NftWSVyb/kiplinger-entry.jpg" alt="" />
            </div>
          }
        />
      </CsSection>

      <CsSection>
        <h4>Mid · Reinforcing Value</h4>
        <CsSplit
          reverse
          text={
            <>
              <p>
                As engagement increases, value becomes clearer and more explicit.
              </p>
              <ul>
                <li>Stronger hierarchy</li>
                <li>Clear articulation of benefits</li>
                <li>Still within context</li>
              </ul>
            </>
          }
          visual={
            <div className="cs-image">
              <img src="https://i.postimg.cc/Yq7JZV4y/kiplinger-mid.jpg" alt="" />
            </div>
          }
        />
      </CsSection>

      <CsSection>
        <h4>Final · Conversion</h4>
        <CsSplit
          text={
            <>
              <p>
                Conversion is introduced once value is established.
              </p>
              <ul>
                <li>Focused CTA</li>
                <li>No competing distractions</li>
                <li>Builds on prior context</li>
              </ul>
              <p>
                The ask follows the experience rather than interrupting it.
              </p>
            </>
          }
          visual={
            <div className="cs-image">
              <img src="https://i.postimg.cc/KvbdwVKH/kiplinger-final.jpg" alt="" />
            </div>
          }
        />
      </CsSection>

      <CsSection>
        <h4>Experimentation</h4>
        <CsSplit
          reverse
          text={
            <>
              <p>
                The approach tests whether reinforcing value mid-article increases downstream conversion.
              </p>
              <ul>
                <li>Baseline: entry + final</li>
                <li>Variant: entry + mid + final</li>
                <li>Focus: conversion behaviour</li>
              </ul>
            </>
          }
          visual={
            <div className="cs-image">
              <img src="https://i.postimg.cc/ZRhc0kzF/membership-exp.png" alt="" />
            </div>
          }
        />
      </CsSection>

      <CsSection>
        <h4>Outcome</h4>
        <p>
          Structuring conversion across the journey aligns with how users read,
          improving engagement without disrupting the experience.
        </p>
        <CsQuote>
          Conversion should follow value, not interrupt it.
        </CsQuote>
      </CsSection>
    </>
  ),
},

campaign: {
  tag: "Creative Task · Campaign",
  title: "Turning financial complexity into narrative",
  hook: "Financial topics are often difficult to relate to. I explored two creative directions using narrative structure to make complex ideas more engaging, accessible, and easier to understand.",
  meta: [
    { k: "Type",   v: "Creative task",       big: false },
    { k: "Focus",  v: "Narrative & content", big: true  },
    { k: "Output", v: "Campaign direction",  big: false },
  ],

  body: () => (
    <>

      {/* CONTEXT */}
      <CsSection>
        <h4>Context</h4>
        <p>
          Large financial topics are often communicated through scale and data,
          making them difficult to relate to and easy to disengage from.
        </p>
      </CsSection>

      {/* PROBLEM */}
      <CsSection>
        <h4>The Problem</h4>
        <ul>
          <li>Concepts feel distant and abstract</li>
          <li>Scale lacks personal relevance</li>
          <li>Users disengage before understanding</li>
        </ul>
        <CsQuote>
          The challenge wasn’t complexity, it was how it was communicated.
        </CsQuote>
      </CsSection>

      {/* APPROACH */}
      <CsSection>
        <h4>Approach</h4>
        <p>
          I explored two creative directions, both structured around narrative,
          but differing in how they guide attention and engagement.
        </p>
      </CsSection>

      {/* FLOW 01 */}
      <CsSection>
        <h4>Flow 01 · Motion-led Narrative</h4>

        <p>
          The first direction uses motion and pacing to guide the user through the story.
        </p>

        <CsFlow
          items={[
            {
              src: "https://i.postimg.cc/mgn4vjWC/01-Hook-Content.jpg",
              label: "01 · Hook — Bold, immediate stat",
            },
            {
              src: "https://i.postimg.cc/FKJvNShx/02-Tension-Content.jpg",
              label: "02 · Tension — Reframe beyond money",
            },
            {
              src: "https://i.postimg.cc/Bv134FJc/03-Personal-Content.jpg",
              label: "03 · Question — Bring it closer to the individual",
            },
            {
              src: "https://i.postimg.cc/Bv134FJ5/04-Value-Content.jpg",
              label: "04 · Solution — Make sense of the issue",
            },
            {
              src: "https://i.postimg.cc/9fq2C9cY/05-CTA-Content.jpg",
              label: "05 · Action — Drive engagement",
            },
          ]}
        />

        <p className="cs-caption">
          Motion was used to guide pacing, reveal information progressively, and reinforce narrative flow.
        </p>
      </CsSection>

      {/* FLOW 02 */}
      <CsSection>
        <h4>Flow 02 · Structured Narrative</h4>

        <p>
          The second direction focuses on clarity through structure and editorial sequencing.
        </p>

        <CsFlow
          items={[
            {
              src: "https://i.postimg.cc/5N7Wzg0L/01-Scale-Background.png",
              label: "01 · Scale — Establish magnitude",
            },
            {
              src: "https://i.postimg.cc/rFn24jmJ/02-Opportunity-Background.png",
              label: "02 · Opportunity — Reframe the topic",
            },
            {
              src: "https://i.postimg.cc/Gh7nDK2q/03-Question-Background.png",
              label: "03 · Question — Start the conversation",
            },
            {
              src: "https://i.postimg.cc/8PKgv45w/04-Guidance-Background.png",
              label: "04 · Guidance — Provide clarity",
            },
            {
              src: "https://i.postimg.cc/MKPJB5T9/05-CTA-Background.png",
              label: "05 · Action — Encourage next step",
            },
          ]}
        />

        <p className="cs-caption">
          This approach prioritises clarity and structure, guiding users through a defined narrative path.
        </p>
      </CsSection>

      {/* STRUCTURE */}
      <CsSection>
        <h4>Narrative Structure</h4>
        <ul>
          <li><strong>Hook</strong> — Capture attention</li>
          <li><strong>Tension</strong> — Reframe the problem</li>
          <li><strong>Question</strong> — Create relevance</li>
          <li><strong>Guidance</strong> — Provide clarity</li>
          <li><strong>Action</strong> — Prompt engagement</li>
        </ul>
        <p>
          Both directions follow the same structure, applied through different interaction styles.
        </p>
      </CsSection>

      {/* OUTCOME */}
      <CsSection>
        <h4>Outcome</h4>
        <p>
          Exploring multiple directions revealed how narrative can be adapted
          to different interaction styles while maintaining clarity.
        </p>
        <CsQuote>
          The goal wasn’t to explain finance, but to make people care about it.
        </CsQuote>
      </CsSection>

    </>
  ),
},

//AURALIS//
auralis: {
  tag: "System Design · Auralis · Foundations",
  title: "Designing a system for intentional shopping",
  hook: "Auralis explores how a restrained design system can support clarity, focus, and considered product discovery.",
  meta: [
    { k: "Type",   v: "Design System",         big: false },
    { k: "Focus",  v: "Foundations & Layout",  big: true  },
    { k: "Domain", v: "Fashion / Editorial",   big: false },
    { k: "Goal",   v: "Clarity through restraint", big: true },
  ],

  body: () => (
    <>

      {/* CONTEXT */}
      <CsSection>
        <h4>Context</h4>
        <p>
          Auralis is a conceptual fashion platform designed for users who shop with intention, not volume.
        </p>
        <p>
          The system focuses on clarity, restraint, and editorial presentation over visual noise.
        </p>
      </CsSection>

      {/* PRINCIPLE */}
      <CsSection>
        <h4>Design Principle</h4>
        <CsQuote>
          Clarity comes from restraint, not decoration.
        </CsQuote>
        <p>
          Every decision in the system reduces noise and reinforces structure.
        </p>
      </CsSection>

      {/* FOUNDATIONS */}
      <CsSection>
        <h4>Foundations</h4>

        <CsSplit
          text={
            <>
              <p>
                The system is built on a small set of primitives that scale consistently across the product.
              </p>
              <ul>
                <li>Typography defines hierarchy</li>
                <li>Colour creates structure, not style</li>
                <li>Spacing drives rhythm and layout</li>
              </ul>
            </>
          }
          visual={
            <div className="cs-image">
              <img src="ADD_FOUNDATIONS_IMAGE" />
            </div>
          }
        />
      </CsSection>

      {/* TYPOGRAPHY */}
      <CsSection>
        <h4>Typography System</h4>

        <CsSplit
          reverse
          text={
            <>
              <p>
                Two type families define the system: editorial contrast and functional clarity.
              </p>
              <ul>
                <li>Cormorant for editorial hierarchy</li>
                <li>Inter for UI and readability</li>
                <li>Tokenised scale for consistency</li>
              </ul>
              <p>
                This creates tension between expression and usability.
              </p>
            </>
          }
          visual={
            <div className="cs-image">
              <img src="ADD_TYPE_IMAGE" />
            </div>
          }
        />
      </CsSection>

      {/* COLOUR */}
      <CsSection>
        <h4>Colour System</h4>

        <CsSplit
          text={
            <>
              <p>
                Colour is used sparingly to maintain focus on product and content.
              </p>
              <ul>
                <li>Neutral, material-inspired palette</li>
                <li>Contrast through tone, not saturation</li>
                <li>Clear semantic roles</li>
              </ul>
            </>
          }
          visual={
            <div className="cs-image">
              <img src="ADD_COLOUR_IMAGE" />
            </div>
          }
        />
      </CsSection>

      {/* LAYOUT */}
      <CsSection>
        <h4>Layout System</h4>

        <CsSplit
          reverse
          text={
            <>
              <p>
                Layout is driven by a structured grid and consistent spacing tokens.
              </p>
              <ul>
                <li>12-column desktop grid</li>
                <li>Responsive collapse to 4 columns</li>
                <li>Reusable layout patterns</li>
              </ul>
              <p>
                This ensures consistency across editorial and product surfaces.
              </p>
            </>
          }
          visual={
            <div className="cs-image">
              <img src="ADD_LAYOUT_IMAGE" />
            </div>
          }
        />
      </CsSection>

      {/* MOTION */}
      <CsSection>
        <h4>Motion</h4>

        <CsSplit
          text={
            <>
              <p>
                Motion is subtle, purposeful, and largely invisible.
              </p>
              <ul>
                <li>Tokenised durations</li>
                <li>Consistent easing curves</li>
                <li>Supports interaction, never distracts</li>
              </ul>
              <p>
                Movement reinforces clarity rather than adding emphasis.
              </p>
            </>
          }
          visual={
            <div className="cs-image">
              <img src="ADD_MOTION_IMAGE" />
            </div>
          }
        />
      </CsSection>

      {/* OUTCOME */}
      <CsSection>
        <h4>Outcome</h4>
        <p>
          Auralis defines a system where every element is intentional,
          supporting a calmer, more focused shopping experience.
        </p>
        <CsQuote>
          The system removes noise so the product can speak.
        </CsQuote>
      </CsSection>

    </>
  ),
},


//IRULUNE //
irelune: {
  tag: "Product Concept · Emotional UX",
  title: "Designing the simplest version of an emotional product",
  hook: "Irelune explores how storytelling can help parents respond to difficult moments with children, without overwhelming either user.",
  meta: [
    { k: "Type",   v: "0→1 Concept",          big: false },
    { k: "Focus",  v: "Emotional UX",         big: true  },
    { k: "Goal",   v: "Clarity & trust",      big: true  },
    { k: "Stage",  v: "MVP definition",       big: false },
  ],

  body: () => (
    <>

      {/* CONTEXT */}
      <CsSection>
        <h4>Context</h4>
        <p>
          Parents often face emotional moments where they don’t know what to say or how to respond.
        </p>
        <p>
          Existing approaches rely on advice or instruction, which can feel overwhelming in the moment.
        </p>
      </CsSection>

      {/* PROBLEM */}
      <CsSection>
        <h4>The Problem</h4>
        <p>
          These moments are:
        </p>
        <ul>
          <li>Emotionally charged</li>
          <li>Time-sensitive</li>
          <li>Difficult to explain to a child directly</li>
        </ul>
        <CsQuote>
          Parents don’t need more information. They need something they can use instantly.
        </CsQuote>
      </CsSection>

      {/* STARTING POINT */}
      <CsSection>
        <h4>Choosing a Starting Point</h4>

        <CsSplit
          text={
            <>
              <p>
                Early thinking explored multiple directions, but the product needed a clear focus.
              </p>
              <p>
                I prioritised a single outcome:
              </p>
              <CsQuote>
                Turning real moments into simple, safe stories.
              </CsQuote>
              <p>
                This allowed the first version to stay focused and test the core interaction.
              </p>
            </>
          }
          visual={
            <div className="cs-image">
              <img src="https://i.postimg.cc/MG7NKmjK/Irelune-starting.jpg" />
            </div>
          }
        />
      </CsSection>

      {/* WHY STORY */}
      <CsSection>
        <h4>Why Storytelling</h4>
        <p>
          Storytelling creates distance from the situation while still reflecting the emotion.
        </p>
        <ul>
          <li>Children understand through characters</li>
          <li>Parents avoid direct confrontation</li>
          <li>Moments feel safer and more manageable</li>
        </ul>
      </CsSection>

      {/* MVP */}
      <CsSection>
        <h4>Defining the MVP</h4>

        <CsSplit
          reverse
          text={
            <>
              <p>
                The MVP was intentionally lightweight, focused on a single interaction loop.
              </p>
              <p>
                Instead of building systems early, the goal was to validate emotional value first.
              </p>
              <CsQuote>
                If the moment works, everything else can follow.
              </CsQuote>
            </>
          }
          visual={
            <div className="cs-image">
              <img src="https://i.postimg.cc/d02ptjZX/Irelune-MVP.jpg" />
            </div>
          }
        />
      </CsSection>

      {/* FEATURES */}
      <CsSection>
        <h4>Core Features</h4>

        <CsSplit
          text={
            <>
              <p>
                The first version focuses only on what’s needed to create the moment:
              </p>
              <ul>
                <li>Parent input describing a real situation</li>
                <li>Character and tone selection</li>
                <li>Generated short story</li>
                <li>Simple narrated playback</li>
                <li>Saved stories for repeat use</li>
              </ul>
              <p>
                Each feature supports the transition from real emotion → safe narrative.
              </p>
            </>
          }
          visual={
            <div className="cs-image">
              <img src="https://i.postimg.cc/1zG25rNR/Irelune-Story.jpg" />
            </div>
          }
        />
      </CsSection>

      {/* CONSTRAINTS */}
      <CsSection>
        <h4>Design Constraints</h4>
        <CsTwoCol
          left={
            <ul>
              <li>Parents need clarity and speed</li>
              <li>Children need simplicity and familiarity</li>
            </ul>
          }
          right={
            <ul>
              <li>Moments require calm, not complexity</li>
              <li>Trust must be built immediately</li>
            </ul>
          }
        />
      </CsSection>

      {/* TRADE OFFS */}
      <CsSection>
        <h4>Intentional Trade-offs</h4>
        <ul>
          <li>No subscriptions in first version</li>
          <li>No progression systems</li>
          <li>No gamification</li>
        </ul>
        <p>
          Complexity was removed to prioritise emotional clarity and trust.
        </p>
      </CsSection>

      {/* OUTCOME */}
      <CsSection>
        <h4>Outcome</h4>
        <p>
          By narrowing the product to its core interaction, Irelune creates a calm,
          supportive starting point for emotionally difficult moments.
        </p>
        <CsQuote>
          Clarity builds trust. Trust enables everything else.
        </CsQuote>
      </CsSection>

    </>
  ),
},


//ADMIN//

admin: {
  tag: "Internal Tools · PLT Marketplace Admin",
  title: "Designing systems for moderation and operational scale",
  hook: "Marketplace growth introduced new operational challenges around reporting and moderation. I designed internal tooling to improve visibility, reduce manual effort, and support faster decision-making.",
  meta: [
    { k: "Role",   v: "Product Designer · Project Lead", big: false },
    { k: "Team",   v: "Engineers · Product · CS",        big: false },
    { k: "Focus",  v: "Internal tools & systems",        big: true  },
    { k: "Impact", v: "Trust & safety",                  big: true  },
  ],

  body: () => (
    <>

      {/* CONTEXT */}
      <CsSection>
        <h4>Context</h4>
        <p>
          As Marketplace scaled, internal teams needed better tools to manage user behaviour and moderation.
        </p>
        <p>
          Existing workflows were fragmented, manual, and lacked visibility into key user activity.
        </p>
      </CsSection>

      {/* PROBLEM */}
      <CsSection>
        <h4>The Problem</h4>

        <CsSplit
          text={
            <>
              <p>
                Internal teams couldn’t efficiently investigate or act on reported users.
              </p>
              <ul>
                <li>No direct way to search boutique accounts</li>
                <li>Limited visibility into report history</li>
                <li>Manual, slow investigation workflows</li>
                <li>Delayed moderation decisions</li>
              </ul>
              <CsQuote>
                We couldn’t act on issues we couldn’t see.
              </CsQuote>
            </>
          }
          visual={
            <div className="cs-image">
              <img src="ADD_ADMIN_BEFORE" />
            </div>
          }
        />
      </CsSection>

      {/* APPROACH */}
      <CsSection>
        <h4>Approach</h4>
        <p>
          I treated this as a system design problem, focusing on enabling internal teams
          to search, understand, and act quickly.
        </p>
        <ul>
          <li>Surface all relevant user data in one place</li>
          <li>Provide clear moderation context</li>
          <li>Enable fast, confident actions</li>
        </ul>
      </CsSection>

      {/* SYSTEM */}
      <CsSection>
        <h4>System Design</h4>

        <CsSplit
          text={
            <>
              <p>
                The solution introduced a structured moderation system across three core areas:
              </p>
              <ul>
                <li>Search: locate boutique accounts beyond listings</li>
                <li>Review: view reports, history, and context</li>
                <li>Action: block accounts or resolve reports</li>
              </ul>
              <p>
                This created a clear workflow from issue → investigation → resolution.
              </p>
            </>
          }
          visual={
            <div className="cs-image">
              <img src="ADD_ADMIN_SYSTEM" />
            </div>
          }
        />
      </CsSection>

      {/* DESIGN */}
      <CsSection>
        <h4>Designing for Internal Users</h4>

        <CsSplit
          reverse
          text={
            <>
              <p>
                The interface prioritised clarity and speed over visual complexity.
              </p>
              <ul>
                <li>Dense but scannable data views</li>
                <li>Clear status and report indicators</li>
                <li>Fast access to key actions</li>
              </ul>
              <p>
                The goal was reducing cognitive load during investigation.
              </p>
            </>
          }
          visual={
            <div className="cs-image">
              <img src="ADD_ADMIN_UI" />
            </div>
          }
        />
      </CsSection>

      {/* OUTCOME */}
      <CsSection>
        <h4>Outcome</h4>
        <p>
          The new tooling improved how internal teams investigate and moderate marketplace users.
        </p>
        <ul>
          <li>Faster user search and investigation</li>
          <li>Improved visibility into reports and behaviour</li>
          <li>Reduced manual effort for CS and Marketing teams</li>
        </ul>
        <CsQuote>
          Better systems enable faster, safer decisions at scale.
        </CsQuote>
      </CsSection>

      {/* REFLECTION */}
      <CsSection>
        <h4>Reflection</h4>
        <p>
          This project reinforced the importance of designing for internal users,
          where clarity, speed, and reliability matter more than surface-level UI.
        </p>
        <p>
          Small improvements in tooling can have a significant impact on operational efficiency and risk.
        </p>
      </CsSection>

    </>
  ),
},

  // ---------------------------------------------------------------------------
  // MARKETPLACE
  // ---------------------------------------------------------------------------

  marketplace: {
    tag: "Case Study 01 · PLT Marketplace App · End-to-End · Live",
    title: "Selling pre-loved PLT should feel as easy as buying it.",
    hook: "Users were abandoning the listing flow. Not because they did not want to sell, but because starting from scratch every time felt like too much effort. The solution was already sitting in PLT's database.",
    meta: [
      { k: "Role",             v: "Sole Designer · Project Lead",  big: false },
      { k: "Delivered",        v: "Research to shipped MVP",        big: false },
      { k: "Survey responses", v: "610",                            big: true  },
      { k: "Rated good or excellent", v: "68%",                     big: true  },
    ],
    body: () => (
      <>
        <CsSection>
          <h4>Context</h4>
          <p>
            PLT moved into recommerce to extend product lifecycle and create a new revenue stream.
            I owned the end-to-end design of Marketplace, from early discovery through to shipped MVP.
          </p>
        </CsSection>

        <CsSection>
          <h4>End-to-End Experience</h4>
          <p>
            I designed the Marketplace experience end-to-end, from discovery through to listing and seller interaction.
            The goal was to create a seamless loop between buying and selling within the same ecosystem.
          </p>
          <CsFlow items={[
            { src: "https://i.postimg.cc/7YJm9JPz/1HP.jpg",                    label: "Marketplace entry" },
            { src: "https://i.postimg.cc/fTSBCSWc/1Wardrobe.jpg",              label: "My wardrobe"       },
            { src: "https://i.postimg.cc/0jxDm64J/PLT-Listing.jpg",            label: "Quick view"        },
            { src: "https://i.postimg.cc/tJyWP1cZ/Filled-Create-Listing.jpg",  label: "Listing"           },
            { src: "https://i.postimg.cc/L6gNDg4L/1Seller-Profile.jpg",        label: "Seller profile"    },
          ]} />
        </CsSection>

        <CsSection>
          <h4>The Problem</h4>
          <CsSplit
            text={
              <>
                <p>
                  Listing an item was hard work. Users had to upload images, write descriptions,
                  and price items from scratch.
                </p>
                <p>
                  It was the biggest drop-off point in the journey, not because users didn&apos;t want to sell,
                  but because getting started felt like too much effort.
                </p>
                <CsQuote>Users weren&apos;t the problem, starting from scratch was.</CsQuote>
              </>
            }
            visual={
              <div className="cs-viewport">
                <img src="https://i.postimg.cc/HxgSLLT5/Create-Listing.jpg" alt="Create listing" />
              </div>
            }
          />
        </CsSection>

        <CsSection>
          <h4>The Shift</h4>
          <CsSplit
            reverse
            text={
              <>
                <p>
                  Instead of asking users to create a listing from scratch, the flow shifts
                  to something they&apos;ve already done, buying the item.
                </p>
                <p>
                  Users start from their wardrobe, preview the product, and move into listing
                  with key details already filled in.
                </p>
                <CsQuote>Listing becomes a continuation of ownership, not a task from zero.</CsQuote>
              </>
            }
            visual={
              <div className="cs-compare">
                <div className="cs-compare-item">
                  <div className="cs-image">
                    <img src="https://i.postimg.cc/tJyWP1cZ/Filled-Create-Listing.jpg" alt="PLT Orders to Wardrobe PDP" />
                  </div>
                  <div className="cs-compare-label"> PLT Orders &#8594; Wardobe PDP</div>
                </div>
                <div className="cs-compare-item">
                  <div className="cs-image">
                    <img src="https://i.postimg.cc/0jxDm64J/PLT-Listing.jpg" alt="Wardrobe PDP to Filled Listing" />
                  </div>
                  <div className="cs-compare-label"> Wardobe PDP &#8594; Filled Listing</div>
                </div>
              </div>
            }
          />
        </CsSection>

        <CsSection>
          <h4>Solution</h4>
          <CsSplit
            text={
              <>
                <p>
                  I designed &ldquo;My Wardrobe&rdquo;, a flow that surfaces items from a user&apos;s
                  order history and allows them to list directly from there.
                </p>
                <p>
                  Instead of creating listings manually, users select an item they already
                  own, with key product data pre-filled and ready to go.
                </p>
                <ul>
                  <li>Removes the need to start from zero</li>
                  <li>Uses trusted, structured product data</li>
                  <li>Reduces effort at the exact moment of intent</li>
                </ul>
                <CsQuote>
                  The experience shifts from input to selection, making selling feel as easy as buying.
                </CsQuote>
              </>
            }
            visual={
              <div className="cs-image">
                <img src="https://i.postimg.cc/fTSBCSWc/1Wardrobe.jpg" alt="My Wardrobe" />
              </div>
            }
          />
        </CsSection>

        <CsSection>
          <h4>Validation</h4>
          <p>
            I tested the concept through user feedback and surveys to check whether
            reducing effort actually changed how users felt about listing.
          </p>
        </CsSection>

        <CsSection>
          <h4>Outcome</h4>
          <CsMetrics items={[
            { n: "610", d: "Responses"         },
            { n: "68%", d: "Positive rating"   },
            { n: "5/7", d: "Preferred solution"},
            { n: "↓",   d: "Listing friction"  },
          ]} />
          <p className="cs-caption">
            Removing effort, not adding features, made the experience feel easier and more achievable.
          </p>
        </CsSection>
      </>
    ),
  },

  // ---------------------------------------------------------------------------
  // PDP
  // ---------------------------------------------------------------------------

  pdp: {
    tag: "Case Study 02 · PDP Optimisation · A/B Testing · Live",
    title: "Keep users on the product page. Every interruption costs conversion.",
    hook: "Two separate A/B tests. One principle: in-context interactions reduce friction and preserve momentum at high-intent moments. The data validated it at 99.99% confidence.",
    meta: [
      { k: "Role",             v: "Lead Designer · Tester", big: false },
      { k: "Method",           v: "Hypothesis-led A/B",     big: false },
      { k: "Cart test result", v: "+1.75%",                 big: true  },
      { k: "Wishlist Adds",       v: "+12%",                 big: true  },
    ],
    body: () => (
      <>
        <CsSection>
          <h4>Context</h4>
          <p>
            I led experimentation across the product detail page, focusing on improving
            conversion at high-intent moments. This is where users decide to buy,
            small interruptions have a disproportionate impact.
          </p>
        </CsSection>

        <CsSection>
          <h4>The Problem</h4>
          <p>
            Key actions like &ldquo;save&rdquo; and &ldquo;add to bag&rdquo; were pulling users away from the PDP.
            Instead of continuing their decision-making, they were redirected into separate flows.
          </p>
          <CsQuote>We were interrupting users at the exact moment they were ready to act.</CsQuote>
        </CsSection>

        <CsSection>
          <h4>The Hypothesis</h4>
          <p>
            If we keep users in context and bring interactions to them, we reduce friction
            and increase completion at key decision points.
          </p>
        </CsSection>

        <CsSection>
          <h4>Test 01 · Wishlist</h4>
          <p>
            I first tested whether reducing interruption during &ldquo;save&rdquo; actions would improve engagement.
          </p>
          <CsTwoCol
            left={
              <>
                <h5>Before · Redirect</h5>
                <div className="cs-image">
                  <img src="https://i.postimg.cc/J7XcfVJh/ACCOUNT.jpg" alt="Before: redirect to sign-in" />
                </div>
                <ul>
                  <li>Tap save</li>
                  <li>Redirect to sign-in page</li>
                  <li>Lose PDP context</li>
                </ul>
              </>
            }
            right={
              <>
                <h5>After · Inline interaction</h5>
                <div className="cs-image">
                  <img src="https://i.postimg.cc/MZBbC2RW/2wishlist-slider.jpg" alt="After: inline sign-in" />
                </div>
                <ul>
                  <li>Inline sign-in modal</li>
                  <li>No navigation away</li>
                  <li>Stay within PDP</li>
                </ul>
              </>
            }
          />
          <CsMetrics items={[
            { n: "+12%", d: "Wishlist adds"  },
            { n: "+15%", d: "Sign-ups"       },
            { n: "620k", d: "Exposures"      },
            { n: "42k",  d: "Users engaged"  },
          ]} />
        </CsSection>

        <CsSection>
          <h4>Test 02 · Cart (Applying the learning)</h4>
          <p>
            Based on the wishlist results, I applied the same principle to add-to-bag,
            keeping users in context instead of redirecting them.
          </p>
          <CsTwoCol
            left={
              <>
                <h5>Before · Redirect to bag</h5>
                <div className="cs-image">
                  <img src="https://i.postimg.cc/ydD41YBW/CART.jpg" alt="Before: redirect to bag" />
                </div>
                <ul>
                  <li>Add to bag</li>
                  <li>Redirect to bag page</li>
                  <li>Break browsing flow</li>
                </ul>
              </>
            }
            right={
              <>
                <h5>After · Slide-out bag</h5>
                <div className="cs-image">
                  <img src="https://i.postimg.cc/7PzMF876/cart-slider.jpg" alt="After: slide-out bag" />
                </div>
                <ul>
                  <li>Slide-out panel</li>
                  <li>No page transition</li>
                  <li>Continue shopping instantly</li>
                </ul>
              </>
            }
          />
          <CsMetrics items={[
            { n: "+1.75%", d: "Conversion" },
            { n: "99.99%", d: "Confidence" },
            { n: "↑",      d: "Completion" },
            { n: "↓",      d: "Drop-off"   },
          ]} />
        </CsSection>

        <CsSection>
          <h4>What This Shows</h4>
          <p>
            Both tests validated the same principle, preserving context at high-intent
            moments improves outcomes across different parts of the journey.
          </p>
          <CsQuote>The first test proved the concept. The second proved it wasn&apos;t isolated.</CsQuote>
        </CsSection>

        <CsSection>
          <h4>Outcome</h4>
          <p>
            By reducing unnecessary transitions, we improved engagement, increased
            completion, and strengthened the overall product flow.
          </p>
          <p>
            The impact came not from introducing new features, but from removing
            friction at the exact moment users were ready to act.
          </p>
        </CsSection>
      </>
    ),
  },

  // ---------------------------------------------------------------------------
  // LAB
  // ---------------------------------------------------------------------------

  lab: {
    tag: "Case Study 03 · Product Lab Hub · Self-Initiated · 2026",
    title: "I wanted to practise product decisions. So I built a product to do it.",
    hook: "Most design learning is passive. I designed and deployed a scenario-based learning product where you learn by making real product decisions and seeing the consequences play out.",
    meta: [
      { k: "Role",               v: "Creator · Designer · Builder", big: false },
      { k: "Status",             v: "Live and deployed",             big: false },
      { k: "Active users",       v: "224",                           big: true  },
      { k: "Mission completion", v: "53%",                           big: true  },
    ],
    body: () => (
      <>
        <CsSection className="productlab">
          <h4>Context</h4>
          <p>
            Product Lab Hub is a self-initiated product exploring how designers learn product thinking.
            I wanted to move beyond passive learning and create something interactive, where users learn by making decisions.
          </p>
          <p>
            I owned the full lifecycle, from concept and interaction design through to build and launch.
          </p>
        </CsSection>

        <CsSection className="productlab">
          <h4>The Problem</h4>
          <p>
            Most design and product learning is passive. You read frameworks,
            consume content, and follow structured guidance, but rarely practise
            making decisions in context.
          </p>
          <div className="cs-image" style={{ marginTop: "16px" }}>
            <img src="https://i.postimg.cc/L8qZdjgn/issue.png" alt="Passive learning problem" />
          </div>
          <p className="cs-caption">
            Learning is structured and informative, but lacks decision-making and feedback.
          </p>
          <CsQuote>There is no feedback loop. You consume, but you don&apos;t apply.</CsQuote>
        </CsSection>

        <CsSection className="productlab">
          <h4>Concept</h4>
          <CsSplit
            text={
              <>
                <p>
                  I designed a scenario-based learning product where users learn by making
                  product decisions and seeing the outcome.
                </p>
                <p>
                  Each mission presents context, constraints, and trade-offs, mirroring
                  how decisions are made in real product environments.
                </p>
                <CsQuote>Learning happens through consequence, not instruction.</CsQuote>
              </>
            }
            visual={
              <div className="cs-image">
                <img src="https://i.postimg.cc/Gtsjh6Hw/Hub.png" alt="Product Lab Hub" />
              </div>
            }
          />
        </CsSection>

        <CsSection className="productlab">
          <h4>How it works</h4>
          <CsTwoCol
            left={
              <>
                <h5>Flow</h5>
                <ul>
                  <li>Select a mission</li>
                  <li>Understand the scenario</li>
                  <li>Make a decision</li>
                  <li>Receive feedback</li>
                </ul>
              </>
            }
            right={
              <>
                <h5>Outcome</h5>
                <ul>
                  <li>Learn through consequence</li>
                  <li>Understand trade-offs</li>
                  <li>Build decision confidence</li>
                </ul>
              </>
            }
          />
          <div className="cs-image" style={{ marginTop: "16px" }}>
            <img src="https://i.postimg.cc/JnFq8R4V/HAB-test.png" alt="Product Lab test" />
          </div>
        </CsSection>

        <CsSection className="productlab">
          <h4>Key Product Decisions</h4>
          <CsTwoCol
            left={
              <ul>
                <li><strong>Missions over modules</strong>, framed as scenarios, not lessons</li>
                <li><strong>Progressive complexity</strong>, builds without overwhelming</li>
                <li><strong>Guided, not prescriptive</strong>, supports thinking, not answers</li>
              </ul>
            }
            right={
              <ul>
                <li><strong>Minimal interface</strong>, focus on decisions, not UI</li>
                <li><strong>Immediate feedback</strong>, reinforces learning loop</li>
                <li><strong>Short sessions</strong>, designed for repeat engagement</li>
              </ul>
            }
          />
        </CsSection>

        <CsSection className="productlab">
          <h4>From Design to Build</h4>
          <CsSplit
            text={
              <>
                <p>
                  I designed the full product in Figma, defining structure, flows, and
                  interaction states across the experience.
                </p>
                <p>
                  I then used AI-assisted development to build and deploy the product,
                  allowing me to move quickly from concept to a live experience.
                </p>
                <p>
                  I retained ownership of product thinking, interaction design, and
                  overall experience quality throughout.
                </p>
              </>
            }
            visual={
              <div className="cs-image">
                <img src="https://i.postimg.cc/G2fQRbh3/Learning.png" alt="Design to build" />
              </div>
            }
          />
        </CsSection>

        <CsSection className="productlab">
          <h4>Validation</h4>
          <p>
            After launch, I tracked engagement to understand whether users would
            complete the learning loop.
          </p>
          <CsMetrics className="three" items={[
            { n: "224", d: "Active users"    },
            { n: "186", d: "Missions started"},
            { n: "53%", d: "Completion rate" },
          ]} />
        </CsSection>

        <CsSection className="productlab">
          <h4>Outcome</h4>
          <p>
            Product Lab demonstrates that interactive, decision-based learning creates
            deeper engagement than passive content.
          </p>
          <CsQuote>Learning improves when users are required to think, not just consume.</CsQuote>
        </CsSection>

        <CsSection className="productlab">
          <h4>Reflection</h4>
          <p>
            This project reinforced the importance of designing systems, not just interfaces.
            The value comes from the loop: context, decision, feedback, and progression.
          </p>
        </CsSection>
      </>
    ),
  },

  // ---------------------------------------------------------------------------
  // BETFRED
  // ---------------------------------------------------------------------------

  betfred: {
    tag: "Design Task · Betfred Casino · UX Concept · 2026",
    title: "The Betfred casino experience was built for volume. Users needed it built for intent.",
    hook: "Every section looked the same. I redesigned the experience around how users actually browse, not around how much content exists.",
    meta: [
      { k: "Role",     v: "Solo Designer, Concept",      big: false },
      { k: "Type",     v: "Design task, interview brief", big: false },
      { k: "Platform", v: "Mobile web",                  big: false },
      { k: "Focus",    v: "Discovery and intent",         big: true  },
    ],
    body: () => (
      <>
        <CsSection>
          <h4>Context</h4>
          <p>
            This was a design task focused on improving discovery within Betfred&apos;s casino experience.
            The product is content-heavy, with hundreds of games competing for attention.
          </p>
          <p>
            Rather than redesigning individual screens, I approached this as a system problem,
            how the product structures and presents choice.
          </p>
        </CsSection>

        <CsSection>
          <h4>The Problem</h4>
          <CsSplit
            text={
              <>
                <p>
                  The experience relied on flat, repetitive grids where every game was presented equally.
                </p>
                <p>
                  Without hierarchy or structure, users were forced to scan large volumes of content
                  with little guidance.
                </p>
                <ul>
                  <li>Uniform grid layout</li>
                  <li>No hierarchy or prioritisation</li>
                  <li>High cognitive load</li>
                  <li>Slow discovery</li>
                </ul>
                <CsQuote>The issue wasn&apos;t content, it was how it was structured.</CsQuote>
              </>
            }
            visual={
              <div className="cs-image">
                <img src="https://i.postimg.cc/sg5XYzMt/Betfred-BEFORE.png" alt="Betfred before" />
              </div>
            }
          />
        </CsSection>

        <CsSection>
          <h4>Insight</h4>
          <p>
            Users don&apos;t browse casino products in one way. They switch between
            low-intent exploration and high-intent play.
          </p>
          <p>
            The product treated these behaviours the same, forcing everything into
            a single, undifferentiated experience.
          </p>
        </CsSection>

        <CsSection>
          <h4>Approach</h4>
          <CsSplit
            reverse
            text={
              <>
                <p>
                  I restructured the experience around intent, separating browsing from
                  high-value play and introducing clearer pathways through the product.
                </p>
                <ul>
                  <li>Define distinct user intents</li>
                  <li>Create dedicated entry points</li>
                  <li>Introduce hierarchy within content</li>
                  <li>Reduce reliance on flat grids</li>
                </ul>
              </>
            }
            visual={
              <div className="cs-image">
                <img src="https://i.postimg.cc/Hsqn8nLG/Betfred-AFTER-NAV.png" alt="Betfred after nav" />
              </div>
            }
          />
        </CsSection>

        <CsSection>
          <h4>Navigation Shift</h4>
          <CsTwoCol
            left={
              <>
                <h5>Before</h5>
                <div className="cs-image">
                  <img src="https://i.postimg.cc/vZ5Bry4j/Betfred-BEFORE-NAV.png" alt="Before nav" />
                </div>
                <ul>
                  <li>Single mixed feed</li>
                  <li>No control over browsing</li>
                </ul>
              </>
            }
            right={
              <>
                <h5>After · Intent-based</h5>
                <div className="cs-image">
                  <img src="https://i.postimg.cc/Hsqn8nLG/Betfred-AFTER-NAV.png" alt="After nav" />
                </div>
                <ul>
                  <li>Explore, Jackpots, Instant Win</li>
                  <li>Clear separation of journeys</li>
                </ul>
              </>
            }
          />
        </CsSection>

        <CsSection>
          <h4>Explore · Browsing Mode</h4>
          <CsSplit
            text={
              <>
                <p>
                  Designed for low-intent discovery and re-engagement. The focus is
                  variety, hierarchy, and surfacing relevant content.
                </p>
                <ul>
                  <li>Mixed content blocks instead of flat grids</li>
                  <li>Recently played and personalised rows</li>
                  <li>Clear visual hierarchy</li>
                </ul>
              </>
            }
            visual={
              <div className="cs-image">
                <img src="https://i.postimg.cc/Mp1T7wng/Betfred-Eplore.png" alt="Betfred explore" />
              </div>
            }
          />
        </CsSection>

        <CsSection>
          <h4>Jackpots · High Intent</h4>
          <CsSplit
            reverse
            text={
              <>
                <p>
                  For users who already know what they want. The interface prioritises
                  clarity, urgency, and speed of decision-making.
                </p>
                <ul>
                  <li>Prominent jackpot values</li>
                  <li>Reduced visual noise</li>
                  <li>Faster path to play</li>
                </ul>
              </>
            }
            visual={
              <div className="cs-image">
                <img src="https://i.postimg.cc/6pC3rK8k/Betfred-AFTER.png" alt="Betfred jackpots" />
              </div>
            }
          />
        </CsSection>

        <CsSection>
          <h4>Interaction Design</h4>
          <CsSplit
            text={
              <>
                <p>
                  Motion and micro-interactions reinforce feedback and guide attention
                  without adding complexity.
                </p>
                <ul>
                  <li>Subtle animations to guide focus</li>
                  <li>Live jackpot updates create urgency</li>
                  <li>Tactile interactions improve responsiveness</li>
                </ul>
              </>
            }
            visual={
              <div className="cs-image">
                <img src="https://i.postimg.cc/8zL5RGFG/Jackpot-Card.png" alt="Jackpot card interaction" />
              </div>
            }
          />
        </CsSection>

        <CsSection>
          <h4>Outcome</h4>
          <p>
            The redesign shifts the experience from passive scrolling to structured
            exploration, supporting both browsing and high-intent play.
          </p>
          <p>
            By designing for intent rather than volume, the product becomes easier
            to navigate, quicker to act in, and more engaging over time.
          </p>
          <CsQuote>Instead of showing everything, the product starts guiding users.</CsQuote>
        </CsSection>

        <CsSection>
          <h4>Reflection</h4>
          <p>
            This project reinforced the importance of designing systems, not just screens.
            Structure and intent have more impact than visual polish alone.
          </p>
        </CsSection>
      </>
    ),
  },

duelo: {
  tag: "Case Study · Duelo · Product Build · 2026",
  title: "Duelo: decisions over opinions",
  hook: "Design decisions are often made on opinion, not evidence. Duelo explores a faster, structured way to validate ideas through direct comparison.",
  meta: [
    { k: "Role",   v: "Founder · Product Designer", big: false },
    { k: "Type",   v: "0→1 Product Build",          big: false },
    { k: "Focus",  v: "Decision-making UX",         big: true  },
    { k: "Stage",  v: "Early validation",           big: true  },
  ],

  body: () => (
    <>

      {/* CONTEXT */}
      <CsSection>
        <h4>Context</h4>
        <p>
          Designers make hundreds of small decisions, often without real validation.
        </p>
        <p>
          Existing tools either rely on opinion or require traffic, leaving most teams
          without a clear way to test ideas early.
        </p>
      </CsSection>

      {/* PROBLEM */}
      <CsSection>
        <h4>The Problem</h4>
        <CsSplit
          text={
            <>
              <p>
                Feedback today is easy to collect, but hard to use.
              </p>
              <ul>
                <li>Opinions pile up without structure</li>
                <li>Ideas are hard to compare directly</li>
                <li>A/B testing is inaccessible early</li>
                <li>Decisions rely on gut or hierarchy</li>
              </ul>
              <CsQuote>
                The issue wasn’t feedback. It was turning it into decisions.
              </CsQuote>
            </>
          }
          visual={
            <div className="cs-image">
              <img src="https://i.postimg.cc/Mp7Z8F1F/control.jpg" />
            </div>
          }
        />
      </CsSection>

      {/* CORE IDEA */}
      <CsSection>
        <h4>Core Idea</h4>
        <p>
          Duelo reframes feedback as a decision between two options.
        </p>
        <p>
          Instead of asking for open input, users compare A vs B, creating
          immediate, structured signal.
        </p>
        <CsQuote>
          Post A vs B. Let people decide. Ship the winner.
        </CsQuote>
      </CsSection>

      {/* CORE FLOW */}
      <CsSection>
        <h4>Product Loop</h4>

        <CsSplit
          text={
            <>
              <p>
                The entire experience is built around a fast decision loop:
              </p>
              <ul>
                <li>Post a duel in seconds</li>
                <li>Collect community votes</li>
                <li>See live results and breakdowns</li>
                <li>Iterate and refine</li>
              </ul>
              <p>
                This creates a continuous cycle of validation, not one-off feedback.
              </p>
            </>
          }
          visual={
            <div className="cs-image flow">
              <img src="https://i.postimg.cc/zffnbKD5/flow-steps.png" />
            </div>
          }
        />
      </CsSection>

      {/* CREATE DUEL */}
      <CsSection>
        <h4>Create · Structured Input</h4>

        <CsSplit
          text={
            <>
              <p>
                Creating a duel is designed to be fast and lightweight.
              </p>
              <ul>
                <li>Upload two variants</li>
                <li>Add optional context</li>
                <li>Publish instantly</li>
              </ul>
              <p>
                No setup, no traffic requirements, just immediate testing.
              </p>
              <CsQuote>
                If it takes more than a minute, it’s too slow.
              </CsQuote>
            </>
          }
          visual={
            <div className="cs-image createduel">
              <img src="https://i.postimg.cc/fT4j2VC0/create-duel-2.jpg" />
            </div>
          }
        />
      </CsSection>

      {/* FEED */}
      <CsSection>
        <h4>Feed · Decision Surface</h4>

        <CsSplit
          reverse
          text={
            <>
              <p>
                The feed is optimised for fast, repeat decisions.
              </p>
              <ul>
                <li>Full-bleed, scroll-first layout</li>
                <li>Clear A vs B split</li>
                <li>Single tap voting</li>
              </ul>
              <p>
                Participation becomes lightweight and continuous.
              </p>
            </>
          }
          visual={
            <div className="cs-image">
              <img src="https://i.postimg.cc/hvswrVm9/Duelo-feed-NEW.jpg" />
            </div>
          }
        />
      </CsSection>

      {/* RESULTS */}
      <CsSection>
        <h4>Results · From Opinion to Signal</h4>

        <CsSplit
          text={
            <>
              <p>
                Every duel generates structured insight, not just votes.
              </p>
              <ul>
                <li>Vote distribution</li>
                <li>Top comments</li>
                <li>Segment breakdowns</li>
              </ul>
              <p>
                This bridges the gap between qualitative feedback and usable data.
              </p>
            </>
          }
          visual={
            <div className="cs-image breakdown">
              <img src="https://i.postimg.cc/hvZsvsxy/Duelo-breakdown.png" />
            </div>
          }
        />
      </CsSection>

      {/* PRINCIPLES */}
      <CsSection>
        <h4>Design Principles</h4>

        <CsTwoCol
          left={
            <>
              <ul>
                <li>Fast decisions, not slow setup</li>
                <li>Visual-first, minimal UI</li>
                <li>No friction to participate</li>
              </ul>
            </>
          }
          right={
            <>
              <ul>
                <li>Comparison over open input</li>
                <li>Signal over noise</li>
                <li>Community drives value</li>
              </ul>
            </>
          }
        />
      </CsSection>

      {/* USERS (LIGHT TOUCH) */}
      <CsSection>
        <h4>Who it’s for</h4>
        <p>
          Duelo is built for designers, founders, and product teams who need
          fast validation without traffic or engineering dependency.
        </p>
      </CsSection>

      {/* STATUS */}
      <CsSection>
        <h4>Status</h4>
        <p>
          Currently exploring early usage and validating whether structured
          comparison leads to clearer product decisions.
        </p>
      </CsSection>

      {/* OUTCOME */}
      <CsSection>
        <h4>Outcome</h4>
        <p>
          Duelo explores how interaction patterns can shift behaviour,
          from collecting opinions to making decisions.
        </p>
        <CsQuote>
          The value isn’t in feedback. It’s in clarity.
        </CsQuote>
      </CsSection>

    </>
  ),
},

}