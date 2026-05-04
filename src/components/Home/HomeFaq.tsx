import { useState } from 'react'
import type { HomeDummyData } from '../../pages/Home/Home.constants'

type Faq = HomeDummyData['faq']

export function HomeFaq({ faq }: { faq: Faq }) {
  const [openFaqId, setOpenFaqId] = useState<string | null>(faq.items[0]?.id ?? null)

  return (
    <section className="home__faq" id="faq">
      <div className="home__faq-inner">
        <header className="home__faq-head">
          <h2 className="home__faq-title">{faq.title}</h2>
          <p className="home__faq-sub">{faq.subtitle}</p>
        </header>
        <ul className="home__faq-list">
          {faq.items.map((item) => {
            const open = openFaqId === item.id
            const panelId = `home-faq-panel-${item.id}`
            const triggerId = `home-faq-trigger-${item.id}`
            return (
              <li key={item.id} className={`home__faq-item${open ? ' home__faq-item--open' : ''}`}>
                <button
                  type="button"
                  id={triggerId}
                  className="home__faq-trigger"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenFaqId(open ? null : item.id)}
                >
                  <span className="home__faq-icon-wrap" aria-hidden>
                    <span className="home__faq-icon">{open ? '−' : '+'}</span>
                  </span>
                  <span className="home__faq-question">{item.question}</span>
                </button>
                {open ? (
                  <p
                    id={panelId}
                    className="home__faq-answer"
                    role="region"
                    aria-labelledby={triggerId}
                  >
                    {item.answer}
                  </p>
                ) : null}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
