import { FanIcon } from '../../assets/icons'
import type { SeatDef, SeatRowDef } from '../../pages/ChooseSeats/ChooseSeats.constants'

type LegendItem = {
  key: string
  label: string
  swatch: 'available' | 'selected' | 'unavailable'
}

type BusFoot = {
  restroomLabel: string
  assistTitle: string
  assistNote: string
}

function seatVisualKind(seat: SeatDef, selected: Set<string>): 'selected' | SeatDef['kind'] {
  if (seat.kind === 'available' && selected.has(seat.id)) {
    return 'selected'
  }
  return seat.kind
}

function SeatButton({
  seat,
  visual,
  onToggle,
}: {
  seat: SeatDef
  visual: ReturnType<typeof seatVisualKind>
  onToggle: (seat: SeatDef) => void
}) {
  const isInteractive = seat.kind === 'available'

  return (
    <button
      type="button"
      className={`choose-seats__seat choose-seats__seat--${visual}`}
      disabled={!isInteractive}
      aria-pressed={visual === 'selected'}
      aria-label={seat.id}
      onClick={() => onToggle(seat)}
    >
      {seat.id}
    </button>
  )
}

function SeatGridRow({
  row,
  selected,
  onToggle,
}: {
  row: SeatRowDef
  selected: Set<string>
  onToggle: (seat: SeatDef) => void
}) {
  const [a, b, c, d] = row.seats
  return (
    <div className="choose-seats__grid-row">
      <SeatButton seat={a} visual={seatVisualKind(a, selected)} onToggle={onToggle} />
      <SeatButton seat={b} visual={seatVisualKind(b, selected)} onToggle={onToggle} />
      <div className="choose-seats__row-aisle" aria-hidden>
        Row {row.row}
      </div>
      <SeatButton seat={c} visual={seatVisualKind(c, selected)} onToggle={onToggle} />
      <SeatButton seat={d} visual={seatVisualKind(d, selected)} onToggle={onToggle} />
    </div>
  )
}

export function ChooseSeatsSeatMap({
  legend,
  seatRows,
  busFoot,
  selected,
  onToggleSeat,
}: {
  legend: LegendItem[]
  seatRows: SeatRowDef[]
  busFoot: BusFoot
  selected: Set<string>
  onToggleSeat: (seat: SeatDef) => void
}) {
  return (
    <section className="choose-seats__seat-panel" aria-label="Seat map">
      <div className="choose-seats__legend">
        {legend.map((item) => (
          <div key={item.key} className="choose-seats__legend-item">
            <span
              className={`choose-seats__legend-swatch choose-seats__legend-swatch--${item.swatch}`}
              aria-hidden
            />
            <span className="choose-seats__legend-label">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="choose-seats__bus-shell">
        <div className="choose-seats__bus-grid-wrap">
        <FanIcon />
          <div className="choose-seats__col-labels" aria-hidden>
            <span>A</span>
            <span>B</span>
            <span className="choose-seats__col-labels-aisle"> </span>
            <span>C</span>
            <span>D</span>
          </div>
          {seatRows.map((row) => (
            <SeatGridRow key={row.row} row={row} selected={selected} onToggle={onToggleSeat} />
          ))}
        </div>

        <div className="choose-seats__bus-foot">
          <p className="choose-seats__restroom-pill">{busFoot.restroomLabel}</p>
          <div className="choose-seats__assist">
            <span className="choose-seats__assist-dot" aria-hidden />
            <div>
              <p className="choose-seats__assist-title">{busFoot.assistTitle}</p>
              <p className="choose-seats__assist-note">{busFoot.assistNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
