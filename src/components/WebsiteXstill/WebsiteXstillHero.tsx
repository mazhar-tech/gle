import { BookingConfirmedCircleIcon, WebsiteXstillSeatBusIcon } from '../../assets/icons'
import {
  CONFIRM_ROWS,
  HERO_CONTENT,
  SEARCH_FIELDS,
  SEAT_NUMBERS,
  TRUST_INITIALS,
} from './WebsiteXstillHero.constants'

export function WebsiteXstillHero() {
  return (
    <section className="website-xstill__hero">
      <div className="website-xstill__copy">
        <p className="website-xstill__badge">
          <span className="website-xstill__badge-icon" aria-hidden>
            ✦
          </span>
          {HERO_CONTENT.badge}
        </p>

        <h1 className="website-xstill__headline">
          {HERO_CONTENT.headlineLines[0]}
          <br />
          {HERO_CONTENT.headlineLines[1]}
          <br />
          {HERO_CONTENT.headlineLines[2]}
        </h1>

        <p className="website-xstill__description">{HERO_CONTENT.description}</p>

        <div className="website-xstill__cta-row">
          <button type="button" className="website-xstill__btn website-xstill__btn--primary">
            {HERO_CONTENT.primaryCta} <span aria-hidden>→</span>
          </button>
          <button type="button" className="website-xstill__btn website-xstill__btn--ghost">
            <span aria-hidden>▶</span> {HERO_CONTENT.secondaryCta}
          </button>
        </div>

        <div className="website-xstill__trust-row">
          <div className="website-xstill__avatars" aria-hidden>
            {TRUST_INITIALS.map((initial) => (
              <span key={initial}>{initial}</span>
            ))}
          </div>
          <div className="website-xstill__trust-text">
            <p className="website-xstill__stars">{HERO_CONTENT.trustStars}</p>
            <p>
              {HERO_CONTENT.trustPrefix} <span>{HERO_CONTENT.trustHighlight}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="website-xstill__visual">
        <div className="website-xstill__visual-scale">
          <div className="website-xstill__window-top">
            <span className="website-xstill__dots" aria-hidden>
              <i />
              <i />
              <i />
            </span>
            <span className="website-xstill__url">{HERO_CONTENT.browserUrl}</span>
            <span className="website-xstill__live-pill">{HERO_CONTENT.livePill}</span>
          </div>

          <section className="website-xstill__panel website-xstill__panel--search">
            <h2>{HERO_CONTENT.searchPanelTitle}</h2>
            <div className="website-xstill__field-grid">
              {SEARCH_FIELDS.map((field) => (
                <div key={field.label}>
                  <label>{field.label}</label>
                  <p>{field.value}</p>
                </div>
              ))}
            </div>
            <button type="button" className="website-xstill__panel-btn">
              {HERO_CONTENT.searchButtonLabel}
            </button>
          </section>

          <section className="website-xstill__panel website-xstill__panel--seats">
            <div className="website-xstill__panel-head">
              <h2>{HERO_CONTENT.seatPanelTitle}</h2>
              <div className="website-xstill__seat-legend" aria-hidden>
                <span>
                  <i className="is-free" />
                  {HERO_CONTENT.legend.free}
                </span>
                <span>
                  <i className="is-yours" />
                  {HERO_CONTENT.legend.yours}
                </span>
                <span>
                  <i className="is-taken" />
                  {HERO_CONTENT.legend.taken}
                </span>
              </div>
            </div>
            <div className="website-xstill__seat-bus" aria-hidden>
              <span className="website-xstill__seat-bus-icon">
                <WebsiteXstillSeatBusIcon />
              </span>
            </div>
            <div className="website-xstill__seats" aria-hidden>
              {SEAT_NUMBERS.map((seat) => (
                <span key={seat.value} className={seat.tone}>
                  {seat.value}
                </span>
              ))}
            </div>
          </section>

          <section className="website-xstill__confirm">
            <h2>
              <span className="website-xstill__confirm-title-icon" aria-hidden>
                <BookingConfirmedCircleIcon />
              </span>
              {HERO_CONTENT.confirmPanelTitle}
            </h2>
            {CONFIRM_ROWS.map((row) => (
              <p key={row.label}>
                <span>{row.label}</span>
                <strong>{row.value}</strong>
              </p>
            ))}
          </section>

          <div className="website-xstill__floating-live">{HERO_CONTENT.liveFloating}</div>
        </div>
      </div>
    </section>
  )
}
