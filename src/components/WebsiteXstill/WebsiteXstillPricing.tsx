import { WebsiteXstillLaunchNoteIcon, WebsiteXstillPricingNoteIcon } from '../../assets/icons'

const PRICING_FEATURES = [
  'Unlimited bookings & seat reservations',
  'Real-time seat map & selection',
  'Route & fleet management dashboard',
  'Mobile-friendly booking portal',
  'Instant SMS/email confirmations',
  'Revenue & analytics reporting',
  'Free updates & maintenance',
  'Dedicated onboarding support',
] as const

export function WebsiteXstillPricing() {
  return (
    <section className="website-xstill__pricing" aria-label="Pricing">
      <span className="website-xstill__pricing-pill">
        <span className="website-xstill__pricing-pill-dot" aria-hidden />
        Pricing
      </span>
      <h2 className="website-xstill__pricing-title">A Model Built for Bus Operators</h2>
      <p className="website-xstill__pricing-subtitle">
        We succeed when you succeed — pay a modest annual platform fee plus booking-based pricing
        that scales with your growth.
      </p>

      <div className="website-xstill__pricing-grid">
        <article className="website-xstill__pricing-primary">
          <span className="website-xstill__pricing-primary-pill">The Partner Plan</span>
          <h3>
            Low Annual Fee + <span>Success-Based</span> Pricing
          </h3>

          <p className="website-xstill__pricing-amount">
            Affordable <strong>upfront</strong>
          </p>
          <p className="website-xstill__pricing-copy">
            Traditional software charges thousands upfront. We keep startup costs low and grow with
            your booking volume.
          </p>

          <ul className="website-xstill__pricing-features">
            {PRICING_FEATURES.map((feature) => (
              <li key={feature}>
                <span className="website-xstill__pricing-check" aria-hidden>
                  <WebsiteXstillLaunchNoteIcon />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button type="button" className="website-xstill__pricing-cta">
          Get Started - Request a demo
          </button>
        </article>

        <article className="website-xstill__pricing-side">
          <header>
            <span className="website-xstill__pricing-side-pill">Why It Works</span>
            <h3>Built to Scale With Your Business</h3>
            <p>Whether you have 2 buses or 200, our pricing scales fairly as your volume grows.</p>
          </header>

          <div className="website-xstill__pricing-separator" aria-hidden />

          <div className="website-xstill__pricing-bars">
            <div>
              <p>
                <span>Starter (2–10 buses)</span>
                <small>Low annual fee</small>
              </p>
              <i style={{ width: '37%' }} />
            </div>
            <div>
              <p>
                <span>Growth (10–50 buses)</span>
                <small>Scales with volume</small>
              </p>
              <i style={{ width: '66%' }} />
            </div>
            <div>
              <p>
                <span>Enterprise (50+ buses)</span>
                <small>Custom pricing</small>
              </p>
              <i style={{ width: '100%' }} />
            </div>
          </div>

          <div className="website-xstill__pricing-side-note">
            <span aria-hidden>
              <WebsiteXstillPricingNoteIcon />
            </span>
            <div>
              <h4>Custom quote for your fleet</h4>
              <p>
                Contact us with your fleet size and monthly passengers to receive a tailored
                commercial proposal.
              </p>
            </div>
          </div>

          <button type="button" className="website-xstill__pricing-side-btn">
            Talk to Sales <span aria-hidden>→</span>
          </button>
        </article>
      </div>
    </section>
  )
}
