import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from 'react'
import { CalendarOutlineIcon, ChevronDownIcon } from '../../assets/icons'
import './SelectField.css'

export interface SelectFieldOption {
  value: string
  label: string
}

export interface SelectFieldCommonProps {
  id: string
  label: string
  name: string
  value: string
  onChange: (value: string) => void
  leading?: ReactNode
  hideLabel?: boolean
  ui?: 'default' | 'home'
}

export type SelectFieldSelectProps = SelectFieldCommonProps & {
  variant?: 'select'
  options: SelectFieldOption[]
}

export type SelectFieldDateProps = SelectFieldCommonProps & {
  variant: 'date'
  /** Shown when no date is chosen (e.g. "Select travel date") */
  datePlaceholder: string
  /** Inclusive minimum `YYYY-MM-DD` */
  minDate?: string
  /** Inclusive maximum `YYYY-MM-DD` */
  maxDate?: string
}

export type SelectFieldProps = SelectFieldSelectProps | SelectFieldDateProps

function parseISODateLocal(iso: string): Date | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso)
  if (!match) return null
  const y = Number(match[1])
  const mo = Number(match[2]) - 1
  const d = Number(match[3])
  const dt = new Date(y, mo, d)
  if (
    dt.getFullYear() !== y ||
    dt.getMonth() !== mo ||
    dt.getDate() !== d
  ) {
    return null
  }
  return dt
}

