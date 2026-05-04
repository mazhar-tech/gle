import { CalendarOutlineIcon } from '../../assets/icons'
import type { TicketsPageData } from '../../pages/Tickets/Tickets.constants'

export function TicketsHeader({ page }: { page: TicketsPageData }) {
  return (
    <div className="tickets__top">
      <header className="tickets__header">
        <h1 className="tickets__title">{page.title}</h1>
        <p className="tickets__subtitle">{page.subtitle}</p>
      </header>
      <button type="button" className="tickets__calendar-btn">
        <span className="tickets__calendar-btn-icon" aria-hidden>
          <CalendarOutlineIcon />
        </span>
        <span>{page.addToCalendarLabel}</span>
      </button>
    </div>
  )
}
