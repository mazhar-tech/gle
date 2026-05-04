import { SELECT_TRIP_DUMMY_DATA } from './SelectTrip.constants'
import { SelectTripBento } from '../../components/SelectTrip/SelectTripBento'
import { SelectTripHeader } from '../../components/SelectTrip/SelectTripHeader'
import { SelectTripResults } from '../../components/SelectTrip/SelectTripResults'
import { SelectTripSummary } from '../../components/SelectTrip/SelectTripSummary'
import './SelectTrip.css'

export function SelectTrip() {
  const { page, summary, results, trips, bento } = SELECT_TRIP_DUMMY_DATA

  return (
    <article className="select-trip">
      <div className="select-trip__main">
        <SelectTripHeader page={page} />
        <SelectTripSummary summary={summary} />
        <SelectTripResults results={results} trips={[...trips]} />
        <SelectTripBento bento={bento} />
      </div>
    </article>
  )
}
