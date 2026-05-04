import { GiftBoxIcon } from '../../assets/icons'
import type { SelectTripBentoData } from '../../pages/SelectTrip/SelectTrip.constants'

export interface SelectTripBentoProps {
  bento: SelectTripBentoData
}

export function SelectTripBento({ bento }: SelectTripBentoProps) {
  return (
    <section className="select-trip__bento" aria-labelledby={bento.promoHeadingId}>
      <div className="select-trip__bento-visual">
        <img
          src={bento.imageSrc}
          alt={bento.imageAlt}
          className="select-trip__bento-img"
          loading="lazy"
          decoding="async"
        />
        <div className="select-trip__bento-visual-overlay" aria-hidden />
        <div className="select-trip__bento-visual-copy">
          <span className="select-trip__bento-pill">{bento.pill}</span>
          <h3 id={bento.promoHeadingId} className="select-trip__bento-visual-title">
            {bento.visualTitle}
          </h3>
          <p className="select-trip__bento-visual-text">{bento.visualText}</p>
        </div>
      </div>
      <div className="select-trip__bento-aside">
        <span className="select-trip__bento-aside-logo" aria-hidden>
          <GiftBoxIcon />
        </span>
        <h3 className="select-trip__bento-aside-title">{bento.asideTitle}</h3>
        <p className="select-trip__bento-aside-copy">{bento.asideCopy}</p>
      </div>
    </section>
  )
}
