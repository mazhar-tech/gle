export const PAYMENT_SUCCESS_DUMMY_DATA = {
  page: {
    title: 'Payment Successful!',
    subtitle: 'A confirmation email has been sent to your inbox.',
  },
  booking: {
    referenceLabel: 'Booking reference',
    referenceCode: 'GL-8829-X',
    travelDateLabel: 'Travel date',
    travelDate: 'October 24, 2024',
    passengersLabel: 'Passengers',
    passengersCount: '2',
    totalLabel: 'Total paid',
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
    downloadReceiptLabel: 'Download receipt',
    downloadReceiptHref: '#receipt',
  },
  footnote:
    "If you don't see the email, please check your spam/junk folder.",
} as const
