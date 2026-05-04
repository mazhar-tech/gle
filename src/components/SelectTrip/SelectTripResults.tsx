import type { SelectTripResultsData, TripCardData } from '../../pages/SelectTrip/SelectTrip.constants'
import { TripCard } from './TripCard'

export interface SelectTripResultsProps {
  results: SelectTripResultsData
  trips: TripCardData[]
}

export function SelectTripResults({ results, trips }: SelectTripResultsProps) {
  return (
    <section className="select-trip__results" aria-labelledby={results.sectionHeadingId}>
      <div className="select-trip__results-toolbar">
        <h2 id={results.sectionHeadingId} className="select-trip__results-title">
          {results.title}
        </h2>
        <div className="select-trip__filters">
          {results.filterLabels.map((label) => (
            <button key={label} type="button" className="select-trip__filter-btn">
              {label}
            </button>
          ))}
        </div>
      </div>

      {trips.map(({ id, ...trip }) => (
        <TripCard key={id} {...trip} />
      ))}
    </section>
  )
}
