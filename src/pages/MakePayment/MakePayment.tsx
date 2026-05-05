import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../components/Button/Button.css'
import {
  ArrowRightIcon,
  CalendarOutlineIcon,
  ChevronLeftIcon,
  ClockIcon,
  CreditCardIcon,
  LockSmallIcon,
  PassengerChipIcon,
  PaypalMarkIcon,
  RouteDividerBusIcon,
  SeatChipIcon,
  ShieldCheckIcon,
} from '../../assets/icons'
import {
  MAKE_PAYMENT_DUMMY_DATA,
  type PaymentMethodId,
} from './MakePayment.constants'
import './MakePayment.css'

function formatCountdown(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

function ChipIcon({
  kind,
}: {
  kind: 'calendar' | 'clock' | 'seat' | 'user-person'
}) {
  if (kind === 'calendar') {
    return (
      <span className="make-payment__chip-icon" aria-hidden>
        <CalendarOutlineIcon />
      </span>
    )
  }
  if (kind === 'user-person') {
    return (
      <span className="make-payment__chip-icon" aria-hidden>
        <PassengerChipIcon />
      </span>
    )
  }
  if (kind === 'seat') {
    return (
      <span className="make-payment__chip-icon" aria-hidden>
        <SeatChipIcon />
      </span>
    )
  }
  return (
    <span className="make-payment__chip-icon" aria-hidden>
      <ClockIcon />
    </span>
  )
}

export function MakePayment() {
  const {
    navigation,
    page,
    holdBanner,
    countdownStartSeconds,
    payment,
    trust,
    primaryCta,
    legal,
    summary,
  } = MAKE_PAYMENT_DUMMY_DATA

  const [secondsLeft, setSecondsLeft] = useState(countdownStartSeconds)
  const [method, setMethod] = useState<PaymentMethodId>('card')

  useEffect(() => {
    const id = window.setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <article className="make-payment">
      <div className="make-payment__main">
        <Link to={navigation.backTo} className="make-payment__back">
          <span className="make-payment__back-icon" aria-hidden>
            <ChevronLeftIcon />
          </span>
          {navigation.backLabel}
        </Link>

        <header className="make-payment__header">
          <h1 className="make-payment__title">{page.title}</h1>
          <p className="make-payment__subtitle">{page.subtitle}</p>
        </header>

        <div className="make-payment__columns">
          <aside className="make-payment__col make-payment__col--summary">
            <div className="make-payment__summary-card">
              <div className="make-payment__summary-hero">
                <img
                  src={summary.headerImageSrc}
                  alt=""
                  className="make-payment__summary-hero-img"
                />
                <span className="make-payment__summary-pill">{summary.tripTypePill}</span>
              </div>
              <div className="make-payment__summary-body">
                <div className="make-payment__summary-route">
                  <div className="make-payment__summary-endpoint">
                    <span className="make-payment__summary-endpoint-label">{summary.from.label}</span>
                    <span className="make-payment__summary-endpoint-city">{summary.from.city}</span>
                  </div>
                  <div className="make-payment__summary-divider" aria-hidden>
                    <span className="make-payment__summary-divider-line" />
                    <span className="make-payment__summary-divider-icon">
                      <RouteDividerBusIcon />
                    </span>
                    <span className="make-payment__summary-divider-line" />
                  </div>
                  <div className="make-payment__summary-endpoint make-payment__summary-endpoint--end">
                    <span className="make-payment__summary-endpoint-label">{summary.to.label}</span>
                    <span className="make-payment__summary-endpoint-city">{summary.to.city}</span>
                  </div>
                </div>

                <ul className="make-payment__chips">
                  {summary.chips.map((chip) => (
                    <li key={chip.text} className="make-payment__chip">
                      <ChipIcon kind={chip.icon} />
                      <span>{chip.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="make-payment__fees">
                  {summary.fees.map((row) => (
                    <div key={row.label} className="make-payment__fee-row">
                      <span>{row.label}</span>
                      <span>{row.amount}</span>
                    </div>
                  ))}
                  <div className="make-payment__fee-row make-payment__fee-row--total">
                    <span>{summary.totalLabel}</span>
                    <span>{summary.totalAmount}</span>
                  </div>
                </div>

                <div className="make-payment__due">
                  <span className="make-payment__due-label">{summary.dueLabel}</span>
                  <span className="make-payment__due-amount">{summary.dueDisplay}</span>
                </div>
              </div>
            </div>
          </aside>

          <div className="make-payment__hold-banner" role="status" aria-live="polite">
            <div className="make-payment__hold-banner-icon-wrap" aria-hidden>
              <ClockIcon />
            </div>
            <div className="make-payment__hold-banner-copy">
              <p className="make-payment__hold-banner-title">{holdBanner.title}</p>
              <p className="make-payment__hold-banner-text">{holdBanner.subtitle}</p>
            </div>
            <div className="make-payment__hold-banner-timer" aria-label="Time remaining">
              {formatCountdown(secondsLeft)}
            </div>
          </div>

          <div className="make-payment__col make-payment__col--payment">
            <section
              className="make-payment__card make-payment__card--methods"
              aria-labelledby="make-payment-methods-heading"
            >
              <h2 id="make-payment-methods-heading" className="make-payment__card-title">
                {payment.sectionTitle}
              </h2>
              <div className="make-payment__method-list" role="radiogroup" aria-label={payment.sectionTitle}>
                {payment.methods.map((m) => {
                  const selected = method === m.id
                  return (
                    <label
                      key={m.id}
                      className={`make-payment__method${selected ? ' make-payment__method--selected' : ''}`}
                    >
                      <input
                        type="radio"
                        name="payment-method"
                        value={m.id}
                        checked={selected}
                        onChange={() => setMethod(m.id)}
                        className="make-payment__method-input"
                      />
                      <span className="make-payment__method-body">
                        <span className="" aria-hidden>
                          {m.icon === 'card' ? (
                            <CreditCardIcon />
                          ) : (
                            <PaypalMarkIcon />
                          )}
                        </span>
                        <span className="make-payment__method-text">
                          <span className="make-payment__method-title">{m.title}</span>
                          <span className="make-payment__method-sub">{m.subtitle}</span>
                        </span>
                      </span>
                      <span className="make-payment__method-radio" aria-hidden>
                        {selected ? <span className="make-payment__method-radio-dot" /> : null}
                      </span>
                    </label>
                  )
                })}
              </div>
            </section>

            <section className="make-payment__card make-payment__card--trust" aria-label="Security">
              <div className="make-payment__trust-row">
                <div className="make-payment__trust-main">
                  <span className="" aria-hidden>
                    <ShieldCheckIcon />
                  </span>
                  <div className="make-payment__trust-copy">
                    <p className="make-payment__trust-title">{trust.title}</p>
                    <p className="make-payment__trust-sub">{trust.subtitle}</p>
                  </div>
                </div>
                <div className="make-payment__trust-badges">
                  <span className="make-payment__trust-pill">{trust.badgeLabel}</span>
                  <div className="">
                    <LockSmallIcon />
                   
                  </div>
                </div>
              </div>
            </section>

            <div className="make-payment__cta-block">
              <Link
                to="/payment-success"
                className="button button--primary make-payment__pay-btn"
              >
                <span className="button__label">{primaryCta.label}</span>
                <span className="button__icon-end" aria-hidden>
                  <ArrowRightIcon />
                </span>
              </Link>
              <div className="make-payment__legal">
                <p className="make-payment__legal-line">{legal.line}</p>
                <div className="make-payment__legal-links">
                  {legal.links.map((item, i) => (
                    <span key={item.label} className="make-payment__legal-link-wrap">
                      {i > 0 ? (
                        <span className="make-payment__legal-sep" aria-hidden>
                          ·
                        </span>
                      ) : null}
                      <a href={item.href} className="make-payment__legal-link">
                        {item.label}
                      </a>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
