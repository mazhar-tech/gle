import { Link } from 'react-router-dom'
import './Footer.css'

const footerNav = [
  { to: '/', label: 'Home' },
  { to: '/find-trip', label: 'Find trip' },
  { to: '/about', label: 'About' },
  { href: '#privacy', label: 'Privacy' },
  { to: '/terms', label: 'Terms' },
] as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <p className="footer__title">GLE</p>
          <p className="footer__tagline">
            © {year} GLE. All rights reserved.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {footerNav.map((item) =>
            'to' in item ? (
              <Link key={item.to} to={item.to} className="footer__link">
                {item.label}
              </Link>
            ) : (
              <a key={item.href} href={item.href} className="footer__link">
                {item.label}
              </a>
            ),
          )}
        </nav>
      </div>
    </footer>
  )
}
