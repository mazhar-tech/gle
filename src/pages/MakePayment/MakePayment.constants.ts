import busHeroImage from '../../assets/images/Premium-Bus.jpg'

export type PaymentMethodId = 'card' | 'paypal'

export const MAKE_PAYMENT_DUMMY_DATA = {
  navigation: {
    backLabel: 'Back',
    backTo: '/checkout',
  },
  page: {
    title: 'Make Payment',
    subtitle:
      'Complete your booking securely. Your seats remain reserved only while the countdown is active.',
  },
  holdBanner: {
    title: 'Seats are on hold for you',
    subtitle:
      'Complete your payment before the timer reaches zero or your reservation will be released.',
  },
  countdownStartSeconds: 9 * 60 + 42,
  payment: {
    sectionTitle: 'Select Payment Method',
    methods: [
      {
        id: 'card' as const,
        title: 'Credit/Debit Card',
        subtitle: 'Recommended for faster checkout',
        icon: 'card' as const,
      },
      {
        id: 'paypal' as const,
        title: 'PayPal',
        subtitle: 'Pay with your PayPal balance or bank',
        icon: 'paypal' as const,
      },
    ],
  },
  trust: {
    title: 'Encrypted checkout',
    subtitle: '256-bit TLS protects your payment on this page.',
    badgeLabel: 'PCI LEVEL 1',
    partnerLabel: 'DigiCert EV',
  },
  primaryCta: {
    label: 'Pay now',
  },
  legal: {
    line: 'By placing this order, you authorize us to charge your card for the amount above.',
    links: [
      { label: 'Refund policy', href: '#' },
      { label: 'Privacy', href: '#' },
    ],
  },
  summary: {
    headerImageSrc: busHeroImage,
    headerImageAlt: 'Luxury coach bus interior',
    tripTypePill: 'Luxury coach bus',
    from: { label: 'From', city: 'New York City' },
    to: { label: 'To', city: 'Buffalo' },
    chips: [
      { icon: 'calendar' as const, text: 'Oct 24, 2024 • 09:00 AM' },
      { icon: 'seat' as const, text: 'Trip ID GLE-7' },
      { icon: 'clock' as const, text: '7h 45m' },
    ],
    fees: [
      { label: 'Total base fare', amount: '$90.00' },
      { label: 'Environmental fee 10%', amount: '$9.00' },
      { label: 'Fuel', amount: '$5.00' },
    ],
    totalLabel: 'Total amount',
    totalAmount: '$104.00',
    dueLabel: 'Amount due',
    dueDisplay: '$104.00',
  },
}
