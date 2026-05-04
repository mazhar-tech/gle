import { useState } from 'react'
import { Link } from 'react-router-dom'

import { ChevronLeftIcon } from '../../assets/icons'
import { ChooseSeatsActionBar } from '../../components/ChooseSeats/ChooseSeatsActionBar'
import { ChooseSeatsExperienceAside } from '../../components/ChooseSeats/ChooseSeatsExperienceAside'
import { ChooseSeatsSeatMap } from '../../components/ChooseSeats/ChooseSeatsSeatMap'
import { ChooseSeatsTripSummary } from '../../components/ChooseSeats/ChooseSeatsTripSummary'
import { CHOOSE_SEATS_DUMMY_DATA, type SeatDef } from './ChooseSeats.constants'
import './ChooseSeats.css'

export function ChooseSeats() {
  const { navigation, page, tripSummary, legend, seatRows, busFoot, experience, cabin, actionBar } =
    CHOOSE_SEATS_DUMMY_DATA

  const [selected, setSelected] = useState(() => new Set<string>(['12A', '12B']))

  function toggleSeat(seat: SeatDef) {
    if (seat.kind !== 'available') {
      return
    }
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(seat.id)) {
        next.delete(seat.id)
      } else {
        next.add(seat.id)
      }
      return next
    })
  }

  return (
    <article className="choose-seats">
      <div className="choose-seats__main">
        <Link to={navigation.backTo} className="choose-seats__back">
          <span className="choose-seats__back-icon" aria-hidden>
            <ChevronLeftIcon />
          </span>
          {navigation.backLabel}
        </Link>

        <header className="choose-seats__header">
          <h1 className="choose-seats__title">{page.title}</h1>
          <p className="choose-seats__subtitle">{page.subtitle}</p>
        </header>

        <ChooseSeatsTripSummary tripSummary={tripSummary} />

        <div className="choose-seats__layout">
          <ChooseSeatsSeatMap
            legend={legend}
            seatRows={seatRows}
            busFoot={busFoot}
            selected={selected}
            onToggleSeat={toggleSeat}
          />
          <ChooseSeatsExperienceAside experience={experience} cabin={cabin} />
        </div>
      </div>

      <ChooseSeatsActionBar actionBar={actionBar} />
    </article>
  )
}
