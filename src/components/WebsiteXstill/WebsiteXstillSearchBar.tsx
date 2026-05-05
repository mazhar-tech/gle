import { useState } from 'react'
import {
  SwapHorizontalIcon,
  WebsiteXstillDateIcon,
  WebsiteXstillFromIcon,
  WebsiteXstillPassengersIcon,
  WebsiteXstillToIcon,
} from '../../assets/icons'
import { SelectField, type SelectFieldOption } from '../SelectField/SelectField'

export function WebsiteXstillSearchBar() {
  const fromOptions: SelectFieldOption[] = [
    { value: 'Lagos', label: 'Lagos' },
    { value: 'Abuja', label: 'Abuja' },
    { value: 'Nairobi', label: 'Nairobi' },
  ]
  const toOptions: SelectFieldOption[] = [
    { value: 'Accra', label: 'Accra' },
    { value: 'Kumasi', label: 'Kumasi' },
    { value: 'Mombasa', label: 'Mombasa' },
  ]
  const passengerOptions: SelectFieldOption[] = [
    { value: '2 Pass.', label: '2 Pass.' },
    { value: '1 Pass.', label: '1 Pass.' },
    { value: '3 Pass.', label: '3 Pass.' },
    { value: '4+ Pass.', label: '4+ Pass.' },
  ]

  const [from, setFrom] = useState(fromOptions[0]?.value ?? '')
  const [to, setTo] = useState(toOptions[0]?.value ?? '')
  const [passengers, setPassengers] = useState(passengerOptions[0]?.value ?? '')
  const [travelDate, setTravelDate] = useState('')

  const today = new Date()
  const minDate = today.toISOString().slice(0, 10)
  const maxDateObj = new Date(today)
  maxDateObj.setFullYear(maxDateObj.getFullYear() + 2)
  const maxDate = maxDateObj.toISOString().slice(0, 10)

  function swapLocations() {
    setFrom(to)
    setTo(from)
  }

  return (
    <section className="website-xstill-search" aria-label="Search buses">
      <form className="website-xstill-search__card" onSubmit={(event) => event.preventDefault()}>
        <header className="website-xstill-search__head">
          <span className="website-xstill-search__dot" aria-hidden />
          <p>Search Buses · Live availability</p>
        </header>

        <div className="website-xstill-search__row">
          <label className="website-xstill-search__field website-xstill-search__field--from" htmlFor="xstill-from">
            <span className="website-xstill-search__label">From</span>
            <SelectField
              id="xstill-from"
              label="From"
              name="xstillFrom"
              value={from}
              onChange={setFrom}
              options={fromOptions}
              leading={<WebsiteXstillFromIcon />}
              hideLabel
              ui="home"
            />
          </label>

          <button
            type="button"
            className="website-xstill-search__swap"
            aria-label="Swap origin and destination"
            onClick={swapLocations}
          >
            <SwapHorizontalIcon />
          </button>

          <label className="website-xstill-search__field website-xstill-search__field--to" htmlFor="xstill-to">
            <span className="website-xstill-search__label">To</span>
            <SelectField
              id="xstill-to"
              label="To"
              name="xstillTo"
              value={to}
              onChange={setTo}
              options={toOptions}
              leading={<WebsiteXstillToIcon />}
              hideLabel
              ui="home"
            />
          </label>

          <label className="website-xstill-search__field website-xstill-search__field--date" htmlFor="xstill-date">
            <span className="website-xstill-search__label">Date</span>
            <SelectField
              variant="date"
              id="xstill-date"
              label="Date"
              name="xstillDate"
              value={travelDate}
              onChange={setTravelDate}
              datePlaceholder="Dec 24"
              minDate={minDate}
              maxDate={maxDate}
              leading={<WebsiteXstillDateIcon />}
              hideLabel
              ui="home"
            />
          </label>

          <label
            className="website-xstill-search__field website-xstill-search__field--passengers"
            htmlFor="xstill-passengers"
          >
            <span className="website-xstill-search__label">Passengers</span>
            <SelectField
              id="xstill-passengers"
              label="Passengers"
              name="xstillPassengers"
              value={passengers}
              onChange={setPassengers}
              options={passengerOptions}
              leading={<WebsiteXstillPassengersIcon />}
              hideLabel
              ui="home"
            />
          </label>

          <button type="submit" className="website-xstill-search__cta">
            Search
          </button>
        </div>
      </form>
    </section>
  )
}
