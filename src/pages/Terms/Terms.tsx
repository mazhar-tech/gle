import { TERMS_PAGE } from './Terms.constants'
import './Terms.css'

export function Terms() {
  const { title, lede, footerNote, sections } = TERMS_PAGE

  return (
    <article className="terms">
      <div className="terms__inner">
        <header className="terms__header">
          <h1 className="terms__title">{title}</h1>
          <p className="terms__lede">{lede}</p>
        </header>

        <div className="terms__article">
          <section
            className="terms__section"
            aria-labelledby="terms-intro-heading"
          >
            <h2 id="terms-intro-heading" className="terms__heading">
              {sections.intro.title}
            </h2>
            <div className="terms__section-body">
              {sections.intro.paragraphs.map((text) => (
                <p key={text} className="terms__paragraph">
                  {text}
                </p>
              ))}
            </div>
          </section>

          <section
            className="terms__section"
            aria-labelledby="terms-responsibilities-heading"
          >
            <h2
              id="terms-responsibilities-heading"
              className="terms__heading"
            >
              {sections.responsibilities.title}
            </h2>
            <div className="terms__section-body">
              <p className="terms__paragraph">{sections.responsibilities.intro}</p>
              <ul className="terms__list">
                {sections.responsibilities.bullets.map((item) => (
                  <li key={item} className="terms__list-item">
                    <span className="terms__list-marker" aria-hidden="true" />
                    <span className="terms__list-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            className="terms__section"
            aria-labelledby="terms-booking-heading"
          >
            <h2 id="terms-booking-heading" className="terms__heading">
              {sections.booking.title}
            </h2>
            <div className="terms__section-body terms__section-body--booking">
              <div className="terms__callout">
                <p className="terms__paragraph">{sections.booking.callout}</p>
              </div>
              <p className="terms__paragraph">{sections.booking.afterCallout}</p>
            </div>
          </section>

          <section
            className="terms__section"
            aria-labelledby="terms-cancellation-heading"
          >
            <h2 id="terms-cancellation-heading" className="terms__heading">
              {sections.cancellation.title}
            </h2>
            <div className="terms__section-body">
              <p className="terms__badge-row">
                <span className="terms__badge">{sections.cancellation.badge}</span>
              </p>
              <p className="terms__paragraph">{sections.cancellation.body}</p>
            </div>
          </section>

          <section
            className="terms__section"
            aria-labelledby="terms-privacy-heading"
          >
            <h2 id="terms-privacy-heading" className="terms__heading">
              {sections.privacy.title}
            </h2>
            <div className="terms__section-body">
              {sections.privacy.paragraphs.map((text) => (
                <p key={text} className="terms__paragraph">
                  {text}
                </p>
              ))}
            </div>
          </section>

          <section
            className="terms__section terms__section--liability"
            aria-labelledby="terms-liability-heading"
          >
            <h2 id="terms-liability-heading" className="terms__heading">
              {sections.liability.title}
            </h2>
            <blockquote className="terms__blockquote">
              <p className="terms__blockquote-text">
                {sections.liability.quote}
              </p>
            </blockquote>
          </section>

          <footer className="terms__article-footer">
            <p className="terms__footer-note">{footerNote}</p>
          </footer>
        </div>
      </div>
    </article>
  )
}
