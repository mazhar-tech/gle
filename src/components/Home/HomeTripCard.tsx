import { useState } from 'react'
import {
  HomeTripCalendarIcon,
  HomeCardFavoriteIcon,
  HomeCardLeftIcon,
  HomeCardLeftIconOne,
  HomeCardLeftIconThree,
  HomeCardLeftIconTwo,
  HomeTripLocationIcon,
} from '../../assets/icons'
import type { HomeDummyData } from '../../pages/Home/Home.constants'

export type HomeTripCardData = HomeDummyData['trips']['cards'][number]

function getLeftIconByCardId(cardId: string) {
  if (cardId === '1') return <HomeCardLeftIconOne />
  if (cardId === '2') return <HomeCardLeftIconTwo />
  if (cardId === '3') return <HomeCardLeftIconThree />
  return <HomeCardLeftIcon />
}

export function HomeTripCard({ card }: { card: HomeTripCardData }) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <li className="home__trip-card">
      <div className="home__trip-media">
        <img src={card.imageSrc} alt={card.imageAlt} className="home__trip-img" />
        <button type="button" className="home__trip-icon-btn home__trip-icon-btn--tl" aria-label="Open trip">
          {getLeftIconByCardId(card.id)}
        </button>
        <button
          type="button"
          className={`home__trip-icon-btn home__trip-icon-btn--tr${isFavorite ? ' home__trip-icon-btn--active' : ''}`}
          aria-label={isFavorite ? 'Remove from favorites' : 'Save trip'}
          aria-pressed={isFavorite}
          onClick={() => setIsFavorite((prev) => !prev)}
        >
          <HomeCardFavoriteIcon active={isFavorite} />
        </button>
      </div>
      <div className="home__trip-body">
        <h3 className="home__trip-title">{card.title}</h3>
        <p className="home__trip-meta">
          <span className="home__trip-meta-icon" aria-hidden>
            <HomeTripLocationIcon />
          </span>
          <span>{card.location}</span>
        </p>
        <p className="home__trip-meta">
          <span className="home__trip-meta-icon" aria-hidden>
            <HomeTripCalendarIcon />
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
