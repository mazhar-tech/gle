import { Link } from 'react-router-dom'
import { SparkleIcon } from '../../assets/icons'
import { Button } from '../Button/Button'
import { SELECT_TRIP_DUMMY_DATA, type TripCardProps } from '../../pages/SelectTrip/SelectTrip.constants'
import { AmenityIcon } from './AmenityIcon'

export function TripCard({
  tierLabel,
  departTime,
  departStation,
  arriveTime,
  arriveStation,
  timelineStartLabel,
  timelineEndLabel,
  timelineVariant = 'default',
  amenities,
  priceLabel,
  price,
  variant = 'default',
  premiumBadge,
  selectButtonText = SELECT_TRIP_DUMMY_DATA.tripCard.selectButtonText,
  selectHref,
}: TripCardProps) {
  return (
    <article className={`select-trip__card${variant === 'premium' ? ' select-trip__card--premium' : ''}`}>
      {premiumBadge ? (
        <div className="select-trip__card-badge" role="status">
          <SparkleIcon />
          <span className="select-trip__card-badge-text">{premiumBadge}</span>
        </div>
      ) : null}
      <div className="select-trip__card-inner">
        <div className="select-trip__card-left">
          <p className="select-trip__card-tier">{tierLabel}</p>
          <div className="select-trip__card-route">
            <div className="select-trip__time-block">
              <p className="select-trip__time">{departTime}</p>
              <p className="select-trip__station">{departStation}</p>
            </div>
            <div className={`select-trip__timeline select-trip__timeline--${timelineVariant}`} aria-hidden>
              <span className="select-trip__timeline-label select-trip__timeline-label--from">
                {timelineStartLabel}
              </span>
              <span className="select-trip__timeline-label select-trip__timeline-label--to">
                {timelineEndLabel}
              </span>
              <span className="select-trip__timeline-track" />
              <span className="select-trip__timeline-dot select-trip__timeline-dot--from" />
              <span className="select-trip__timeline-dot select-trip__timeline-dot--to" />
            </div>
            <div className="select-trip__time-block">
              <p className="select-trip__time">{arriveTime}</p>
              <p className="select-trip__station">{arriveStation}</p>
            </div>
          </div>
        </div>
        <div className="select-trip__card-amenities">
          {amenities.map((a, index) => (
            <span key={`${a.label}-${index}`} className={`select-trip__chip select-trip__chip--${a.tone ?? 'default'}`}>
              <span className="select-trip__chip-icon" aria-hidden>
                <AmenityIcon kind={a.icon} />
              </span>
              {a.label}
            </span>
          ))}
        </div>
        <div className="select-trip__card-right">
          <div className="select-trip__price">
            <span className="select-trip__price-label">{priceLabel}</span>
            <span className="select-trip__price-value">{price}</span>
          </div>
          {selectHref ? (
            <Link to={selectHref} className="button button--primary select-trip__select-btn">
              <span className="button__label">{selectButtonText}</span>
            </Link>
          ) : (
            <Button type="button" className="select-trip__select-btn">
              {selectButtonText}
            </Button>
          )}
        </div>
      </div>
    </article>
  )
}
