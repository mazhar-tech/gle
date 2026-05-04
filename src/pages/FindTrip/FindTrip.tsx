import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowRightIcon,
  CalendarOutlineIcon,
  LinkArrowIcon,
  PinIcon,
  TargetIcon,
} from '../../assets/icons'
import { Button } from '../../components/Button/Button'
import { SelectField } from '../../components/SelectField/SelectField'
import { FIND_TRIP_DUMMY_DATA } from './FindTrip.constants'
import './FindTrip.css'

export function FindTrip() {
  const navigate = useNavigate()
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [travelDate, setTravelDate] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    navigate(FIND_TRIP_DUMMY_DATA.navigation.selectTripPath)
  }
  const {
    page,
    form,
    spotlight,
    originOptions,
    destinationOptions,
  } = FIND_TRIP_DUMMY_DATA

  return (
    <article className="find-trip">
      <div className="find-trip__inner">
        <header className="find-trip__header">
          <h1 className="find-trip__title">{page.title}</h1>
          <p className="find-trip__subtitle">{page.subtitle}</p>
        </header>

        <section className="find-trip__card">
          <form
            className="find-trip__form"
            aria-label={form.ariaLabel}
            onSubmit={handleSubmit}
          >
            <SelectField
              id={form.origin.id}
              label={form.origin.label}
              name={form.origin.name}
              value={origin}
              onChange={setOrigin}
              leading={<TargetIcon />}
              options={[...originOptions]}
            />
            <SelectField
              id={form.destination.id}
              label={form.destination.label}
              name={form.destination.name}
              value={destination}
              onChange={setDestination}
              leading={<PinIcon />}
              options={[...destinationOptions]}
            />
            <SelectField
              variant="date"
              id={form.travelDate.id}
              label={form.travelDate.label}
              name={form.travelDate.name}
              value={travelDate}
              onChange={setTravelDate}
              leading={<CalendarOutlineIcon />}
              datePlaceholder={form.travelDate.datePlaceholder}
              minDate={form.travelDate.minDate}
              maxDate={form.travelDate.maxDate}
            />
            <div className="find-trip__submit">
              <Button type="submit" fullWidth iconEnd={<ArrowRightIcon />}>
                {form.submitButtonText}
              </Button>
            </div>
          </form>
        </section>

        <section
          className="find-trip__spotlight"
          aria-labelledby={spotlight.headingId}
        >
          <img
            className="find-trip__spotlight-media"
            src={spotlight.imageSrc}
            alt={spotlight.imageAlt}
            loading="lazy"
            decoding="async"
          />
          <div className="find-trip__spotlight-body">
            <p className="find-trip__spotlight-eyebrow">{spotlight.eyebrow}</p>
            <h2 id={spotlight.headingId} className="find-trip__spotlight-title">
              {spotlight.title}
            </h2>
            <p className="find-trip__spotlight-copy">{spotlight.copy}</p>
            <a className="find-trip__spotlight-link" href={spotlight.linkHref}>
              <span>{spotlight.linkText}</span>
              <span className="find-trip__spotlight-link-icon" aria-hidden>
                <LinkArrowIcon />
              </span>
            </a>
          </div>
        </section>
      </div>
    </article>
  )
}
