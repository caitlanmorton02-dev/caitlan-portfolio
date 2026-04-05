/**
 * cases.tsx  (renamed from cases.ts — JSX required for ReactNode bodies)
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
            I designed the Marketplace experience end-to-end — from discovery through to listing and seller interaction.
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
                  It was the biggest drop-off point in the journey — not because users didn&apos;t want to sell,
                  but because getting started felt like too much effort.
                </p>
                <CsQuote>Users weren&apos;t the problem — starting from scratch was.</CsQuote>
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
                  to something they&apos;ve already done — buying the item.
                </p>
                <p>
                  Users start from their wardrobe, preview the product, and move into listing
                  with key details already filled in.
                </p>
                <CsQuote>Listing becomes a continuation of ownership — not a task from zero.</CsQuote>
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
                  I designed &ldquo;My Wardrobe&rdquo; — a flow that surfaces items from a user&apos;s
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
                  The experience shifts from input to selection — making selling feel as easy as buying.
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
            Removing effort — not adding features — made the experience feel easier and more achievable.
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
      { k: "Confidence",       v: "99.99%",                 big: true  },
    ],
    body: () => (
      <>
        <CsSection>
          <h4>Context</h4>
          <p>
            I led experimentation across the product detail page, focusing on improving
            conversion at high-intent moments. This is where users decide to buy —
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
            Based on the wishlist results, I applied the same principle to add-to-bag —
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
            Both tests validated the same principle — preserving context at high-intent
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
            I wanted to move beyond passive learning and create something interactive — where users learn by making decisions.
          </p>
          <p>
            I owned the full lifecycle, from concept and interaction design through to build and launch.
          </p>
        </CsSection>

        <CsSection className="productlab">
          <h4>The Problem</h4>
          <p>
            Most design and product learning is passive. You read frameworks,
            consume content, and follow structured guidance — but rarely practise
            making decisions in context.
          </p>
          <div className="cs-image" style={{ marginTop: "16px" }}>
            <img src="https://i.postimg.cc/L8qZdjgn/issue.png" alt="Passive learning problem" />
          </div>
          <p className="cs-caption">
            Learning is structured and informative — but lacks decision-making and feedback.
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
                  Each mission presents context, constraints, and trade-offs — mirroring
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
                <li><strong>Missions over modules</strong> — framed as scenarios, not lessons</li>
                <li><strong>Progressive complexity</strong> — builds without overwhelming</li>
                <li><strong>Guided, not prescriptive</strong> — supports thinking, not answers</li>
              </ul>
            }
            right={
              <ul>
                <li><strong>Minimal interface</strong> — focus on decisions, not UI</li>
                <li><strong>Immediate feedback</strong> — reinforces learning loop</li>
                <li><strong>Short sessions</strong> — designed for repeat engagement</li>
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
            Rather than redesigning individual screens, I approached this as a system problem —
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
                <CsQuote>The issue wasn&apos;t content — it was how it was structured.</CsQuote>
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
            The product treated these behaviours the same — forcing everything into
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
                  I restructured the experience around intent — separating browsing from
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
            exploration — supporting both browsing and high-intent play.
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
}