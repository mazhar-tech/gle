import { Link } from 'react-router-dom'

export type ActionBar = {
  priceLabel: string
  priceMain: string
  priceFraction: string
  ctaLabel: string
  ctaHref: string
}

export function ChooseSeatsActionBar({ actionBar }: { actionBar: ActionBar }) {
  return (
    <div className="choose-seats__action-bar" role="region" aria-label="Continue booking">
      <div className="choose-seats__action-bar-inner">
        <div className="choose-seats__action-bar-price">
          <span className="choose-seats__action-bar-label">{actionBar.priceLabel}</span>
          <p className="choose-seats__action-bar-amount">
            <span className="choose-seats__action-bar-amount-main">
              {actionBar.priceMain}
            </span>
            <span className="choose-seats__action-bar-amount-suffix">
              {actionBar.priceFraction}
            </span>
          </p>
        </div>
        <Link
          to={actionBar.ctaHref}
          className="button button--primary choose-seats__cta"
        >
          <span className="button__label">{actionBar.ctaLabel}</span>
        </Link>
      </div>
    </div>
  )
}
