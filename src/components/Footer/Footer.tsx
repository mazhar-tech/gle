import { Link, useLocation } from 'react-router-dom'
import gleLogo from '../../assets/gle-logo.svg'
import {
  FacebookSocialIcon,
  FooterCallIcon,
  FooterEmailIcon,
  FooterLocationIcon,
  InstagramSocialIcon,
  TwitterSocialIcon,
  YoutubeSocialIcon,
} from '../../assets/icons'
import { HOME_DUMMY_DATA } from '../../pages/Home/Home.constants'
import './Footer.css'

export function Footer() {
  const { pathname } = useLocation()
  const { siteFooter } = HOME_DUMMY_DATA
  const isWebsiteXstill = pathname === '/website-xstill'

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <img
              src={gleLogo}
              alt="GLE"
              className={`footer__logo${isWebsiteXstill ? ' footer__logo--black' : ''}`}
            />
            <p className="footer__tagline">{siteFooter.tagline}</p>
            <div className="footer__socials" aria-label="Social media links">
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <FacebookSocialIcon />
              </a>
              <a href="#" className="footer__social-link" aria-label="Twitter">
                <TwitterSocialIcon />
              </a>
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <InstagramSocialIcon />
              </a>
              <a href="#" className="footer__social-link" aria-label="Youtube">
                <YoutubeSocialIcon />
              </a>
            </div>
          </div>

          <div className="footer__columns">
            <div>
              <h3 className="footer__heading">Quick links</h3>
              <ul className="footer__list">
                {siteFooter.quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="footer__link">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="footer__heading">Support</h3>
              <ul className="footer__list">
                {siteFooter.supportLinks.map((item) => (
                  <li key={item.label}>
                    {'to' in item && item.to ? (
                      <Link to={item.to} className="footer__link">
                        {item.label}
                      </Link>
                    ) : (
                      <a href={'href' in item ? item.href : '#'} className="footer__link">
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="footer__heading">Contact info</h3>
              <ul className="footer__contact">
                <li className="footer__contact-item">
                  <span className="footer__contact-icon" aria-hidden>
                    <FooterCallIcon />
                  </span>
                  <span>{siteFooter.contact.phone}</span>
                </li>
                <li className="footer__contact-item">
                  <span className="footer__contact-icon" aria-hidden>
                    <FooterEmailIcon />
                  </span>
                  <span>{siteFooter.contact.email}</span>
                </li>
                <li className="footer__contact-item footer__contact-item--start">
                  <span className="footer__contact-icon" aria-hidden>
                    <FooterLocationIcon />
                  </span>
                  <span>
                    {siteFooter.contact.addressLine1}
                    <br />
                    {siteFooter.contact.addressLine2}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>{siteFooter.copyright}</p>
          <div className="footer__legal">
            {siteFooter.legal.map((item) =>
              'to' in item ? (
                <Link key={item.label} to={item.to} className="footer__legal-link">
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href} className="footer__legal-link">
                  {item.label}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
