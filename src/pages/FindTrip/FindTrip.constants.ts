import premiumBusImage from '../../assets/images/Premium-Bus.jpg'
import type { SelectFieldOption } from '../../components/SelectField/SelectField'

export const FIND_TRIP_DUMMY_DATA = {
  page: {
    title: 'Find Trip',
    subtitle: 'Start with route and date',
  },
  navigation: {
    selectTripPath: '/select-trip',
  },
  form: {
    ariaLabel: 'Search trips',
    origin: {
      id: 'find-trip-origin',
      label: 'From',
      name: 'origin',
    },
    destination: {
      id: 'find-trip-destination',
      label: 'To',
      name: 'destination',
    },
    travelDate: {
      id: 'find-trip-date',
      label: 'Travel date',
      name: 'travelDate',
      datePlaceholder: 'Select travel date',
      minDate: '2026-01-01',
      maxDate: '2027-12-31',
    },
    submitButtonText: 'Search Trips',
  },
  originOptions: [
    { value: '', label: 'Select origin' },
    { value: 'nyc', label: 'New York City' },
    { value: 'buffalo', label: 'Buffalo' },
    { value: 'boston', label: 'Boston' },
    { value: 'philadelphia', label: 'Philadelphia' },
  ] satisfies SelectFieldOption[],
  destinationOptions: [
    { value: '', label: 'Select destination' },
    { value: 'buffalo', label: 'Buffalo' },
    { value: 'nyc', label: 'New York City' },
    { value: 'boston', label: 'Boston' },
    { value: 'washington-dc', label: 'Washington, D.C.' },
  ] satisfies SelectFieldOption[],
  spotlight: {
    headingId: 'spotlight-heading',
    imageSrc: premiumBusImage,
    imageAlt: 'Premium bus interior',
    eyebrow: 'Weekend spotlight',
    title: 'Scenic Coastal Route',
    copy: 'Experience our premium fleet with extra legroom and complimentary Wi-Fi on the Pacific Coast Express.',
    linkHref: '#',
    linkText: 'View route',
  },
} as const
