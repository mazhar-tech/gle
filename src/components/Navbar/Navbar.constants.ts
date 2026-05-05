import gleLogo from '../../assets/gle-logo.svg'

export const NAVBAR_LANGUAGE_OPTIONS = [
  { code: 'en', shortLabel: 'EN', label: 'English', flag: '🇬🇧' },
  { code: 'fr', shortLabel: 'FR', label: 'French', flag: '🇫🇷' },
] as const

export const NAVBAR_DUMMY_DATA = {
  nav: {
    ariaLabel: 'Primary navigation',
  },
  navigationPanelId: 'primary-navigation',
  brand: {
    homePath: '/',
    logoSrc: gleLogo,
    logoAlt: 'GLE logo',
  },
  actions: {
    languageSelectAriaLabel: 'Select language',
    defaultLanguageCode: NAVBAR_LANGUAGE_OPTIONS[0].code,
    languages: NAVBAR_LANGUAGE_OPTIONS,
    notificationsAriaLabel: 'View notifications',
    signInLabel: 'Sign in',
    primaryCtaLabel: 'Book a Demo',
    primaryCtaTo: '/find-trip',
  },
  drawer: {
    closeMenuAriaLabel: 'Close menu',
  },
  navLinks: [
    { to: '/website-xstill', label: 'website-still' },
    { to: '/find-trip', label: 'How It Works' },
    { to: '/select-trip', label: 'Business Value' },
    { to: '/make-payment', label: 'Pricing' },
  ],
} as const
