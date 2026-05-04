import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '../../assets/icons'
import type { HomeDummyData } from '../../pages/Home/Home.constants'
import { HomeTripCard } from './HomeTripCard'

type Trips = HomeDummyData['trips']

export function HomeTrips({ trips }: { trips: Trips }) {
  return (
    <section className="home__trips" id="trips" aria-labelledby="home-trips-heading">
      <div className="home__trips-inner">
        <div className="home__trips-header">
          <span className="home__eyebrow home__eyebrow--blue">{trips.pill}</span>
          <h2 id="home-trips-heading" className="home__trips-title">
            <span className="home__trips-title-line">
              <span className="home__trips-title-accent">{trips.titleAccent}</span>{' '}
              <span className="home__trips-title-plain">{trips.titleLine1Rest}</span>
            </span>
            <span className="home__trips-title-line">
              <span className="home__trips-title-plain">{trips.titleLine2}</span>
            </span>
          </h2>
          <p className="home__trips-desc">{trips.description}</p>
        </div>
        <ul className="home__trip-grid">
          {trips.cards.map((c) => (
            <HomeTripCard key={c.id} card={c} />
          ))}
        </ul>
        <Link to={trips.ctaTo} className="home__btn home__btn--secondary">
          <span>{trips.ctaLabel}</span>
          <ArrowRightIcon />
        </Link>
      </div>
    </section>
  )
}
