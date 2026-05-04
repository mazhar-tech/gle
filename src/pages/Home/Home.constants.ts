import heroImage from '../../assets/images/Container.jpg'
import cardMiami from '../../assets/images/Premium-Bus.jpg'
import cardArt from '../../assets/images/Container.jpg'

export const HOME_DUMMY_DATA = {
  hero: {
    imageSrc: heroImage,
    imageAlt: 'Coach travel at sunset',
    title: 'Discover, Travel with GLE',
    subtitle: 'One destination for all your travel needs — trips with GLE.',
    ctaLabel: 'Explore now',
    ctaTo: '/find-trip',
  },
  search: {
    titleLeading: 'Explore',
    titleAccent: 'Destinations',
    subtitle: 'Find stays, and rent cars — all from one trusted hub.',
    originLabel: 'From',
    originValue: 'New York',
    destinationLabel: 'To',
    destinationValue: 'Miami',
    dateLabel: 'Travel date',
    dateValue: 'Select dates',
    submitLabel: 'Search',
    submitTo: '/find-trip',
  },
  trips: {
    pill: 'GLE trips',
    title: 'GLE Trips Discover, Explore, Experience Beaches of Miami',
    description:
      'Curated routes, transparent pricing, and premium comfort—book coastal getaways and city breaks in minutes.',
    ctaLabel: 'View all trips',
    ctaTo: '/find-trip',
    cards: [
      {
        id: '1',
        imageSrc: cardMiami,
        imageAlt: 'Miami beachfront',
        title: 'Miami Beachfront',
        location: 'Miami Beach, FL',
        duration: '3 days',
        price: '$899',
        currency: 'USD',
      },
      {
        id: '2',
        imageSrc: cardArt,
        imageAlt: 'Art deco architecture',
        title: 'Art Deco District',
        location: 'Miami Beach, FL',
        duration: '2 days',
        price: '$649',
        currency: 'USD',
      },
      {
        id: '3',
        imageSrc: cardMiami,
        imageAlt: 'Yacht on the water',
        title: 'Yacht Experience',
        location: 'Miami, FL',
        duration: '1 day',
        price: '$1,249',
        currency: 'USD',
      },
      {
        id: '4',
        imageSrc: cardArt,
        imageAlt: 'City nightlife',
        title: 'Nightlife Culture',
        location: 'Miami, FL',
        duration: '2 nights',
        price: '$529',
        currency: 'USD',
      },
    ],
  },
  about: {
    pill: 'Our story',
    title: 'GLE is Designed to Simplify Every Journey',
    body:
      "GLE is more than a travel platform — it's a unified ecosystem built to connect every part of your journey. From booking your stay to finding the perfect ride, we make travel effortless, transparent, and tailored to you.",
    ctaLabel: 'Explore now',
    ctaTo: '/find-trip',
    collage: {
      mainSrc: cardMiami,
      secondarySrc: cardArt,
      tertiarySrc: heroImage,
    },
  },
  features: {
    pill: 'Why choose us',
    title: 'Amazing featured tour package around the world',
    description: "Explore the world's most iconic destinations with GLE.",
    items: [
      {
        title: 'Safe & secure travel',
        description: 'Your safety is our priority',
      },
      {
        title: 'Award winning service',
        description: 'Recognized excellence in travel',
      },
      {
        title: 'Expert local guides',
        description: 'Knowledgeable and friendly',
      },
    ],
    ctaLabel: 'Explore all',
    ctaTo: '/find-trip',
    imageSrc: heroImage,
    imageAlt: 'Travelers exploring a destination',
  },
  testimonials: {
    pill: 'Testimonials',
    title: 'Client about us',
    subtitle: 'See what our happy travelers have to say about their journeys.',
    items: [
      {
        id: '1',
        quote:
          'Amazing experience! The tour was perfectly organized and our guide was outstanding.',
        name: 'Sarah Williams',
        role: 'Travel blogger',
      },
      {
        id: '2',
        quote:
          'Best travel agency ever! They handled everything from flights to hotels seamlessly.',
        name: 'Michael Chen',
        role: 'Entrepreneur',
      },
      {
        id: '3',
        quote:
          'Outstanding service from start to finish. The attention to detail made our trip unforgettable.',
        name: 'Emma Rodriguez',
        role: 'Designer',
      },
    ],
  },
  faq: {
    title: 'Frequently asked questions',
    subtitle: 'Everything you need to know before you book with GLE.',
    items: [
      {
        id: '1',
        question: 'How do I change or cancel my booking?',
        answer:
          'You can manage your booking from your account or contact support. Cancellation policies vary by fare type and are shown at checkout.',
      },
      {
        id: '2',
        question: 'What payment methods do you accept?',
        answer:
          'We accept major credit and debit cards, and select digital wallets. All payments are processed securely.',
      },
      {
        id: '3',
        question: 'Do you offer group discounts?',
        answer:
          'Yes, for parties of 10 or more. Reach out to our team for a tailored quote and reserved seating.',
      },
      {
        id: '4',
        question: 'Is luggage included?',
        answer:
          'Each ticket includes a standard carry-on and checked allowance. Additional bags can be added during booking.',
      },
      {
        id: '5',
        question: 'How early should I arrive?',
        answer:
          'We recommend arriving at least 15 minutes before departure for check-in and boarding.',
      },
      {
        id: '6',
        question: 'Can I bring pets?',
        answer:
          'Service animals are welcome. Pet policies for other animals depend on the route—check trip details or contact support.',
      },
    ],
  },
  siteFooter: {
    tagline: 'Your trusted travel partner for unforgettable journeys.',
    copyright: `© ${new Date().getFullYear()} GLE. All rights reserved.`,
    quickLinks: [
      { label: 'About us', to: '/about' },
      { label: 'Destinations', to: '/find-trip' },
      { label: 'Testimonials', to: '#testimonials' },
    ],
    supportLinks: [
      { label: 'Help center', href: '#' },
      { label: 'Privacy policy', to: '/terms' },
      { label: 'Terms of service', to: '/terms' },
      { label: 'Contact us', href: '#contact' },
      { label: 'FAQs', href: '#faq' },
    ],
    contact: {
      phone: '+44 123 456 7890',
      email: 'info@gle.travel',
      addressLine1: '123 Travel Street',
      addressLine2: 'London, UK',
    },
    legal: [
      { label: 'Privacy', href: '#privacy' },
      { label: 'Terms', to: '/terms' as const },
      { label: 'Cookies', href: '#cookies' },
    ] as const,
  },
} as const

export type HomeDummyData = typeof HOME_DUMMY_DATA
