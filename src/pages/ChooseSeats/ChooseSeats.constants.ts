import type { ActionBar } from '../../components/ChooseSeats/ChooseSeatsActionBar'
import busInteriorImage from '../../assets/images/Premium-Bus.jpg'

export type SeatKind = 'available' | 'unavailable' | 'blocked'

export interface SeatDef {
  id: string
  kind: SeatKind
}

export interface SeatRowDef {
  row: number
  seats: [SeatDef, SeatDef, SeatDef, SeatDef]
}

export const CHOOSE_SEATS_DUMMY_DATA = {
  navigation: {
    backLabel: 'Back',
    backTo: '/confirm-trip',
  },
  page: {
    title: 'Choose Seats',
    subtitle: 'Select your preferred seats',
  },
  tripSummary: {
    tripIdLabel: 'TRIP ID: GLE-7',
    tripId: 'GLE-7',
    dotLabel: 'Oct 24, 2024',
    routeTitle: 'New York City to Buffalo',
    dateLabel: 'Departure',
    departTime: '09:00 AM',
  },
  legend: [
    { key: 'available', label: 'Available', swatch: 'available' as const },
    { key: 'selected', label: 'Selected', swatch: 'selected' as const },
    { key: 'unavailable', label: 'Unavailable', swatch: 'unavailable' as const },
  ],
  seatRows: buildSeatRows(),
  busFoot: {
    restroomLabel: 'Restroom rear',
    assistTitle: 'Assistance seating',
    assistNote: 'Rows 1–2 are reserved for mobility needs.',
  },
  experience: {
    eyebrow: 'Experience Omnibus',
    perks: [
      { label: 'Free High-Speed Wi-Fi', icon: 'wifi' as const },
      { label: 'USB Charging Ports', icon: 'bolt' as const },
      { label: 'Extra Legroom Guaranteed', icon: 'seat' as const },
    ],
  },
  cabin: {
    imageSrc: busInteriorImage,
    imageAlt: 'Standard cabin interior',
    eyebrow: 'Standard cabin',
    body:
      'Travel in comfort with our ergonomically designed seats and climate-controlled environment.',
  },
  actionBar: {
    priceLabel: 'Total fare',
    priceMain: '$118',
    priceFraction: '.00',
    ctaLabel: 'Continue',
    ctaHref: '/checkout',
  } satisfies ActionBar,
}

function buildSeatRows(): SeatRowDef[] {
  const rows: SeatRowDef[] = []
  for (let r = 1; r <= 14; r += 1) {
    const seats: [SeatDef, SeatDef, SeatDef, SeatDef] = [
      { id: `${r}A`, kind: seatKindFor(r, 'A') },
      { id: `${r}B`, kind: seatKindFor(r, 'B') },
      { id: `${r}C`, kind: seatKindFor(r, 'C') },
      { id: `${r}D`, kind: seatKindFor(r, 'D') },
    ]
    rows.push({ row: r, seats })
  }
  return rows
}

function seatKindFor(row: number, letter: string): SeatKind {
  if (row === 1 && (letter === 'A' || letter === 'B')) {
    return 'blocked'
  }
  if (row === 3 && letter === 'B') {
    return 'unavailable'
  }
  if (row === 7 && (letter === 'C' || letter === 'D')) {
    return 'unavailable'
  }
  return 'available'
}
