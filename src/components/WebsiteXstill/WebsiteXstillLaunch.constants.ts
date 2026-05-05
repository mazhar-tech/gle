export const LAUNCH_CONTENT = {
  pill: 'Quick to Launch',
  title: 'Start Taking Bookings in Days — Not Months',
  description:
    "You don't need an IT team. XSTIL is built for quick onboarding so your operations go live in days, not months.",
  ctaLabel: 'Book a free Demo',
  note: 'Just a browser + internet connection to run your entire booking flow.',
} as const

export const LAUNCH_CHECKLIST = [
  { id: '1', text: 'Set up vehicles and seat layouts once — done.', icon: 'seat' },
  { id: '2', text: 'Update routes, stops, and schedules in real time.', icon: 'route' },
  { id: '3', text: 'Change pricing or add trips in seconds.', icon: 'ticket' },
  { id: '4', text: 'Works on any smartphone, tablet, or desktop.', icon: 'monitor' },
] as const

export const LAUNCH_METRICS = [
  { id: '1', value: '< 48h', title: 'Setup time', caption: 'From sign-up to live bookings', tone: 'cyan' },
  { id: '2', value: '100%', title: 'Browser-based', caption: 'No special hardware needed', tone: 'purple' },
  { id: '3', value: '99.9%', title: 'Uptime SLA', caption: 'Reliability you can count on', tone: 'green' },
] as const
