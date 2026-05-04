import { TicketCard } from '../../components/Tickets/TicketCard'
import { TicketsHeader } from '../../components/Tickets/TicketsHeader'
import { TicketsPassHeading } from '../../components/Tickets/TicketsPassHeading'
import { TicketsSummary } from '../../components/Tickets/TicketsSummary'
import { TICKETS_DUMMY_DATA } from './Tickets.constants'
import './Tickets.css'

export function Tickets() {
  const { page, summary, booking, notice, boardingSection, tickets } = TICKETS_DUMMY_DATA

  return (
    <article className="tickets">
      <div className="tickets__main">
        <TicketsHeader page={page} />
        <TicketsSummary summary={summary} booking={booking} notice={notice} />
        <TicketsPassHeading boardingSection={boardingSection} />

        <ul className="tickets__grid">
          {tickets.map((t) => (
            <TicketCard key={t.id} ticket={t} />
          ))}
        </ul>
      </div>
    </article>
  )
}
