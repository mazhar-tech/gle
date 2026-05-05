import { Link } from 'react-router-dom'
import {
  ArrowRightIcon,
  Award,
  LocalGuideIcon,
  Safe,
} from '../../assets/icons'
import type { HomeDummyData } from '../../pages/Home/Home.constants'

type Features = HomeDummyData['features']

const FEATURE_ICONS = [Safe, Award, LocalGuideIcon] as const

export function HomeFeatures({ features }: { features: Features }) {
  return (
    <section className="home__features">
      <div className="home__features-inner">
        <div className="home__features-copy">
          <div className="home__features-lead">
            <span className="home__pill home__pill--outline">
              <span className="home__pill-dot" aria-hidden />
              <span className="home__pill-label">{features.pill}</span>
            </span>
            <h2 className="home__features-title">{features.title}</h2>
            <p className="home__features-desc">{features.description}</p>
          </div>
          <ul className="home__feature-list">
            {features.items.map((f, index) => {
              const Icon = FEATURE_ICONS[index] ?? LocalGuideIcon
              return (
                <li key={f.title} className="home__feature-item">
                  <div className="home__feature-icon-wrap" aria-hidden>
                    <Icon />
                  </div>
                  <div className="home__feature-body">
                    <p className="home__feature-title">{f.title}</p>
                    <p className="home__feature-sub">{f.description}</p>
                  </div>
                </li>
              )
            })}
          </ul>
          <Link to={features.ctaTo} className="home__btn home__btn--hero">
            <span>{features.ctaLabel}</span>
            <ArrowRightIcon />
          </Link>
        </div>
        <div className="">
          <img
            className=""
            src={features.imageSrc}
            alt={features.imageAlt}
          />
        </div>
      </div>
    </section>
  )
}
