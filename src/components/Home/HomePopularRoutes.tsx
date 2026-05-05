import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '../../assets/icons'
import type { HomeDummyData } from '../../pages/Home/Home.constants'
import { HomePopularRouteCard } from './HomePopularRouteCard'

type PopularRoutes = HomeDummyData['popularRoutes']

export function HomePopularRoutes({ popularRoutes }: { popularRoutes: PopularRoutes }) {
  return (
    <section className="home__popular" id="popular-routes" aria-labelledby="home-popular-routes-heading">
      <div className="home__popular-inner">
        <div className="home__popular-header">
          <div className="home__popular-copy">
            <span className="home__eyebrow home__eyebrow--blue">{popularRoutes.pill}</span>
            <h2 id="home-popular-routes-heading" className="home__popular-title">
              {popularRoutes.title}
            </h2>
            <p className="home__popular-desc">{popularRoutes.description}</p>
          </div>
          <Link to={popularRoutes.ctaTo} className="home__popular-cta">
            <span>{popularRoutes.ctaLabel}</span>
            <ArrowRightIcon />
          </Link>
        </div>

        <ul className="home__popular-grid">
          {popularRoutes.cards.map((card) => (
            <HomePopularRouteCard key={card.id} card={card} />
          ))}
        </ul>
      </div>
    </section>
  )
}
