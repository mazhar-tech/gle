export const HERO_CONTENT = {
  badge: '#1 Bus Booking & Operations Platform',
  headlineLines: ['The Smartest', 'Way', 'to Move Africa'],
  description:
    'Give your passengers a seamless online booking experience while you manage routes, seats, and operations from one modern dashboard.',
  primaryCta: 'Start for Free',
  secondaryCta: 'Watch demo',
  trustStars: '★★★★★',
  trustPrefix: '120+ operators',
  trustHighlight: 'trust XSTIL',
  browserUrl: 'app.xstil.com/book',
  livePill: 'Live',
  liveFloating: 'Live Booking Active',
  searchPanelTitle: 'Find Your Bus',
  searchButtonLabel: 'Search Available Buses',
  seatPanelTitle: 'Live Seat Map',
  legend: { free: 'Free', yours: 'Yours', taken: 'Taken' },
  confirmPanelTitle: 'Booking Confirmed',
} as const

export const TRUST_INITIALS = ['K', 'A', 'M', 'T', 'O'] as const

export const SEARCH_FIELDS = [
  { label: 'From', value: 'Lagos' },
  { label: 'To', value: 'Accra' },
  { label: 'Date', value: 'Dec 24' },
  { label: 'Seats', value: '2 Pass.' },
] as const

export const SEAT_NUMBERS = [
  { value: '7', tone: 'is-free' },
  { value: '9', tone: 'is-yours' },
  { value: '11', tone: 'is-yours' },
  { value: '13', tone: 'is-taken' },
  { value: '15', tone: 'is-taken' },
  { value: '17', tone: 'is-taken' },
  { value: '19', tone: 'is-free' },
  { value: '21', tone: 'is-taken' },
  { value: '23', tone: 'is-taken' },
  { value: '25', tone: 'is-yours' },
  { value: '27', tone: 'is-taken' },
  { value: '29', tone: 'is-free' },
  { value: '31', tone: 'is-taken' },
  { value: '33', tone: 'is-taken' },
  { value: '35', tone: 'is-taken' },
  { value: '37', tone: 'is-taken' },
] as const

export const CONFIRM_ROWS = [
  { label: 'Ticket', value: '#X-9042' },
  { label: 'Route', value: 'LOS → ACC' },
  { label: 'Status', value: '✓ Paid' },
] as const
