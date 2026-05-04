import { Link } from 'react-router-dom'
import { ChevronLeftIcon, HeartIcon, ClockIcon, InfoCircleIcon } from '../../assets/icons'
import { AmenityIcon } from '../../components/SelectTrip/AmenityIcon'
import { CONFIRM_TRIP_DUMMY_DATA } from './ConfirmTrip.constants'
import './ConfirmTrip.css'

export function ConfirmTrip() {
  const { navigation, page, summary, amenities, interior, important, actionBar } =
    CONFIRM_TRIP_DUMMY_DATA

  return (
    <article className="confirm-trip">
      <div className="confirm-trip__main">
        <Link to={navigation.backTo} className="confirm-trip__back">
          <span className="confirm-trip__back-icon" aria-hidden>
            <ChevronLeftIcon />
          </span>
          {navigation.backLabel}
        </Link>

        <header className="confirm-trip__header">
          <h1 className="confirm-trip__title">{page.title}</h1>
          <p className="confirm-trip__subtitle">{page.subtitle}</p>
        </header>

        <div className="confirm-trip__bento">
          <section
            className="confirm-trip__card confirm-trip__card--summary"
            aria-labelledby="confirm-trip-route-heading"
          >
            <div className="confirm-trip__summary-top">
              <div className="confirm-trip__summary-titles">
                <p className="confirm-trip__tier-badge">{summary.tierBadge}</p>
                <h2 id="confirm-trip-route-heading" className="confirm-trip__route-title">
                  {summary.routeTitle}
                </h2>
              </div>
              <span className="confirm-trip__route-favorite" aria-hidden>
                <HeartIcon />
              </span>
            </div>

            <div className="confirm-trip__timeline">
              <span className="confirm-trip__timeline-line" aria-hidden />

              <div className="confirm-trip__timeline-row confirm-trip__timeline-row--depart">
                <div className="confirm-trip__timeline-gutter">
                  <span className="confirm-trip__timeline-dot confirm-trip__timeline-dot--depart" />
                </div>
                <div className="confirm-trip__timeline-body">
                  <div className="confirm-trip__timeline-meta">
                    <span className="confirm-trip__timeline-kind confirm-trip__timeline-kind--depart">
                      {summary.departure.label}
                    </span>
                    <span className="confirm-trip__timeline-date">
                      {summary.departure.date}
                    </span>
                  </div>
                  <p className="confirm-trip__timeline-time">{summary.departure.time}</p>
                  <p className="confirm-trip__timeline-place">{summary.departure.station}</p>
                </div>
              </div>

              <div className="confirm-trip__timeline-duration">
                <div className="confirm-trip__timeline-gutter confirm-trip__timeline-gutter--center">
                  <span className="confirm-trip__duration-icon" aria-hidden>
                    <ClockIcon />
                  </span>
                </div>
                <div className="confirm-trip__duration-pill-wrap">
                  <span className="confirm-trip__duration-pill">{summary.duration.label}</span>
                </div>
              </div>

              <div className="confirm-trip__timeline-row confirm-trip__timeline-row--arrive">
                <div className="confirm-trip__timeline-gutter">
                  <span className="confirm-trip__timeline-dot confirm-trip__timeline-dot--arrive" />
                </div>
                <div className="confirm-trip__timeline-body">
                  <div className="confirm-trip__timeline-meta">
                    <span className="confirm-trip__timeline-kind confirm-trip__timeline-kind--arrive">
                      {summary.arrival.label}
                    </span>
                    <span className="confirm-trip__timeline-date">
                      {summary.arrival.date}
                    </span>
                  </div>
                  <p className="confirm-trip__timeline-time">{summary.arrival.time}</p>
                  <p className="confirm-trip__timeline-place">{summary.arrival.station}</p>
                </div>
              </div>
            </div>
          </section>

          <aside className="confirm-trip__aside" aria-label="Trip extras">
            <section className="confirm-trip__card confirm-trip__card--amenities">
              <h3 className="confirm-trip__amenities-title">{amenities.title}</h3>
              <ul className="confirm-trip__amenities-chips">
                {amenities.items.map((item) => (
                  <li key={item.label} className="confirm-trip__amenity-chip">
                    <span
                      className={`confirm-trip__amenity-chip-icon confirm-trip__amenity-chip-icon--${item.icon}`}
                      aria-hidden
                    >
                      <AmenityIcon kind={item.icon} />
                    </span>
                    {item.label}
                  </li>
                ))}
              </ul>
            </section>

            <div className="confirm-trip__card confirm-trip__card--media">
              <img
                src={interior.imageSrc}
                alt={interior.imageAlt}
                className="confirm-trip__media-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </aside>

          <section className="confirm-trip__card confirm-trip__card--info">
            <div className="confirm-trip__info-inner">
              <div className="confirm-trip__info-icon-wrap" aria-hidden>
                <InfoCircleIcon />
              </div>
              <div className="confirm-trip__info-copy">
                <h3 className="confirm-trip__info-title">{important.title}</h3>
                <p className="confirm-trip__info-text">{important.body}</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="confirm-trip__action-bar" role="region" aria-label="Continue booking">
        <div className="confirm-trip__action-bar-inner">
          <div className="confirm-trip__action-bar-price">
            <span className="confirm-trip__action-bar-label">{actionBar.priceLabel}</span>
            <p className="confirm-trip__action-bar-amount">
              <span className="confirm-trip__action-bar-amount-main">
                {actionBar.priceMain}
              </span>
              <span className="confirm-trip__action-bar-amount-suffix">
                {actionBar.priceFraction}
              </span>
            </p>
          </div>
          <Link
            to={actionBar.ctaHref}
            className="button button--primary confirm-trip__cta"
          >
            <span className="button__label">{actionBar.ctaLabel}</span>
          </Link>
        </div>
      </div>
    </article>
  )
}
