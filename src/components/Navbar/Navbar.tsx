import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  AvatarChevron,
  BellIcon,
  CloseIcon,
  GlobeIcon,
  MenuIcon,
} from '../../assets/icons'
import { NAVBAR_DUMMY_DATA } from './Navbar.constants.ts'
import './Navbar.css'

export type NavbarVariant = 'default' | 'hero'

export function Navbar({ variant = 'default' }: { variant?: NavbarVariant }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hasLanguageSelection, setHasLanguageSelection] = useState(false)
  const location = useLocation()
  const {
    nav,
    navigationPanelId,
    brand,
    actions,
    drawer,
    navLinks,
  } = NAVBAR_DUMMY_DATA
  const [selectedLanguage, setSelectedLanguage] = useState<string>(actions.defaultLanguageCode)
  const selectedLanguageOption =
    actions.languages.find(({ code }) => code === selectedLanguage) ?? actions.languages[0]

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [menuOpen])

  return (
    <header className={`navbar${variant === 'hero' ? ' navbar--hero' : ''}`}>
      {menuOpen ? (
        <div
          className="navbar__backdrop"
          role="presentation"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
      <div className="navbar__wrap">
        <nav
          className={`navbar__shell${menuOpen ? ' navbar__shell--menu-open' : ''}`}
          aria-label={nav.ariaLabel}
        >
          <button
            type="button"
            className="navbar__menu-toggle"
            aria-expanded={menuOpen}
            aria-controls={navigationPanelId}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MenuIcon />
          </button>

          <div className="navbar__brand">
            <Link to={brand.homePath} className="navbar__logo-link">
              <img src={brand.logoSrc} alt={brand.logoAlt} className="navbar__logo" />
            </Link>
          </div>

          <div className="navbar__actions">
            <label className="navbar__ghost">
              {hasLanguageSelection ? (
                <span
                  className={`navbar__country-flag navbar__country-flag--${selectedLanguageOption.code}`}
                  aria-hidden="true"
                />
              ) : (
                <span className="navbar__ghost-icon" aria-hidden="true">
                  <GlobeIcon />
                </span>
              )}
              <span className="navbar__ghost-label">{selectedLanguageOption.shortLabel}</span>
              <select
                className="navbar__language-select"
                aria-label={actions.languageSelectAriaLabel}
                value={selectedLanguage}
                onChange={(event) => {
                  setSelectedLanguage(event.target.value)
                  setHasLanguageSelection(true)
                }}
              >
                {actions.languages.map(({ code, flag, label }) => (
                  <option key={code} value={code}>
                    {flag} {label}
                  </option>
                ))}
              </select>
            </label>
            <span className="navbar__divider" aria-hidden="true" />
            <button type="button" className="navbar__icon-btn" aria-label={actions.notificationsAriaLabel}>
              <BellIcon />
            </button>
            <button type="button" className="navbar__account">
              <span className="navbar__account-label">{actions.signInLabel}</span>
              <span className="navbar__account-avatar">
                <AvatarChevron />
              </span>
            </button>
          </div>

          <div
            id={navigationPanelId}
            className={`navbar__drawer${menuOpen ? ' navbar__drawer--open' : ''}`}
          >
            <div className="navbar__drawer-header">
              <button
                type="button"
                className="navbar__drawer-close"
                aria-label={drawer.closeMenuAriaLabel}
                onClick={() => setMenuOpen(false)}
              >
                <CloseIcon />
              </button>
            </div>
            <ul className="navbar__menu">
              {navLinks.map((link) => (
                <li key={link.to} className="navbar__item">
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `navbar__link${isActive ? ' navbar__link--active' : ''}`
                    }
                    end={'end' in link ? link.end : undefined}
                  >
                    <span className="navbar__link-text">{link.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
