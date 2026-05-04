import type { SelectTripPageCopy } from '../../pages/SelectTrip/SelectTrip.constants'

export interface SelectTripHeaderProps {
  page: SelectTripPageCopy
}

export function SelectTripHeader({ page }: SelectTripHeaderProps) {
  return (
    <header className="select-trip__header">
      <h1 className="select-trip__title">{page.title}</h1>
      <p className="select-trip__subtitle">{page.subtitle}</p>
    </header>
  )
}
