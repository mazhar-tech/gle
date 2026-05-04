import { ClockIcon, HeartIcon } from '../../assets/icons'

type TripSummaryData = {
  tripIdLabel: string
  dotLabel: string
  routeTitle: string
  dateLabel: string
  departTime: string
}

export function ChooseSeatsTripSummary({ tripSummary }: { tripSummary: TripSummaryData }) {
  return (
    <section className="choose-seats__trip-card" aria-label="Trip summary">
      <div className="choose-seats__trip-inner">
        <div className="choose-seats__trip-primary">
          <div className="choose-seats__trip-icon-wrap" aria-hidden>
            <HeartIcon />
          </div>
          <div className="choose-seats__trip-copy">
            <div className="choose-seats__trip-meta">
              <span className="choose-seats__trip-id-label">{tripSummary.tripIdLabel}</span>
              <span className="choose-seats__trip-dot" aria-hidden />
              <span className="choose-seats__trip-dot-label">{tripSummary.dotLabel}</span>
            </div>
            <h2 className="choose-seats__trip-route">{tripSummary.routeTitle}</h2>
          </div>
        </div>
        <div className="choose-seats__trip-departure">
          <span className="choose-seats__trip-clock" aria-hidden>
            <ClockIcon />
          </span>
          <div className="choose-seats__trip-time-block">
            <span className="choose-seats__trip-date-label">{tripSummary.dateLabel}</span>
            <span className="choose-seats__trip-time">{tripSummary.departTime}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
