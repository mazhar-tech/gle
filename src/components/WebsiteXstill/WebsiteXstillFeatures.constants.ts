export const FEATURES_CONTENT = {
  pill: 'Platform Features',
  title: 'Everything You Need to Run Your Fleet',
  subtitle: 'One platform, complete visibility — from booking to boarding and analytics.',
  kicker: 'Sales & Booking',
  heading: 'Give Passengers a World-Class Booking Experience',
  body: 'Your customers get a fast, beautiful interface to search routes, compare departures, pick seats, and complete payments in minutes.',
  ctaLabel: 'See it in action',
  mockupTag: 'Sales & Booking',
  searchLabel: 'Search',
  seatLabel: 'Select your seat',
} as const

export const FEATURE_TABS = [
  { id: 'sales', label: 'Sales & Booking', active: true, icon: 'sales' },
  { id: 'fleet', label: 'Fleet & Ops', active: false, icon: 'fleet' },
  { id: 'analytics', label: 'Analytics', active: false, icon: 'analytics' },
] as const

export const FEATURE_BULLETS = [
  { id: '1', icon: 'ticket', text: 'Self-service online booking portal' },
  { id: '2', icon: 'seat', text: 'Real-time interactive seat map' },
  { id: '3', icon: 'card', text: 'Instant SMS / email confirmations' },
  { id: '4', icon: 'monitor', text: 'Mobile-first, works on any device' },
] as const

export const FEATURE_ROUTES = [
  { id: '1', title: 'Lagos → Accra · 07:30 AM', load: '87% full', price: '₦18,500', flag: 'Best', active: true },
  { id: '2', title: 'Lagos → Accra · 09:00 AM', load: '54% full', price: '₦16,200', flag: '', active: false },
  { id: '3', title: 'Lagos → Accra · 11:15 AM', load: '32% full', price: '₦20,000', flag: '', active: false },
] as const

export const FEATURE_SEATS = [
  'blue',
  'muted',
  'cyan',
  'blue',
  'cyan',
  'muted',
  'blue',
  'blue',
  'cyan',
  'blue',
  'muted',
  'blue',
] as const
