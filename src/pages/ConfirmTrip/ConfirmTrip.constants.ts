import busInteriorImage from '../../assets/images/Premium-Bus.jpg'
import type { Amenity } from '../SelectTrip/SelectTrip.constants'

export const CONFIRM_TRIP_DUMMY_DATA = {
  navigation: {
    backLabel: 'Back',
    backTo: '/select-trip',
  },
  page: {
    title: 'Confirm Trip',
    subtitle: 'Review your trip details before continuing',
  },
  summary: {
    tierBadge: 'TRIP ID: GLE-7',
    routeTitle: 'New York City to Buffalo',
    departure: {
      label: 'Departure',
      date: 'Oct 24, 2024',
      time: '09:00 AM',
      station: 'Port Authority Bus Terminal, NYC',
    },
    duration: {
      label: '7 Hours 45 Mins',
    },
    arrival: {
      label: 'Arrival',
      date: 'Oct 25, 2024',
      time: '04:45 PM',
      station: 'Buffalo Metropolitan Transportation Center',
    },
  },
  amenities: {
    title: 'Onboard Amenities',
    items: [
      { label: 'Power Outlets', icon: 'power' as const },
      { label: 'Wi-Fi', icon: 'wifi' as const },
      { label: 'TV', icon: 'monitor' as const },
      { label: 'Snacks', icon: 'snack' as const },
    ] satisfies Amenity[],
  },
  interior: {
    imageSrc: busInteriorImage,
    imageAlt: 'GLE coach interior with comfortable seating',
  },
  important: {
    title: 'Ticket confirmation & boarding',
    body:
      'You will receive a confirmation email with your digital ticket as a PDF. Please arrive at least 30 minutes before departure for boarding. Have a valid photo ID ready for check-in.',
  },
  actionBar: {
    priceLabel: 'Total fare',
    priceMain: '$89',
    priceFraction: '.50',
    ctaLabel: 'Choose Seats',
    ctaHref: '/choose-seats',
  },
} as const
