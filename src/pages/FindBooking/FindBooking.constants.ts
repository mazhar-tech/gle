import scenicImage from '../../assets/images/Premium-Bus.jpg'

export const FIND_BOOKING_DUMMY_DATA = {
  page: {
    title: 'Find your booking',
    subtitle: 'Enter your details to retrieve your trip information',
  },
  form: {
    ariaLabel: 'Find booking',
    bookingCode: {
      id: 'find-booking-code',
      name: 'bookingCode',
      label: 'Booking code',
      placeholder: 'e.g. VBUS-9283',
    },
    lastName: {
      id: 'find-booking-last-name',
      name: 'lastName',
      label: 'Contact last name',
      placeholder: 'Enter your last name',
    },
    submitLabel: 'Load booking',
  },
  spotlight: {
    imageSrc: scenicImage,
    imageAlt: 'Coach interior',
    caption: 'Scenic travel',
  },
  navigation: {
    afterSubmitPath: '/select-trip',
  },
} as const
