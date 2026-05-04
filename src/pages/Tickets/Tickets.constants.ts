export const TICKETS_DUMMY_DATA = {
  page: {
    title: 'Your Tickets',
    subtitle: 'Manage your upcoming journey and boarding passes',
    addToCalendarLabel: 'Add to calendar',
  },
  summary: {
    operatorCode: 'GLE',
    routeLabel: 'Route',
    routeName: 'New York City → Buffalo',
    departure: {
      label: 'Departure',
      city: 'New York City',
      time: 'Oct 24, 2024 at 09:00 AM',
    },
    arrival: {
      label: 'Arrival',
      city: 'Buffalo',
      time: 'Oct 24, 2024 at 04:45 PM',
    },
  },
  booking: {
    referenceLabel: 'Booking reference',
    referenceCode: 'GL-8829-X',
    statusPill: 'Active',
    createdLabel: 'Created date',
    createdDate: 'Oct 12, 2024',
    durationLabel: 'Trip duration',
    durationValue: '7h 45m',
  },
  notice: {
    text: 'Arrive at least 15 minutes before departure for check-in.',
  },
  boardingSection: {
    title: 'Boarding passes',
  },
  tickets: [
    {
      id: '1',
      seatLabel: '12A',
      classPill: 'Economy',
      passengerLabel: 'Passenger',
      travelDate: 'Oct 24, 2024',
      passengerName: 'Jonathan A.',
      boardLabel: 'Board',
      qrCaption: 'Scan to board',
      qrValue: 'GLE|GL-8829-X|12A|Jonathan A.|2024-10-24T09:00:00',
    },
    {
      id: '2',
      seatLabel: '12B',
      classPill: 'Economy',
      passengerLabel: 'Passenger',
      travelDate: 'Oct 24, 2024',
      passengerName: 'Jonathan A.',
      boardLabel: 'Board',
      qrCaption: 'Scan to board',
      qrValue: 'GLE|GL-8829-X|12B|Jonathan A.|2024-10-24T09:00:00',
    },
  ],
} as const

export type TicketsPageData = (typeof TICKETS_DUMMY_DATA)['page']
export type TicketsSummaryData = (typeof TICKETS_DUMMY_DATA)['summary']
export type TicketsBookingData = (typeof TICKETS_DUMMY_DATA)['booking']
export type TicketsNoticeData = (typeof TICKETS_DUMMY_DATA)['notice']
export type TicketsBoardingSectionData = (typeof TICKETS_DUMMY_DATA)['boardingSection']
export type TicketsCardData = (typeof TICKETS_DUMMY_DATA)['tickets'][number]
