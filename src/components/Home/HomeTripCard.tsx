import { ClockIcon, HeartIcon, LinkArrowIcon, PinMarkerIcon } from '../../assets/icons'
import type { HomeDummyData } from '../../pages/Home/Home.constants'

export type HomeTripCardData = HomeDummyData['trips']['cards'][number]

export function HomeTripCard({ card }: { card: HomeTripCardData }) {
  return (
    <li className="home__trip-card">
      <div className="home__trip-media">
        <img src={card.imageSrc} alt={card.imageAlt} className="home__trip-img" />
        <button type="button" className="home__trip-icon-btn home__trip-icon-btn--tl" aria-label="Save trip">
          <HeartIcon />
        </button>
        <button type="button" className="home__trip-icon-btn home__trip-icon-btn--tr" aria-label="Share">
          <LinkArrowIcon />
        </button>
      </div>
      <div className="home__trip-body">
        <h3 className="home__trip-title">{card.title}</h3>
        <p className="home__trip-meta">
          <span className="home__trip-meta-icon" aria-hidden>
            <PinMarkerIcon />
          </span>
          <span>{card.location}</span>
        </p>
        <p className="home__trip-meta">
          <span className="home__trip-meta-icon" aria-hidden>
            <ClockIcon />
          </span>
          <span>{card.duration}</span>
        </p>
        <p className="home__trip-price">
          <span className="home__trip-price-val">{card.price}</span>
          <span className="home__trip-price-cur">{card.currency}</span>
        </p>
      </div>
    </li>
  )
}
