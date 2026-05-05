export const BOOKING_DETAILS_PAGE = {
  title: 'Booking Details',
  subtitle: 'Manage your journey and travel documents',
  statusPill: 'Confirmed',
  header: 'GL-8829-X',
  journeyLabel: 'Journey route',
  boarding: {
    label: 'CARRIER SERVICE',
    value: 'Vantage Atmospheric Express • Bus #402',
  },
  stops: [
    {
      kind: 'origin' as const,
      city: 'Los Angeles',
      station: 'Union Station — Gate 4',
      time: '08:15 AM',
      timeMeta: 'Oct 24, 2024',
    },
    {
      kind: 'destination' as const,
      city: 'San Diego',
      station: 'Santa Fe Depot — Platform 1',
      time: '12:30 PM',
      timeMeta: 'Oct 24, 2024',
    },
  ],
  travelerLabel: 'Traveler details',
  seatsLabel: 'Seats',
  seatsValue: '12A, 12B',
  classLabel: 'Class',
  classValue: 'Premium',
  actions: {
    resendEmail: 'Resend Email',
    shareBooking: 'Share Booking',
  },
  fareLabel: 'DETAILED FARE BREAKDOWN',
  fareRows: [
    { label: 'Base fare', amount: '$120.00' },
    { label: 'Taxes & fees', amount: '$22.50' },
  ],
  fareTotalLabel: 'Total amount',
  fareTotal: '$142.50',
  cardFooter: {
    message: 'Need to make changes to your reservation?',
    cta: 'Manage Trip',
  },
  mapChip: {
    label: 'ESTIMATED TRAVEL TIME',
    value: '6h 30m',
  },
  /** OpenStreetMap embed — bbox covers Los Angeles → San Diego corridor (no API key). */
  mapEmbed: {
    title: 'Map: Los Angeles to San Diego',
    src: 'https://www.openstreetmap.org/export/embed.html?bbox=-118.7%2C32.5%2C-116.8%2C34.2&layer=mapnik',
  },
} as const
