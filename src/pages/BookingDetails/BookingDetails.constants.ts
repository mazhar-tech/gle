export const BOOKING_DETAILS_PAGE = {
  title: 'Booking Details',
  subtitle: 'Manage your journey and travel documents',
  statusPill: 'Confirmed',
  headerTotal: '$142.50',
  journeyLabel: 'Journey route',
  boarding: {
    label: 'Boarding window',
    value: 'Please arrive at least 20 minutes before departure for premium check-in.',
  },
  stops: [
    {
      kind: 'origin' as const,
      city: 'Los Angeles',
      station: 'Union Station — Gate 4',
      time: '08:15 AM',
      timeMeta: 'Departure',
    },
    {
      kind: 'destination' as const,
      city: 'San Diego',
      station: 'Santa Fe Depot — Platform 1',
      time: '12:30 PM',
      timeMeta: 'Arrival',
    },
  ],
  travelerLabel: 'Traveler details',
  seatsLabel: 'Seats',
  seatsValue: '12A, 12B',
  classLabel: 'Class',
  classValue: 'Premium',
  actions: {
    resendEmail: 'Resend Email',
    downloadTicket: 'Download Ticket',
  },
  fareLabel: 'Fare breakdown',
  fareRows: [
    { label: 'Base fare', amount: '$120.00' },
    { label: 'Taxes & fees', amount: '$22.50' },
  ],
  fareTotalLabel: 'Total amount',
  fareTotal: '$142.50',
  cardFooter: {
    message: 'Need to make changes to your reservation?',
    cta: 'Manage Booking',
  },
  mapChip: {
    label: 'Live status',
    value: 'On schedule',
  },
} as const
