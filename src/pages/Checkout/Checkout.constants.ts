import type { ActionBar } from '../../components/ChooseSeats/ChooseSeatsActionBar'

export const CHECKOUT_DUMMY_DATA = {
  navigation: {
    backLabel: 'Back',
    backTo: '/choose-seats',
  },
  page: {
    title: 'Checkout',
    subtitle: 'Enter your contact details',
  },
  summary: {
    sectionTitle: 'Booking summary',
    statusPill: 'ONE WAY',
    originCity: 'New York City',
    originDetail: 'Port Authority Terminal',
    destCity: 'Buffalo',
    destDetail: 'Metro Transportation Center',
    meta: {
      depart: { label: 'Date', value: 'Oct 24, 2024 • 09:00 AM' },
      seats: { label: 'PASSENGER', value: '1 Adult' },
      duration: { label: 'SEATS', value: '12A, 12B' },
    },
    fees: [
      { label: 'Total base fare', amount: '$90.00' },
      { label: 'Environmental fee 10%', amount: '$9.00' },
      { label: 'Fuel', amount: '$5.00' },
    ],
    totalLabel: 'Total amount',
    totalAmount: '$104.00',
  },
  form: {
    sectionTitle: 'Contact information',
    fields: {
      fullName: {
        id: 'checkout-full-name',
        name: 'fullName',
        label: 'Full Name (*)',
        placeholder: 'John Doe',
      },
      email: {
        id: 'checkout-email',
        name: 'email',
        label: 'Email Address (*)',
        placeholder: 'john@example.com',
      },
      emailConfirm: {
        id: 'checkout-email-confirm',
        name: 'emailConfirm',
        label: 'Confirm Email Address (*)',
        placeholder: 'john@example.com',
      },
      phone: {
        id: 'checkout-phone',
        name: 'phone',
        label: 'Phone Number',
        placeholder: '+1 (555) 000-0000',
      },
    },
    termsLabel:
      'I agree to the Terms of Service and Privacy Policy (*)',
  },
  trust: {
    text: 'Payments are secure and encrypted.',
  },
  actionBar: {
    priceLabel: 'Total amount',
    priceMain: '$104',
    priceFraction: '.00',
    ctaLabel: 'Continue to payment',
    ctaHref: '/make-payment',
  } satisfies ActionBar,
}
