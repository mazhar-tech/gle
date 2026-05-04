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
            return (
              <li key={item.id} className={`home__faq-item${open ? ' home__faq-item--open' : ''}`}>
                <button
                  type="button"
                  className="home__faq-trigger"
                  aria-expanded={open}
                  onClick={() => setOpenFaqId(open ? null : item.id)}
                >
                  <span className="home__faq-icon" aria-hidden>
                    {open ? '−' : '+'}
                  </span>
                  <span className="home__faq-question">{item.question}</span>
                </button>
                {open ? <p className="home__faq-answer">{item.answer}</p> : null}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
