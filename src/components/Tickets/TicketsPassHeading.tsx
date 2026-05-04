import { TicketStubIcon } from '../../assets/icons'
import type { TicketsBoardingSectionData } from '../../pages/Tickets/Tickets.constants'

export function TicketsPassHeading({ boardingSection }: { boardingSection: TicketsBoardingSectionData }) {
  return (
    <div className="tickets__pass-heading">
      <span className="tickets__pass-heading-icon" aria-hidden>
        <TicketStubIcon />
      </span>
      <h2 className="tickets__pass-title">{boardingSection.title}</h2>
    </div>
  )
}
