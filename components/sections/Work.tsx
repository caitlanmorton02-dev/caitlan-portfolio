export default function Work() {
return ( <section id="cait-work"> <div className="wrap"> <div className="sec-label">Selected Work</div>
    <div className="work-head r">
      <h2 className="work-h2">
        Four projects.
        <br />
        <em>One consistent approach.</em>
      </h2>
      <span className="work-note">2022 to 2026</span>
    </div>

    {/* Featured */}
    <div className="card-feat r" data-cs="marketplace">
      <div
        className="card-visual"
        style={{
          background:
            "linear-gradient(160deg, var(--bg-mid) 0%, var(--bg-warm) 100%)",
        }}
      >
        <img
          src="https://i.postimg.cc/Y2bjCmbx/MP-Cover.jpg"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div className="card-info">
        <div className="card-content">
          <span className="card-tag">
            Featured · End-to-End · Live · 2022
          </span>
          <h2 className="card-title">
            PLT Marketplace: reducing listing friction at scale
          </h2>
          <p className="card-desc">
            Users were dropping off at listing due to effort. I designed a
            flow that reused existing purchase data to remove friction and
            make selling feel as easy as buying.
          </p>
        </div>

        <div className="card-content-bottom">
          <div className="card-meta">
            <div className="meta-row">
              <div className="meta-key">Role</div>
              <div className="meta-val">
                Sole Designer · Project Lead
              </div>
            </div>

            <div className="meta-row">
              <div className="meta-key">User satisfaction</div>
              <div className="meta-val big">68%</div>
            </div>

            <div className="meta-row">
              <div className="meta-key">Scope</div>
              <div className="meta-val">
                Research to shipped MVP
              </div>
            </div>

            <div className="meta-row">
              <div className="meta-key">Survey responses</div>
              <div className="meta-val big">610</div>
            </div>
          </div>

          <div className="card-cta">
            <span className="cta-rule"></span>Read case study
          </div>
        </div>
      </div>
    </div>

    {/* Grid */}
    <div className="work-grid">

      <div className="card-sm r r1" data-cs="betfred">
        <div className="card-sm-visual" style={{ background: "#0a1628" }}>
          <div className="inner">
            <img
              src="https://i.postimg.cc/gJJghhFf/Betfred-Cover.jpg"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="card-sm-body">
          <span className="card-tag">
            Design Task · Casino UX · 2026
          </span>
          <h3>
            Betfred Casino: designing for intent, not volume
          </h3>
          <p>
            A concept redesign focused on restructuring a grid-heavy
            experience into clear, intent-driven journeys.
          </p>

          <div className="card-sm-footer">
            <span className="sm-role">
              Solo Designer · Concept
            </span>
            <span className="sm-result">
              Restructured browsing around user intent
            </span>
          </div>

          <div className="card-cta" style={{ marginTop: 14 }}>
            <span className="cta-rule"></span>Read case study
          </div>
        </div>
      </div>

      <div className="card-sm r r2" data-cs="lab">
        <div
          className="card-sm-visual"
          style={{ background: "var(--bg-warm)" }}
        >
          <div className="inner">
            <img
              src="https://i.postimg.cc/W335ZZc2/Product-Lab-Cover.jpg"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="card-sm-body">
          <span className="card-tag">
            Self-Initiated · Built and Deployed · 2026
          </span>
          <h3>
            Product Lab: learning product thinking through decisions
          </h3>

          <p className="card-desc">
            Scenario-based learning product teaching product thinking
            through real decisions.
          </p>

          <div className="card-sm-footer">
            <span className="sm-role">
              Creator · Designer · Builder
            </span>
            <span className="sm-result">
              224 active users · 53% mission completion
            </span>
          </div>

          <div className="card-cta-row" style={{ marginTop: 14 }}>
            <div className="card-cta">
              <span className="cta-rule"></span>Read case study
            </div>

            <a
              href="https://productlabhub.com/"
              target="_blank"
              rel="noopener"
              className="card-cta-link"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="cta-rule"></span>See live
            </a>
          </div>
        </div>
      </div>

      <div className="card-sm r r3" data-cs="pdp">
        <div
          className="card-sm-visual"
          style={{ background: "var(--bg-mid)" }}
        >
          <div className="inner">
            <img
              src="https://i.postimg.cc/fLL8ddQM/PDP-Cover.jpg"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="card-sm-body">
          <span className="card-tag">
            Experimentation · A/B Testing · 2024
          </span>
          <h3>
            PDP Optimisation: preserving context at high-intent moments
          </h3>

          <p>
            Introduced in-context interactions that preserved flow and
            improved conversion across tests.
          </p>

          <div className="card-sm-footer">
            <span className="sm-role">
              Lead Designer · Tester
            </span>
            <span className="sm-result">
              +1.75% conversion uplift · +12% wishlist adds
            </span>
          </div>

          <div className="card-cta" style={{ marginTop: 14 }}>
            <span className="cta-rule"></span>Read case study
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
);
}