function toISODateLocal(d: Date): string {
  const y = d.getFullYear()
  const mo = d.getMonth() + 1
  const day = d.getDate()
  return `${y}-${String(mo).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

function monthStart(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), 1)
}

function formatDateDisplay(iso: string): string {
  const dt = parseISODateLocal(iso)
  if (!dt) return ''
  return dt.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function buildCalendarCells(viewMonth: Date): { iso: string; inMonth: boolean; date: Date }[] {
  const y = viewMonth.getFullYear()
  const m = viewMonth.getMonth()
  const first = new Date(y, m, 1)
  const start = new Date(first)
  start.setDate(1 - first.getDay())
  const cells: { iso: string; inMonth: boolean; date: Date }[] = []
  for (let i = 0; i < 42; i += 1) {
    const d = new Date(start)
    d.setDate(start.getDate() + i)
    cells.push({
      date: d,
      inMonth: d.getMonth() === m,
      iso: toISODateLocal(d),
    })
  }
  return cells
}

function canGoPrevMonth(viewMonth: Date, minDate?: string): boolean {
  if (!minDate) return true
  const min = parseISODateLocal(minDate)
  if (!min) return true
  return monthStart(viewMonth) > monthStart(min)
}

function canGoNextMonth(viewMonth: Date, maxDate?: string): boolean {
  if (!maxDate) return true
  const max = parseISODateLocal(maxDate)
  if (!max) return true
  return monthStart(viewMonth) < monthStart(max)
}

function isDayDisabled(iso: string, minDate?: string, maxDate?: string): boolean {
  if (minDate && iso < minDate) return true
  if (maxDate && iso > maxDate) return true
  return false
}

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const

function SelectFieldDatePicker({
  id,
  label,
  name,
  value,
  onChange,
  leading,
  hideLabel = false,
  ui = 'default',
  datePlaceholder,
  minDate,
  maxDate,
}: SelectFieldDateProps) {
  const panelId = useId()
  const shellRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)
  const [viewMonth, setViewMonth] = useState(() => {
    const fromValue = value ? parseISODateLocal(value) : null
    return monthStart(fromValue ?? new Date())
  })

  useEffect(() => {
    if (!open) return
    const fromValue = value ? parseISODateLocal(value) : null
    if (fromValue) setViewMonth(monthStart(fromValue))
  }, [open, value])

  useEffect(() => {
    if (!open) return
    function onPointerDown(event: Event) {
      if (!shellRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
    }
  }, [open])

  function choose(iso: string) {
    onChange(iso)
    setOpen(false)
    triggerRef.current?.focus()
  }

  function onTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === 'Escape' && open) {
      event.preventDefault()
      setOpen(false)
      return
    }
    if (event.key === 'Tab' && open) {
      setOpen(false)
    }
  }

  const displayValue = value ? formatDateDisplay(value) : datePlaceholder
  const cells = buildCalendarCells(viewMonth)
  const todayIso = toISODateLocal(new Date())
  const title = viewMonth.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className={`select-field text-field${ui === 'home' ? ' select-field--home' : ''}`}>
      {hideLabel ? null : (
        <label className="text-field__label" htmlFor={id}>
          {label}
        </label>
      )}
      <input type="hidden" name={name} value={value} />
      <div className={`select-field__shell${open ? ' select-field__shell--open' : ''}`} ref={shellRef}>
        <button
          ref={triggerRef}
          id={id}
          type="button"
          className={`text-field__control select-field__trigger${open ? ' select-field__trigger--open' : ''}`}
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
          onKeyDown={onTriggerKeyDown}
        >
          {leading ? <span className="text-field__leading">{leading}</span> : null}
          {leading ? <span className="text-field__divider" aria-hidden="true" /> : null}
          <span
            className={`select-field__value${value === '' ? ' select-field__value--placeholder' : ''}`}
          >
            {displayValue}
          </span>
          <span className="text-field__trailing" aria-hidden="true">
            {ui === 'home' ? <CalendarOutlineIcon /> : <ChevronDownIcon />}
          </span>
        </button>
        {open ? (
          <div
            id={panelId}
            className="select-field__calendar-panel"
            role="dialog"
            aria-label={label}
          >
            <div className="select-field__calendar-nav">
              <button
                type="button"
                className="select-field__calendar-nav-btn"
                aria-label="Previous month"
                disabled={!canGoPrevMonth(viewMonth, minDate)}
                onClick={() =>
                  setViewMonth(
                    (vm) => new Date(vm.getFullYear(), vm.getMonth() - 1, 1),
                  )
                }
              >
                ‹
              </button>
              <span className="select-field__calendar-title">{title}</span>
              <button
                type="button"
                className="select-field__calendar-nav-btn"
                aria-label="Next month"
                disabled={!canGoNextMonth(viewMonth, maxDate)}
                onClick={() =>
                  setViewMonth(
                    (vm) => new Date(vm.getFullYear(), vm.getMonth() + 1, 1),
                  )
                }
              >
                ›
              </button>
            </div>
            <div className="select-field__calendar-weekdays" aria-hidden="true">
              {WEEKDAYS.map((wd) => (
                <span key={wd} className="select-field__calendar-weekday">
                  {wd}
                </span>
              ))}
            </div>
            <div className="select-field__calendar-grid">
              {cells.map((cell) => {
                const disabled = isDayDisabled(cell.iso, minDate, maxDate)
                const selected = value === cell.iso
                const isToday = cell.iso === todayIso
                return (
                  <button
                    key={cell.iso}
                    type="button"
                    disabled={disabled}
                    className={`select-field__calendar-day${cell.inMonth ? '' : ' select-field__calendar-day--outside'}${selected ? ' select-field__calendar-day--selected' : ''}${isToday ? ' select-field__calendar-day--today' : ''}`}
                    onPointerDown={(e) => {
                      e.preventDefault()
                      if (!disabled) choose(cell.iso)
                    }}
                  >
                    {cell.date.getDate()}
                  </button>
                )
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

function SelectFieldListbox(props: SelectFieldSelectProps) {
  const {
    id,
    label,
    name,
    value,
    onChange,
    leading,
    hideLabel = false,
    ui = 'default',
    options,
  } = props
  const listId = useId()
  const shellRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const selectedLabel =
    options.find((o) => o.value === value)?.label ?? options[0]?.label ?? ''

  function choose(next: string) {
    onChange(next)
    setOpen(false)
    triggerRef.current?.focus()
  }

  useEffect(() => {
    if (!open) return
    document
      .getElementById(`${id}-opt-${activeIndex}`)
      ?.scrollIntoView({ block: 'nearest' })
  }, [activeIndex, open, id])

  useEffect(() => {
    if (!open) return
    function onPointerDown(event: Event) {
      if (!shellRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
    }
  }, [open])

  function openWithActiveIndex() {
    const idx = options.findIndex((o) => o.value === value)
    setActiveIndex(idx === -1 ? 0 : idx)
    setOpen(true)
  }

  function onTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === 'Escape') {
      if (open) {
        event.preventDefault()
        setOpen(false)
      }
      return
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      if (!open) {
        openWithActiveIndex()
      } else {
        setActiveIndex((i) => Math.min(options.length - 1, i + 1))
      }
      return
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      if (!open) {
        openWithActiveIndex()
      } else {
        setActiveIndex((i) => Math.max(0, i - 1))
      }
      return
    }

    if (!open) return

    if (event.key === 'Home') {
      event.preventDefault()
      setActiveIndex(0)
      return
    }

    if (event.key === 'End') {
      event.preventDefault()
      setActiveIndex(options.length - 1)
      return
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      const opt = options[activeIndex]
      if (opt) choose(opt.value)
      return
    }

    if (event.key === 'Tab') {
      setOpen(false)
    }
  }

  return (
    <div className={`select-field text-field${ui === 'home' ? ' select-field--home' : ''}`}>
      {hideLabel ? null : (
        <label className="text-field__label" htmlFor={id}>
          {label}
        </label>
      )}
      <input type="hidden" name={name} value={value} />
      <div className={`select-field__shell${open ? ' select-field__shell--open' : ''}`} ref={shellRef}>
        <button
          ref={triggerRef}
          id={id}
          type="button"
          className={`text-field__control select-field__trigger${open ? ' select-field__trigger--open' : ''}`}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-activedescendant={open ? `${id}-opt-${activeIndex}` : undefined}
          onClick={() => {
            if (open) {
              setOpen(false)
            } else {
              openWithActiveIndex()
            }
          }}
          onKeyDown={onTriggerKeyDown}
        >
          {leading ? <span className="text-field__leading">{leading}</span> : null}
          {leading ? <span className="text-field__divider" aria-hidden="true" /> : null}
          <span
            className={`select-field__value${value === '' ? ' select-field__value--placeholder' : ''}`}
          >
            {selectedLabel}
          </span>
          <span className="text-field__trailing" aria-hidden="true">
            <ChevronDownIcon />
          </span>
        </button>
        {open ? (
          <ul
            id={listId}
            className="select-field__list"
            role="listbox"
            aria-label={label}
          >
            {options.map((opt, i) => (
              <li
                key={opt.value || `opt-${opt.label}`}
                id={`${id}-opt-${i}`}
                role="option"
                aria-selected={value === opt.value}
                className={`select-field__option${i === activeIndex ? ' select-field__option--highlight' : ''}${opt.value === '' ? ' select-field__option--muted' : ''}`}
                onPointerDown={(e) => {
                  e.preventDefault()
                  choose(opt.value)
                }}
                onMouseEnter={() => setActiveIndex(i)}
              >
                {opt.label}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )
}

export function SelectField(props: SelectFieldProps) {
  if (props.variant === 'date') {
    return <SelectFieldDatePicker {...props} />
  }
  return <SelectFieldListbox {...props} />
}
