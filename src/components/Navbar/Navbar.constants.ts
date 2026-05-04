import gleLogo from '../../assets/gle-logo.svg'

export const NAVBAR_LANGUAGE_OPTIONS = [
  { code: 'en', shortLabel: 'EN', label: 'English', flag: '🇬🇧' },
  { code: 'es', shortLabel: 'ES', label: 'Spanish', flag: '🇪🇸' },
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
  },
  drawer: {
    closeMenuAriaLabel: 'Close menu',
  },
  navLinks: [
    { to: '/', label: 'Home', end: true },
    { to: '/find-trip', label: 'Find trip' },
    { to: '/find-booking', label: 'Find booking' },
    { to: '/about', label: 'About' },
    { to: '/terms', label: 'Terms' },
  ],
} as const
