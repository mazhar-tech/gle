import { QRCodeSVG } from 'qrcode.react'
import { BoardPassIcon } from '../../assets/icons'
import type { TicketsCardData } from '../../pages/Tickets/Tickets.constants'

export function TicketCard({ ticket }: { ticket: TicketsCardData }) {
  return (
    <li className="tickets__ticket">
      <div className="tickets__ticket-head">
        <div className="tickets__ticket-head-row">
          <span className="tickets__seat">{ticket.seatLabel}</span>
          <span className="tickets__class-pill">{ticket.classPill}</span>
        </div>
        <div className="tickets__ticket-passenger-row">
          <div className="tickets__ticket-passenger">
            <p className="tickets__ticket-passenger-label">{ticket.passengerLabel}</p>
            <p className="tickets__ticket-date">{ticket.travelDate}</p>
            <p className="tickets__ticket-name">{ticket.passengerName}</p>
          </div>
          <button type="button" className="tickets__board-btn">
            <span className="tickets__board-btn-shade" aria-hidden />
            <span className="tickets__board-btn-icon" aria-hidden>
              <BoardPassIcon />
            </span>
            <span className="tickets__board-btn-label">{ticket.boardLabel}</span>
          </button>
        </div>
      </div>

      <div className="tickets__ticket-perf">
        <span className="tickets__perf-notch tickets__perf-notch--left" aria-hidden />
        <span className="tickets__perf-notch tickets__perf-notch--right" aria-hidden />
        <div className="tickets__perf-line" />
      </div>

      <div className="tickets__ticket-qr">
        <div className="tickets__qr-stack">
          <div className="tickets__qr-surface">
            <div className="tickets__qr-inner">
              <QRCodeSVG
                className="tickets__qr-svg"
                value={ticket.qrValue}
                size={116}
                bgColor="#ffffff"
                fgColor="#0f172a"
                level="M"
                includeMargin={false}
              />
            </div>
          </div>
          <p className="tickets__qr-caption">{ticket.qrCaption}</p>
        </div>
      </div>
    </li>
  )
}
