import {
  WebsiteXstillContactFirstIcon,
  WebsiteXstillContactSecondIcon,
  WebsiteXstillContactThirdIcon,
} from '../../assets/icons'

export function WebsiteXstillContact() {
  return (
    <section className="website-xstill__contact" aria-label="Book a free demo">
      <div className="website-xstill__contact-glow website-xstill__contact-glow--left" aria-hidden />
      <div className="website-xstill__contact-glow website-xstill__contact-glow--right-bottom" aria-hidden />

      <div className="website-xstill__contact-inner">
        <div className="website-xstill__contact-copy">
          <span className="website-xstill__contact-pill">
            <span className="website-xstill__contact-pill-dot" aria-hidden />
            Free Demo
          </span>
          <h2 className="website-xstill__contact-title">
            <span>Book a</span>
            <span className="website-xstill__contact-title-accent">15-Minute Demo</span>
          </h2>
          <p className="website-xstill__contact-subtitle">
            We&apos;ll show you exactly how to take your bus company online and streamline daily
            operations with XSTIL.
          </p>

          <ul className="website-xstill__contact-list">
            <li>
              <span className="website-xstill__contact-list-icon" aria-hidden>
                <WebsiteXstillContactFirstIcon />
              </span>
              <span>See the live seat-selection flow in action</span>
            </li>
            <li>
              <span className="website-xstill__contact-list-icon" aria-hidden>
                <WebsiteXstillContactSecondIcon />
              </span>
              <span>Learn how to add a new route in under 2 minutes</span>
            </li>
            <li>
              <span className="website-xstill__contact-list-icon" aria-hidden>
                <WebsiteXstillContactThirdIcon />
              </span>
              <span>Ask about payment provider integrations</span>
            </li>
          </ul>

          <article className="website-xstill__contact-testimonial" aria-label="Customer quote">
            <p className="website-xstill__contact-stars" aria-hidden>
              ★★★★★
            </p>
            <blockquote>
              &quot;XSTIL transformed how we manage our routes. We went live in days and started
              getting online bookings immediately.&quot;
            </blockquote>
            <div className="website-xstill__contact-person">
              <span className="website-xstill__contact-avatar" aria-hidden>
                K
              </span>
              <span>
                <strong>Kofi Agyeman</strong>
                <small>Fleet Manager, GTA Transport</small>
              </span>
            </div>
          </article>
        </div>

        <div className="website-xstill__contact-form-card">
          <h3>Request Your Free Demo</h3>
          <p>Fill in your details and we&apos;ll get back to you within 24 hours.</p>

          <form className="website-xstill__contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="website-xstill__contact-grid-2">
              <div>
                <input type="text" placeholder="Your Name" />
              </div>
              <div>
                <input type="text" placeholder="Company Name" />
              </div>
            </div>

            <div className="website-xstill__contact-input">
              <input type="email" placeholder="Work Email" />
            </div>

            <div className="website-xstill__contact-input">
              <input type="tel" placeholder="Phone Number" />
            </div>

            <div className="website-xstill__contact-input">
              <input type="text" placeholder="Approx. Monthly Passengers" />
            </div>

            <div className="website-xstill__contact-input website-xstill__contact-input--textarea">
              <textarea placeholder="What should we focus on during your demo?" />
            </div>

            <button type="submit">Request Free Demo</button>
            <p className="website-xstill__contact-form-footnote">
              No credit card required - We respond within 24 hours
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
