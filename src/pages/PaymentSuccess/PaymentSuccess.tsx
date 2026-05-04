import { CheckMarkIcon, LinkArrowIcon, PinMarkerIcon, RouteArrowIcon } from '../../assets/icons'
import { PAYMENT_SUCCESS_DUMMY_DATA } from './PaymentSuccess.constants'
import './PaymentSuccess.css'

export function PaymentSuccess() {
  const { page, booking, trip, actions, footnote } = PAYMENT_SUCCESS_DUMMY_DATA

  return (
    <article className="payment-success">
      <div className="payment-success__main">
        <header className="payment-success__hero">
          <div className="payment-success__success-icon-wrap" aria-hidden>
            <span className="payment-success__success-icon-shadow" />
            <span className="payment-success__success-icon-inner">
              <CheckMarkIcon />
            </span>
          </div>
          <h1 className="payment-success__title">{page.title}</h1>
          <p className="payment-success__subtitle">{page.subtitle}</p>
        </header>

        <section className="payment-success__card" aria-labelledby="payment-success-booking-heading">
          <div className="payment-success__booking-head">
            <p id="payment-success-booking-heading" className="payment-success__eyebrow">
              {booking.referenceLabel}
            </p>
            <p className="payment-success__reference">{booking.referenceCode}</p>
          </div>

          <div className="payment-success__booking-meta">
            <div className="payment-success__meta-block">
              <p className="payment-success__meta-label">{booking.travelDateLabel}</p>
              <p className="payment-success__meta-value">{booking.travelDate}</p>
            </div>
            <div className="payment-success__meta-block">
              <p className="payment-success__meta-label">{booking.passengersLabel}</p>
              <p className="payment-success__meta-value payment-success__meta-value--row">
                <span className="payment-success__passengers-icon" aria-hidden>
                  <RouteArrowIcon />
                </span>
                <span>{booking.passengersCount}</span>
              </p>
            </div>
          </div>

          <div className="payment-success__total-box">
            <p className="payment-success__meta-label">{booking.totalLabel}</p>
            <p className="payment-success__total-line">
              <span className="payment-success__total-amount">{booking.totalAmount}</span>
              <span className="payment-success__total-currency">{booking.totalCurrency}</span>
            </p>
          </div>
        </section>

        <section className="payment-success__card payment-success__card--trip" aria-labelledby="payment-success-trip-heading">
          <div className="payment-success__trip-head">
            <div className="payment-success__trip-title-row">
              <span className="payment-success__trip-pin" aria-hidden>
                <PinMarkerIcon />
              </span>
              <h2 id="payment-success-trip-heading" className="payment-success__trip-title">
                {trip.sectionTitle}
              </h2>
            </div>
            <span className="payment-success__status-pill">{trip.statusPill}</span>
          </div>

          <div className="payment-success__timeline">
            <span className="payment-success__timeline-rail" aria-hidden />

            <ol className="payment-success__stops">
              {trip.stops.map((stop) => (
                <li key={stop.city} className="payment-success__stop">
                  <span
                    className={`payment-success__stop-dot payment-success__stop-dot--${stop.kind}`}
                    aria-hidden
                  />
                  <div className="payment-success__stop-body">
                    <div className="payment-success__stop-meta">
                      <span className="payment-success__stop-kind">
                        {stop.kind === 'depart' ? 'Depart' : 'Arrive'}
                      </span>
                    </div>
                    <p className="payment-success__stop-city">{stop.city}</p>
                    <p className="payment-success__stop-station">{stop.station}</p>
                    <p className="payment-success__stop-when">{stop.when}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="payment-success__trip-footer">
            <div className="payment-success__footer-block">
              <p className="payment-success__meta-label">{trip.seatsLabel}</p>
              <p className="payment-success__seat-pills">
                {trip.seats.map((seat) => (
                  <span key={seat} className="payment-success__seat-pill">
                    {seat}
                  </span>
                ))}
              </p>
            </div>
            <div className="payment-success__footer-block">
              <p className="payment-success__meta-label">{trip.passengerLabel}</p>
              <p className="payment-success__meta-value">{trip.passengerName}</p>
            </div>
          </div>
        </section>

        <div className="payment-success__actions">
          <a href={actions.downloadReceiptHref} className="payment-success__btn-secondary">
            <span className="payment-success__btn-secondary-icon" aria-hidden>
              <LinkArrowIcon />
            </span>
            <span>{actions.downloadReceiptLabel}</span>
          </a>
        </div>

        <p className="payment-success__footnote">{footnote}</p>
      </div>
    </article>
  )
}
