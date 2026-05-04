export const PAYMENT_SUCCESS_DUMMY_DATA = {
  page: {
    title: 'Payment Successful!',
    subtitle: 'A confirmation email has been sent to your inbox.',
  },
  booking: {
    referenceLabel: 'Booking Code',
    referenceCode: 'GL-8829-X',
    travelDateLabel: 'Booking date',
    travelDate: 'October 24, 2024',
    passengersLabel: 'PAYMENT METHOD',
    passengersCount: '•••• 4429',
    totalLabel: 'AMOUNT PAID',
    totalAmount: '$104.00',
    totalCurrency: 'USD',
  },
  trip: {
    sectionTitle: 'Trip details',
    statusPill: 'Confirmed',
    stops: [
      {
        kind: 'depart' as const,
        city: 'New York City, NY',
        station: 'Port Authority Terminal',
        when: 'Oct 24, 2024 • 08:30 AM',
      },
      {
        kind: 'arrive' as const,
        city: 'Buffalo, NY',
        station: 'Exchange St. Station',
        when: 'Oct 25, 2024 • 08:30 AM',
      },
    ],
    seatsLabel: 'Seats',
    seats: ['12A', '12B'],
    passengerLabel: 'Passenger',
    passengerName: 'Jonathan Aris',
  },
  actions: {
    downloadReceiptLabel: 'Share Booking',
    downloadReceiptHref: '/tickets',
  },
  footnote:
    "If you don't see the email, please check your spam/junk folder.",
} as const
