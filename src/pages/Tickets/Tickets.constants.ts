export const TICKETS_DUMMY_DATA = {
  page: {
    title: 'Your Tickets',
    subtitle: 'Manage your upcoming journey and boarding passes',
    shareLabel: 'Share Ticket',
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
    referenceLabel: 'BOOKING CODE',
    referenceCode: 'LMN-X992-B',
    statusPill: 'Confirmed',
    createdLabel: 'Created date',
    createdDate: 'Oct 12, 2024',
    durationLabel: 'TOTAL AMOUNT',
    durationValue: '$142.50',
  },
  notice: {
    text: 'Arrive at least 15 minutes before departure for check-in.',
  },
  boardingSection: {
    title: 'Your Individual Tickets',
  },
  tickets: [
    {
      id: '1',
      seatLabel: 'GLE',
      classPill: 'TKT-8829-1',
      passengerLabel: 'NYC → Buffalo',
      travelDate: 'Oct 24, 2024',
      passengerName: '09:00 AM',
      boardLabel: 'Seat 12A',
      qrCaption: 'Scan to board',
      qrValue: 'GLE|GL-8829-X|12A|Jonathan A.|2024-10-24T09:00:00',
    },
    {
      id: '2',
      seatLabel: 'GLE',
      classPill: 'TKT-8829-2',
      passengerLabel: 'NYC → Buffalo',
      travelDate: 'Oct 24, 2024',
      passengerName: '09:00 AM',
      boardLabel: 'Seat 12A',
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
