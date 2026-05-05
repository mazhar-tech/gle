import type { HomeDummyData } from '../../pages/Home/Home.constants'

type PlatformFeatures = HomeDummyData['platformFeatures']

export function HomePlatformFeatures({ platformFeatures }: { platformFeatures: PlatformFeatures }) {
  return (
    <section className="home__platform" id="platform-features" aria-labelledby="home-platform-heading">
      <div className="home__platform-inner">
        <span className="home__platform-pill">
          <span className="home__platform-pill-dot" aria-hidden />
          {platformFeatures.pill}
        </span>

        <h2 id="home-platform-heading" className="home__platform-title">
          {platformFeatures.title}
        </h2>
        <p className="home__platform-subtitle">{platformFeatures.subtitle}</p>

        <div className="home__platform-tabs" role="tablist" aria-label="Platform feature categories">
          {platformFeatures.tabs.map((tab, index) => (
            <button
              key={tab.label}
              type="button"
              className={`home__platform-tab${index === 0 ? ' home__platform-tab--active' : ''}`}
              role="tab"
              aria-selected={index === 0}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="home__platform-content">
          <div className="home__platform-copy">
            <span className="home__platform-kicker">{platformFeatures.kicker}</span>
            <h3 className="home__platform-heading">{platformFeatures.heading}</h3>
            <p className="home__platform-body">{platformFeatures.body}</p>

            <ul className="home__platform-list">
              {platformFeatures.bullets.map((bullet) => (
                <li key={bullet} className="home__platform-list-item">
                  <span className="home__platform-list-icon" aria-hidden />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <button type="button" className="home__platform-btn">
              {platformFeatures.ctaLabel}
            </button>
          </div>

          <div className="home__platform-mockup" aria-label="Sales and booking dashboard preview">
            <div className="home__platform-window-top">
              <div className="home__platform-window-dots" aria-hidden>
                <span />
                <span />
                <span />
              </div>
              <span className="home__platform-window-bar" aria-hidden />
              <span className="home__platform-window-tag">{platformFeatures.kicker}</span>
            </div>

            <div className="home__platform-search-row">
              <span className="home__platform-search-dot" aria-hidden />
              <span className="home__platform-search-bar" aria-hidden />
              <span className="home__platform-search-btn">Search</span>
            </div>

            {platformFeatures.routes.map((route) => (
              <div key={route.time} className={`home__platform-route${route.highlight ? ' home__platform-route--active' : ''}`}>
                <div>
                  <p className="home__platform-route-title">{route.title}</p>
                  <p className="home__platform-route-load">{route.load}</p>
                </div>
                <div>
                  <p className="home__platform-route-price">{route.price}</p>
                  {route.flag ? <p className="home__platform-route-flag">{route.flag}</p> : null}
                </div>
              </div>
            ))}

            <div className="home__platform-seat-wrap">
              <p className="home__platform-seat-label">Select your seat</p>
              <div className="home__platform-seat-grid" aria-hidden>
                {platformFeatures.seats.map((tone, idx) => (
                  <span key={`${tone}-${idx}`} className={`home__platform-seat home__platform-seat--${tone}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
