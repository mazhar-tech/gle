import {
  TicketStubIcon,
  ValueAnalyticsIcon,
  ValueAutomationIcon,
  ValueRevenueIcon,
} from '../../assets/icons'
import type { HomeDummyData } from '../../pages/Home/Home.constants'
import './HomeValue.css'

type Value = HomeDummyData['value']

const VALUE_ICONS = [ValueAutomationIcon, ValueRevenueIcon, ValueAnalyticsIcon] as const

export function HomeValue({ value }: { value: Value }) {
  return (
    <section className="home__value" id="why-xstil">
      <div className="home__value-inner">
        <header className="home__value-head">
          <span className="home__value-pill">
            <span className="home__value-pill-dot" aria-hidden />
            <span>{value.pill}</span>
          </span>
          <h2 className="home__value-title">
            <span className="home__value-title-line">{value.titleLine1}</span>
            <span className="home__value-title-line home__value-title-accent">
              {value.titleLine2}
            </span>
          </h2>
          <p className="home__value-subtitle">{value.subtitle}</p>
        </header>

        <ul className="home__value-grid">
          {value.cards.map((card, index) => {
            const Icon = VALUE_ICONS[index] ?? TicketStubIcon
            return (
              <li key={card.id} className={`home__value-card home__value-card--${card.tone}`}>
                <span className="home__value-card-tag">
                  <span className="home__value-card-tag-dot" aria-hidden />
                  <span>{card.tag}</span>
                </span>
                <span className="home__value-card-index" aria-hidden>
                  {card.index}
                </span>

                <div aria-hidden style={{ paddingTop: '1.25rem' }}>
                  <Icon />
                </div>

                <h3 className="home__value-card-title">{card.title}</h3>
                <p className="home__value-card-body">{card.body}</p>
                <span className="home__value-card-divider" aria-hidden />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
