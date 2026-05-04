export const TERMS_PAGE = {
  title: 'Terms & Conditions',
  lede: 'Please read carefully before proceeding',
  footerNote: 'Last updated · May 2026',
  sections: {
    intro: {
      title: '1. Introduction',
      paragraphs: [
        'Welcome to SkyRoute. These Terms and Conditions govern your use of our premium bus booking services and our digital platform. By accessing our services, you agree to be bound by these provisions in their entirety.',
        'SkyRoute provides an atmospheric travel experience through precision engineering of routes and high-end scheduling. Our commitment is to offer weightless travel management for the modern explorer.',
      ],
    },
    responsibilities: {
      title: '2. User Responsibilities',
      intro:
        'To maintain the integrity of the SkyRoute ecosystem, users must adhere to the following behavioral standards:',
      bullets: [
        'Provide accurate, high-fidelity personal information during the booking process.',
        'Maintain the confidentiality of account credentials and notify us immediately of any security breach.',
        'Use the platform exclusively for legitimate reservations and professional travel planning.',
      ],
    },
    booking: {
      title: '3. Booking & Payment',
      callout:
        'Reservations are confirmed only upon successful processing of the transaction through our encrypted gateways. We accept all major digital assets and credit providers supported by the Atmospheric Precision engine.',
      afterCallout:
        'All fares are inclusive of relevant taxes and our signature service fee, ensuring a transparent pricing model without hidden "ghost" charges.',
    },
    cancellation: {
      title: '4. Cancellation Policy',
      badge: 'Important',
      body:
        'Cancellations requested 24 hours prior to departure are eligible for a 90% credit toward future SkyRoute journeys. Within the 24-hour window, bookings are non-refundable due to the precise logistical planning required for our atmospheric routes.',
    },
    privacy: {
      title: '5. Privacy',
      paragraphs: [
        'We treat your data with the same precision as our routes. SkyRoute employs advanced encryption layers to protect your personal identity. We do not sell user data to third-party entities; your journey remains private and secure within our curated environment.',
      ],
    },
    liability: {
      title: '6. Limitation of Liability',
      quote:
        'SkyRoute shall not be held liable for delays caused by atmospheric conditions, force majeure events, or orbital disruptions beyond our engineering control. Our liability is limited to the cost of the ticket purchased.',
    },
  },
} as const
