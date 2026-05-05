import { ArrowRightIcon, ClockIcon, PopularCardBusIcon } from '../../assets/icons'
import type { HomeDummyData } from '../../pages/Home/Home.constants'

type PopularRouteCardData = HomeDummyData['popularRoutes']['cards'][number]

function getPopularBadgeTone(badge: string) {
  switch (badge.toLowerCase()) {
    case 'most popular':
      return 'home__popular-badge--blue'
    case 'premium':
      return 'home__popular-badge--purple'
    case 'express':
      return 'home__popular-badge--green'
    case 'best value':
      return 'home__popular-badge--orange'
    default:
      return ''
  }
}

export function HomePopularRouteCard({ card }: { card: PopularRouteCardData }) {
  const badgeToneClass = getPopularBadgeTone(card.badge)

  return (
    <li className="home__popular-card">
      <div className="home__popular-media">
        <img src={card.imageSrc} alt={card.imageAlt} className="home__popular-img" />
        <span className={`home__popular-badge ${badgeToneClass}`.trim()}>{card.badge}</span>
        <span className="home__popular-duration">
          <span className="home__popular-duration-icon" aria-hidden>
            <ClockIcon />
          </span>
          {card.duration}
        </span>
      </div>
      <div className="home__popular-body">
        <div className="home__popular-route">
          <h3 className="home__popular-city">{card.fromCity}</h3>
          <span className="home__popular-route-arrow" aria-hidden>
            <ArrowRightIcon />
          </span>
          <h3 className="home__popular-city">{card.toCity}</h3>
        </div>
        <p className="home__popular-country">{card.countryPath}</p>
        <p className="home__popular-rating">
          <span className="home__popular-stars" aria-hidden>
            {'★★★★☆'}
          </span>
          <span className="home__popular-score">{card.rating}</span>
          <span className="home__popular-reviews">({card.reviews} reviews)</span>
        </p>
        <div className="home__popular-footer">
          <p className="home__popular-price">
            <span className="home__popular-price-label">From</span>
            <span className="home__popular-price-val">{card.price}</span>
          </p>
          <button type="button" className="home__popular-book-btn">
            <span className="home__popular-book-btn-icon" aria-hidden>
              <PopularCardBusIcon />
            </span>
            <span>Book now</span>
          </button>
        </div>
      </div>
    </li>
  )
}
