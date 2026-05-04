import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '../../assets/icons'
import type { HomeDummyData } from '../../pages/Home/Home.constants'

type Features = HomeDummyData['features']

export function HomeFeatures({ features }: { features: Features }) {
  return (
    <section className="home__features">
      <div className="home__features-inner">
        <div className="home__features-copy">
          <span className="home__pill home__pill--outline">
            <span className="home__pill-dot" aria-hidden />
            {features.pill}
          </span>
          <h2 className="home__features-title">{features.title}</h2>
          <p className="home__features-desc">{features.description}</p>
          <ul className="home__feature-list">
            {features.items.map((f) => (
              <li key={f.title} className="home__feature-item">
                <div className="home__feature-icon-wrap">
                  <span className="home__feature-icon-inner" aria-hidden />
                </div>
                <div>
                  <p className="home__feature-title">{f.title}</p>
                  <p className="home__feature-sub">{f.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link to={features.ctaTo} className="home__btn home__btn--hero">
            <span>{features.ctaLabel}</span>
            <ArrowRightIcon />
          </Link>
        </div>
        <div className="home__features-visual">
          <div className="home__features-photo home__features-photo--back">
            <img src={features.imageSrc} alt="" />
          </div>
          <div className="home__features-photo home__features-photo--front">
            <img src={features.imageSrc} alt={features.imageAlt} />
          </div>
        </div>
      </div>
    </section>
  )
}
