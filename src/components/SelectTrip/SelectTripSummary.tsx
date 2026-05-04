import { Link } from 'react-router-dom'
import { CalendarIcon, EditPencilIcon, MapPinIcon, RouteArrowIcon } from '../../assets/icons'
import type { SelectTripSummaryData } from '../../pages/SelectTrip/SelectTrip.constants'

export interface SelectTripSummaryProps {
  summary: SelectTripSummaryData
}

export function SelectTripSummary({ summary }: SelectTripSummaryProps) {
  return (
    <section className="select-trip__summary" aria-label={summary.ariaLabel}>
      <div className="select-trip__summary-row">
        <div className="select-trip__summary-group">
          <div className="select-trip__summary-block">
            <span className="select-trip__summary-icon" aria-hidden>
              <MapPinIcon />
            </span>
            <div className="select-trip__summary-copy">
              <span className="select-trip__summary-eyebrow">{summary.routeEyebrow}</span>
              <p className="select-trip__summary-route">
                <span>{summary.origin}</span>
                <span aria-hidden>
                  <RouteArrowIcon />
                </span>
                <span className="select-trip__summary-route-destination">{summary.destination}</span>
              </p>
            </div>
          </div>
          <span className="select-trip__summary-divider" aria-hidden />
          <div className="select-trip__summary-block">
            <span className="select-trip__summary-icon" aria-hidden>
              <CalendarIcon />
            </span>
            <div className="select-trip__summary-copy">
              <span className="select-trip__summary-eyebrow">{summary.travelDateEyebrow}</span>
              <p className="select-trip__summary-date">{summary.travelDate}</p>
            </div>
          </div>
        </div>
        <Link to={summary.editSearchPath} className="select-trip__edit-search">
          <EditPencilIcon />
          <span>{summary.editSearchLabel}</span>
        </Link>
      </div>
    </section>
  )
}
