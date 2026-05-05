import {
  WebsiteXstillAnalyticsIcon,
  WebsiteXstillFeaturesBulletOneIcon,
  WebsiteXstillFeaturesBulletFourIcon,
  WebsiteXstillFeaturesBulletThreeIcon,
  WebsiteXstillFeaturesBulletTwoIcon,
  WebsiteXstillFleetIcon,
  WebsiteXstillSalesBookingIcon,
} from '../../assets/icons'
import './WebsiteXstillFeatures.css'
import {
  FEATURE_BULLETS,
  FEATURES_CONTENT,
  FEATURE_ROUTES,
  FEATURE_SEATS,
  FEATURE_TABS,
} from './WebsiteXstillFeatures.constants'

const TAB_ICONS = {
  sales: <WebsiteXstillSalesBookingIcon />,
  fleet: <WebsiteXstillFleetIcon />,
  analytics: <WebsiteXstillAnalyticsIcon />,
} as const

const BULLET_ICONS = {
  ticket: <WebsiteXstillFeaturesBulletOneIcon />,
  seat: <WebsiteXstillFeaturesBulletTwoIcon />,
  card: <WebsiteXstillFeaturesBulletThreeIcon />,
  monitor: <WebsiteXstillFeaturesBulletFourIcon />,
} as const

export function WebsiteXstillFeatures() {
  return (
    <section className="website-xstill__features" aria-labelledby="website-xstill-features-title">
      <div className="website-xstill__features-inner">
        <span className="website-xstill__features-pill">
          <span className="website-xstill__features-pill-dot" aria-hidden />
          {FEATURES_CONTENT.pill}
        </span>

        <h2 id="website-xstill-features-title" className="website-xstill__features-title">
          {FEATURES_CONTENT.title}
        </h2>
        <p className="website-xstill__features-subtitle">
          {FEATURES_CONTENT.subtitle}
        </p>

        <div className="website-xstill__features-tabs" role="tablist" aria-label="Platform areas">
          {FEATURE_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={tab.active}
              className={`website-xstill__features-tab${tab.active ? ' is-active' : ''}`}
            >
              <span aria-hidden>{TAB_ICONS[tab.icon]}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="website-xstill__features-content">
          <div className="website-xstill__features-copy">
            <span className="website-xstill__features-kicker">
              <span aria-hidden className="website-xstill__features-kicker-dot" />
              {FEATURES_CONTENT.kicker}
            </span>

            <h3>{FEATURES_CONTENT.heading}</h3>
            <p>{FEATURES_CONTENT.body}</p>

            <ul>
              {FEATURE_BULLETS.map((item) => (
                <li key={item.id}>
                  <span className="website-xstill__features-list-icon" aria-hidden>
                    {BULLET_ICONS[item.icon]}
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <button type="button" className="website-xstill__features-cta">
              {FEATURES_CONTENT.ctaLabel}
            </button>
          </div>

          <div className="website-xstill__features-mockup" aria-label="Booking dashboard preview">
            <div className="website-xstill__features-mockup-top">
              <span className="website-xstill__features-mockup-dots" aria-hidden>
                <i />
                <i />
                <i />
              </span>
              <span className="website-xstill__features-mockup-bar" aria-hidden />
              <span className="website-xstill__features-mockup-tag">{FEATURES_CONTENT.mockupTag}</span>
            </div>

            <div className="website-xstill__features-search">
              <span className="website-xstill__features-search-dot" aria-hidden />
              <span className="website-xstill__features-search-bar" aria-hidden />
              <span className="website-xstill__features-search-btn">{FEATURES_CONTENT.searchLabel}</span>
            </div>

            {FEATURE_ROUTES.map((route) => (
              <article
                key={route.id}
                className={`website-xstill__features-route${route.active ? ' is-active' : ''}`}
              >
                <div>
                  <p className="website-xstill__features-route-title">{route.title}</p>
                  <p className="website-xstill__features-route-load">{route.load}</p>
                </div>
                <div>
                  <p className="website-xstill__features-route-price">{route.price}</p>
                  {'flag' in route && route.flag ? (
                    <p className="website-xstill__features-route-flag">{route.flag}</p>
                  ) : null}
                </div>
              </article>
            ))}

            <div className="website-xstill__features-seats">
              <p>{FEATURES_CONTENT.seatLabel}</p>
              <div className="website-xstill__features-seat-grid" aria-hidden>
                {FEATURE_SEATS.map((tone, idx) => (
                  <span key={`${tone}-${idx}`} className={`website-xstill__features-seat is-${tone}`} />
                ))}
              </div>
            </div>

            <span className="website-xstill__features-mockup-glow" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  )
}
