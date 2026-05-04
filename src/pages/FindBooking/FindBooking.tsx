import { type ChangeEvent, type FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRightIcon, Ticket, UserPersonIcon } from '../../assets/icons'
import { FIND_BOOKING_DUMMY_DATA } from './FindBooking.constants'
import './FindBooking.css'

export function FindBooking() {
  const navigate = useNavigate()
  const { page, form, spotlight, navigation } = FIND_BOOKING_DUMMY_DATA

  const [bookingCode, setBookingCode] = useState('')
  const [lastName, setLastName] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    navigate(navigation.afterSubmitPath)
  }

  return (
    <article className="find-booking">
      <div className="find-booking__main">
        <header className="find-booking__header">
          <h1 className="find-booking__title">{page.title}</h1>
          <p className="find-booking__subtitle">{page.subtitle}</p>
        </header>

        <section className="find-booking__card">
          <form className="find-booking__form" aria-label={form.ariaLabel} onSubmit={handleSubmit}>
            <div className="find-booking__field">
              <label className="find-booking__label" htmlFor={form.bookingCode.id}>
                {form.bookingCode.label}
              </label>
              <div className="find-booking__input-shell">
                <span className="find-booking__input-icon find-booking__input-icon--ticket" aria-hidden>
                  <Ticket />
                </span>
                <input
                  id={form.bookingCode.id}
                  name={form.bookingCode.name}
                  className="find-booking__input"
                  type="text"
                  autoComplete="off"
                  placeholder={form.bookingCode.placeholder}
                  value={bookingCode}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setBookingCode(e.target.value)}
                />
              </div>
            </div>

            <div className="find-booking__field">
              <label className="find-booking__label" htmlFor={form.lastName.id}>
                {form.lastName.label}
              </label>
              <div className="find-booking__input-shell">
                <span className="find-booking__input-icon" aria-hidden>
                  <UserPersonIcon />
                </span>
                <input
                  id={form.lastName.id}
                  name={form.lastName.name}
                  className="find-booking__input"
                  type="text"
                  autoComplete="family-name"
                  placeholder={form.lastName.placeholder}
                  value={lastName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="find-booking__submit">
              <span>{form.submitLabel}</span>
              <span className="find-booking__submit-icon" aria-hidden>
                <ArrowRightIcon />
              </span>
            </button>
          </form>

          <div className="find-booking__spotlight">
            <img
              src={spotlight.imageSrc}
              alt={spotlight.imageAlt}
              className="find-booking__spotlight-img"
            />
            <div className="find-booking__spotlight-overlay" aria-hidden />
            <p className="find-booking__spotlight-caption">{spotlight.caption}</p>
          </div>
        </section>
      </div>
    </article>
  )
}
