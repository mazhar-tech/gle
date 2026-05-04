import premiumBusImage from '../../assets/images/Container.jpg'

export type AmenityTone = 'default' | 'premium' | 'muted'

export interface Amenity {
  label: string
  icon: 'wifi' | 'no-wifi' | 'monitor' | 'seat' | 'bolt' | 'power' | 'snack'
  tone?: AmenityTone
}

export interface TripCardProps {
  tierLabel: string
  departTime: string
  departStation: string
  arriveTime: string
  arriveStation: string
  timelineStartLabel: string
  timelineEndLabel: string
  timelineVariant?: 'default' | 'premium'
  amenities: Amenity[]
  priceLabel: string
  price: string
  variant?: 'default' | 'premium'
  premiumBadge?: string
  selectButtonText?: string
  /** When set, the primary action navigates here instead of a plain button */
  selectHref?: string
}

export interface TripCardData extends TripCardProps {
  id: string
}

export const SELECT_TRIP_DUMMY_DATA = {
  page: {
    title: 'Select Trip',
    subtitle:
      'Choose from the best available options for your journey.',
  },
  summary: {
    ariaLabel: 'Search summary',
    routeEyebrow: 'Route',
    travelDateEyebrow: 'Travel date',
    origin: 'New York City ',
    destination: ' Buffalo',
    travelDate: 'Fri, Oct 24',
    editSearchPath: '/find-trip',
    editSearchLabel: 'Change',
  },
  results: {
    sectionHeadingId: 'results-heading',
    title: 'Trip results',
    filterLabels: ['Depart early', 'Arrive sooner'] as const,
  },
  trips: [
    {
      id: 'trip-fastest',
      selectHref: '/confirm-trip',
      tierLabel: 'GLE-1',
      departTime: '9:15 AM',
      departStation: 'New York',
      arriveTime: '6:30 PM',
      arriveStation: 'San Francisco, CA',
      timelineStartLabel: '6H 15M',
      timelineEndLabel: 'DIRECT',
      amenities: [
        { label: 'POWER', icon: 'power' },
        { label: 'Wi-Fi', icon: 'wifi' },
        { label: 'TV', icon: 'monitor' },
      ],
      priceLabel: 'From',
      price: '$45.00',
    },
    {
      id: 'trip-premium',
      selectHref: '/confirm-trip',
      variant: 'premium' as const,
      premiumBadge: 'RECOMMENDED',
      tierLabel: 'GLE-7 (EXPRESS)',
      departTime: '8:00 AM',
      departStation: 'New York',
      arriveTime: '5:15 PM',
      arriveStation: 'San Francisco, CA',
      timelineStartLabel: 'Express',
      timelineEndLabel: 'EXPRESS',
      timelineVariant: 'premium' as const,
      amenities: [
        { label: 'SNACKS', icon: 'seat', tone: 'premium' as const },
        { label: 'POWER', icon: 'power' },
        { label: 'Wi-Fi', icon: 'wifi' },
      ],
      priceLabel: 'From',
      price: '$89.50',
    },
    {
      id: 'trip-economy',
      selectHref: '/confirm-trip',
      tierLabel: 'Economy',
      departTime: '10:45 AM',
      departStation: 'Los Angeles, CA',
      arriveTime: '8:20 PM',
      arriveStation: 'San Francisco, CA',
      timelineStartLabel: 'Direct',
      timelineEndLabel: 'Arrive',
      amenities: [
        { label: 'NO WI-FI', icon: 'no-wifi', tone: 'muted' as const },
        { label: 'Wi-Fi', icon: 'wifi' },
      ],
      priceLabel: 'From',
      price: '$32.90',
    },
  ] satisfies TripCardData[],
  bento: {
    promoHeadingId: 'bento-promo-heading',
    imageSrc: premiumBusImage,
    imageAlt: '',
    pill: 'New',
    visualTitle: 'Coastal express',
    visualText:
      'Extra legroom and panoramic windows on our newest fleet.',
    asideTitle: 'Refer a friend',
    asideCopy: 'Get $10 credit for every friend who travels with GLE.',
  },
  tripCard: {
    selectButtonText: 'View Trip',
  },
} as const

export type SelectTripPageCopy = (typeof SELECT_TRIP_DUMMY_DATA)['page']
export type SelectTripSummaryData = (typeof SELECT_TRIP_DUMMY_DATA)['summary']
export type SelectTripResultsData = (typeof SELECT_TRIP_DUMMY_DATA)['results']
export type SelectTripBentoData = (typeof SELECT_TRIP_DUMMY_DATA)['bento']
