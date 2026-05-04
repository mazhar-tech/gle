import { InfoCircleIcon } from '../../assets/icons'
import type {
  TicketsBookingData,
  TicketsNoticeData,
  TicketsSummaryData,
} from '../../pages/Tickets/Tickets.constants'

export function TicketsSummary({
  summary,
  booking,
  notice,
}: {
  summary: TicketsSummaryData
  booking: TicketsBookingData
  notice: TicketsNoticeData
}) {
  return (
    <section className="tickets__summary" aria-labelledby="tickets-summary-heading">
      <h2 id="tickets-summary-heading" className="tickets__sr-only">
        Trip summary
      </h2>
      <div className="tickets__summary-inner">
        <div className="tickets__route">
          <div className="tickets__route-head">
            <span className="tickets__operator-badge" aria-hidden>
              {summary.operatorCode}
            </span>
            <div className="tickets__route-titles">
              <p className="tickets__route-label">{summary.routeLabel}</p>
              <p className="tickets__route-name">{summary.routeName}</p>
            </div>
          </div>

          <div className="tickets__timeline">
            <div className="tickets__stop">
              <span className="tickets__stop-dot tickets__stop-dot--depart" aria-hidden />
              <p className="tickets__stop-kind">{summary.departure.label}</p>
              <p className="tickets__stop-city">{summary.departure.city}</p>
              <p className="tickets__stop-time">{summary.departure.time}</p>
            </div>
            <div className="tickets__stop">
              <span className="tickets__stop-dot tickets__stop-dot--arrive" aria-hidden />
              <p className="tickets__stop-kind">{summary.arrival.label}</p>
              <p className="tickets__stop-city">{summary.arrival.city}</p>
              <p className="tickets__stop-time">{summary.arrival.time}</p>
            </div>
          </div>
        </div>

        <div className="tickets__booking-stack">
          <div className="tickets__booking-card">
            <div className="tickets__booking-top">
              <div>
                <p className="tickets__booking-ref-label">{booking.referenceLabel}</p>
                <p className="tickets__booking-ref-code">{booking.referenceCode}</p>
              </div>
              <span className="tickets__status-pill">{booking.statusPill}</span>
            </div>

            <div className="tickets__booking-meta">
              <div>
                <p className="tickets__booking-meta-label">{booking.createdLabel}</p>
                <p className="tickets__booking-meta-value">{booking.createdDate}</p>
              </div>
              <div className="tickets__booking-meta--end">
                <p className="tickets__booking-meta-label">{booking.durationLabel}</p>
                <p className="tickets__booking-meta-value tickets__booking-meta-value--lg">
                  {booking.durationValue}
                </p>
              </div>
            </div>
          </div>

          <div className="tickets__notice">
            <span className="tickets__notice-icon" aria-hidden>
              <InfoCircleIcon />
            </span>
            <p className="tickets__notice-text">{notice.text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
