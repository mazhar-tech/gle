import { Link } from 'react-router-dom'
import gleLogo from '../../assets/gle-logo.svg'
import type { HomeDummyData } from '../../pages/Home/Home.constants'

type SiteFooter = HomeDummyData['siteFooter']

type SupportLink = { label: string; to?: string; href?: string }

function SupportLinkEl({ item }: { item: SupportLink }) {
  if ('to' in item && item.to) {
    return (
      <Link to={item.to} className="home__site-footer-link">
        {item.label}
      </Link>
    )
  }
  return (
    <a href={item.href ?? '#'} className="home__site-footer-link">
      {item.label}
    </a>
  )
}

export function HomeSiteFooter({ siteFooter }: { siteFooter: SiteFooter }) {
  return (
    <footer className="home__site-footer" id="contact">
      <div className="home__site-footer-top">
        <div className="home__site-footer-brand">
          <img src={gleLogo} alt="GLE" className="home__site-footer-logo" />
          <p className="home__site-footer-tagline">{siteFooter.tagline}</p>
          <div className="home__site-footer-social">
            <a href="#" className="home__social-btn" aria-label="Facebook">
              f
            </a>
            <a href="#" className="home__social-btn" aria-label="Twitter">
              x
            </a>
            <a href="#" className="home__social-btn" aria-label="Instagram">
              in
            </a>
          </div>
        </div>
        <div className="home__site-footer-columns">
          <div>
            <h3 className="home__site-footer-heading">Quick links</h3>
            <ul className="home__site-footer-list">
              {siteFooter.quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="home__site-footer-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="home__site-footer-heading">Support</h3>
            <ul className="home__site-footer-list">
              {siteFooter.supportLinks.map((l) => (
                <li key={l.label}>
                  <SupportLinkEl item={l} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="home__site-footer-heading">Contact info</h3>
            <ul className="home__site-footer-contact">
              <li>{siteFooter.contact.phone}</li>
              <li>{siteFooter.contact.email}</li>
              <li>
                {siteFooter.contact.addressLine1}
                <br />
                {siteFooter.contact.addressLine2}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="home__site-footer-bottom">
        <p>{siteFooter.copyright}</p>
        <div className="home__site-footer-legal">
          {siteFooter.legal.map((l) =>
            'to' in l ? (
              <Link key={l.label} to={l.to} className="home__site-footer-legal-link">
                {l.label}
              </Link>
            ) : (
              <a key={l.label} href={l.href} className="home__site-footer-legal-link">
                {l.label}
              </a>
            ),
          )}
        </div>
      </div>
    </footer>
  )
}
