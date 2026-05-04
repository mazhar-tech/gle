import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SwapHorizontalIcon } from '../../assets/icons'
import { SelectField, type SelectFieldOption } from '../SelectField/SelectField'
import type { HomeDummyData } from '../../pages/Home/Home.constants'

type Search = HomeDummyData['search']

export function HomeSearchCard({ search }: { search: Search }) {
  const originOptions: SelectFieldOption[] = [
    { value: search.originValue, label: search.originValue },
    { value: 'Alaska', label: 'Alaska' },
    { value: 'Los Angeles', label: 'Los Angeles' },
    { value: 'Seattle', label: 'Seattle' },
  ]
  const destinationOptions: SelectFieldOption[] = [
    { value: search.destinationValue, label: search.destinationValue },
    { value: 'Miami', label: 'Miami' },
    { value: 'Orlando', label: 'Orlando' },
    { value: 'San Diego', label: 'San Diego' },
  ]
  const [origin, setOrigin] = useState(originOptions[0]?.value ?? '')
  const [destination, setDestination] = useState(destinationOptions[0]?.value ?? '')
  const [travelDate, setTravelDate] = useState('')

  const today = new Date()
  const minDate = today.toISOString().slice(0, 10)
  const maxDateObj = new Date(today)
  maxDateObj.setFullYear(maxDateObj.getFullYear() + 2)
  const maxDate = maxDateObj.toISOString().slice(0, 10)

  function swapLocations() {
    setOrigin(destination)
    setDestination(origin)
  }

  return (
    <div className="home__search-wrap">
      <section className="home__search-card" aria-label="Search destinations">
        <header className="home__search-head">
          <h2 className="home__search-title">
            <span>{search.titleLeading}</span>{' '}
            <span className="home__search-title-accent">{search.titleAccent}</span>
          </h2>
          <p className="home__search-sub">{search.subtitle}</p>
        </header>
        <div className="home__search-row">
          <div className="home__search-control">
            <SelectField
              id="home-origin"
              label={search.originLabel}
              name="homeOrigin"
              value={origin}
              onChange={setOrigin}
              options={originOptions}
              hideLabel
              ui="home"
            />
          </div>
          <button
            type="button"
            className=""
            aria-label="Swap origin and destination"
            onClick={swapLocations}
          >
            <SwapHorizontalIcon />
          </button>
          <div className="home__search-control">
            <SelectField
              id="home-destination"
              label={search.destinationLabel}
              name="homeDestination"
              value={destination}
              onChange={setDestination}
              options={destinationOptions}
              hideLabel
              ui="home"
            />
          </div>
          <div className="home__search-control">
            <SelectField
              variant="date"
              id="home-date"
              label={search.dateLabel}
              name="homeDate"
              value={travelDate}
              onChange={setTravelDate}
              datePlaceholder={search.dateValue}
              minDate={minDate}
              maxDate={maxDate}
              hideLabel
              ui="home"
            />
          </div>
          <Link to={search.submitTo} className="home__search-submit">
            {search.submitLabel}
          </Link>
        </div>
      </section>
    </div>
  )
}
