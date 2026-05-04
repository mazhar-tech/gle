import { Bus, LocationTargetIcon, MailEnvelopeIcon, ShareIcon } from '../../assets/icons'
import { BOOKING_DETAILS_PAGE } from './BookingDetails.constants'
import './BookingDetails.css'

export function BookingDetails() {
  const d = BOOKING_DETAILS_PAGE

  return (
    <article className="booking-details">
      <div className="booking-details__inner">
        <header className="booking-details__page-header">
          <h1 className="booking-details__title">{d.title}</h1>
          <p className="booking-details__subtitle">{d.subtitle}</p>
        </header>

        <div className="booking-details__stack">
          <section className="booking-details__elevated" aria-label="Booking summary">
            <header className="booking-details__card-head">
              <div className="booking-details__status-pill">
                <span className="booking-details__status-dot" aria-hidden />
                <span className="booking-details__status-text">{d.statusPill}</span>
              </div>
              <p className="booking-details__head-total">{d.header}</p>
            </header>

            <div className="booking-details__card-body">
              <div className="booking-details__columns">
                <div className="booking-details__col booking-details__col--route">
                  <div className="booking-details__route-block">
                    <p className="booking-details__section-label">{d.journeyLabel}</p>
                    <div className="booking-details__timeline">
                      <span className="booking-details__timeline-rail" aria-hidden />
                      <ol className="booking-details__stops">
                        {d.stops.map((stop) => (
                          <li key={stop.city} className="booking-details__stop">
                            <span
                              className={`booking-details__stop-dot booking-details__stop-dot--${stop.kind}`}
                              aria-hidden
                            />
                            <div className="booking-details__stop-row">
                              <div className="booking-details__stop-place">
                                <p className="booking-details__stop-city">{stop.city}</p>
                                <p className="booking-details__stop-station">{stop.station}</p>
                              </div>
                              <div className="booking-details__stop-times">
                                <p className="booking-details__stop-time">{stop.time}</p>
                                <p className="booking-details__stop-time-meta">{stop.timeMeta}</p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <div className="booking-details__boarding">
                    <span  aria-hidden>
                      <Bus />
                    </span>
                    <div className="booking-details__boarding-copy">
                      <p className="booking-details__boarding-label">{d.boarding.label}</p>
                      <p className="booking-details__boarding-value">{d.boarding.value}</p>
                    </div>
                  </div>
                </div>

                <div className="booking-details__col booking-details__col--meta">
                  <div className="booking-details__traveler-block">
                    <p className="booking-details__section-label">{d.travelerLabel}</p>
                    <div className="booking-details__tiles">
                      <div className="booking-details__tile">
                        <p className="booking-details__tile-label">{d.seatsLabel}</p>
                        <p className="booking-details__tile-value">{d.seatsValue}</p>
                      </div>
                      <div className="booking-details__tile">
                        <p className="booking-details__tile-label">{d.classLabel}</p>
                        <p className="booking-details__tile-value">{d.classValue}</p>
                      </div>
                    </div>
                  </div>

                  <div className="booking-details__action-row">
                    <button type="button" className="booking-details__btn-primary">
                      <span className="booking-details__btn-primary-icon" aria-hidden>
                        <MailEnvelopeIcon fill='#fff' />
                      </span>
                      <span>{d.actions.resendEmail}</span>
                    </button>
                    <button type="button" className="booking-details__btn-secondary">
                      <span className="booking-details__btn-secondary-icon" aria-hidden>
                        <ShareIcon />
                      </span>
                      <span>{d.actions.shareBooking}</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="booking-details__fare">
                <p className="booking-details__fare-title">{d.fareLabel}</p>
                <div className="booking-details__fare-box">
                  {d.fareRows.map((row) => (
                    <div key={row.label} className="booking-details__fare-line">
                      <span className="booking-details__fare-line-label">{row.label}</span>
                      <span className="booking-details__fare-line-amount">{row.amount}</span>
                    </div>
                  ))}
                  <div className="booking-details__fare-line booking-details__fare-line--total">
                    <span className="booking-details__fare-line-label">{d.fareTotalLabel}</span>
                    <span className="booking-details__fare-total-amount">{d.fareTotal}</span>
                  </div>
                </div>
              </div>
            </div>

            <footer className="booking-details__card-foot">
              <p className="booking-details__foot-message">{d.cardFooter.message}</p>
              <button type="button" className="booking-details__foot-btn">
                <span className="booking-details__foot-btn-shadow" aria-hidden />
                <span className="booking-details__foot-btn-label">{d.cardFooter.cta}</span>
              </button>
            </footer>
          </section>

          <section className="booking-details__map-card" aria-label="Route map">
            <div className="booking-details__map-inner">
              <iframe
                className="booking-details__map-frame"
                title={d.mapEmbed.title}
                src={d.mapEmbed.src}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="booking-details__map-gradient" aria-hidden />
              <div className="booking-details__map-chip">
                <span className="booking-details__map-chip-shadow" aria-hidden />
                <div className="booking-details__map-chip-body">
                  <span aria-hidden>
                    <LocationTargetIcon />
                  </span>
                  <div className="booking-details__map-chip-text">
                    <p className="booking-details__map-chip-label">{d.mapChip.label}</p>
                    <p className="booking-details__map-chip-value">{d.mapChip.value}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}
