import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '../../assets/icons'
import type { HomeDummyData } from '../../pages/Home/Home.constants'
import { HomeTripCard } from './HomeTripCard'

type Trips = HomeDummyData['trips']

export function HomeTrips({ trips }: { trips: Trips }) {
  return (
    <section className="home__trips" id="trips" aria-labelledby="home-trips-heading">
      <div className="home__trips-inner">
        <span className="home__eyebrow home__eyebrow--blue">{trips.pill}</span>
        <h2 id="home-trips-heading" className="home__trips-title">
          {trips.title}
        </h2>
        <p className="home__trips-desc">{trips.description}</p>
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
