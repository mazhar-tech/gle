import {

  WebsiteXstillHowHoldIcon,
  WebsiteXstillHowPickSeatIcon,
  WebsiteXstillHowPayIcon,
  WebsiteXstillHowSearchIcon,
  BoardPassIcon,
} from '../../assets/icons'

const HOW_IT_WORKS_STEPS = [
  {
    id: '01',
    title: 'Search',
    body: 'Passengers find trips by date and departure city in seconds.',
    tone: 'blue',
    preview: (
      <div className="website-xstill__how-preview website-xstill__how-preview--search" aria-hidden>
        <div className="website-xstill__how-search-progress">
          <span />
          <span />
        </div>
        <div className="website-xstill__how-route-tags">
          <span>Lagos</span>
          <span>→</span>
          <span>Accra</span>
        </div>
      </div>
    ),
    icon: <WebsiteXstillHowSearchIcon />,
  },
  {
    id: '02',
    title: 'Pick Seat',
    body: 'They choose their preferred seat on the live real-time map.',
    tone: 'cyan',
    preview: (
      <div className="website-xstill__how-preview website-xstill__how-preview--seat" aria-hidden>
        {Array.from({ length: 12 }).map((_, idx) => (
          <span key={idx} className={idx === 4 || idx === 5 ? 'is-active' : ''} />
        ))}
      </div>
    ),
    icon: <WebsiteXstillHowPickSeatIcon />,
  },
  {
    id: '03',
    title: 'Hold',
    body: 'The seat is locked while they complete payment, no conflicts.',
    tone: 'purple',
    preview: (
      <div className="website-xstill__how-preview website-xstill__how-preview--hold" aria-hidden>
        🔒
        <p>Seat Reserved</p>
        <span>Expires in 10:00</span>
      </div>
    ),
    icon: <WebsiteXstillHowHoldIcon />,
  },
  {
    id: '04',
    title: 'Pay',
    body: 'Payment is processed via your provider and marked instantly.',
    tone: 'green',
    preview: (
      <div className="website-xstill__how-preview website-xstill__how-preview--pay" aria-hidden>
        <div className="website-xstill__how-pay-bars">
          <span />
          <span />
          <span />
        </div>
        <div className="website-xstill__how-pay-row">
          
          <p>✓ Authorized</p>
          <span>₦18,500</span>
        </div>
      </div>
    ),
    icon: <WebsiteXstillHowPayIcon />,
  },
  {
    id: '05',
    title: 'Confirmed',
    body: 'Digital ticket is delivered instantly with route and status.',
    tone: 'orange',
    preview: (
      <div className="website-xstill__how-preview website-xstill__how-preview--confirmed" aria-hidden>
        <p> 🎟 TICKET #X-9042</p>
        <span>LOS → ACC</span>
      </div>
    ),
    icon: <BoardPassIcon />,
  },
] as const

export function WebsiteXstillHow() {
  return (
    <section className="website-xstill__how" aria-label="How booking works">
      <div className="website-xstill__how-head">
        <span className="website-xstill__how-pill">
          <span className="website-xstill__how-pill-dot" aria-hidden />
          Booking Flow
        </span>
        <h2 className="website-xstill__how-title">
          <span>5 Steps from Search</span>
          <span className="website-xstill__how-title-accent">to Confirmed Ticket</span>
        </h2>
        <p className="website-xstill__how-subtitle">
          Passengers book in minutes from any device. No queues, no confusion.
        </p>
      </div>

      <div className="website-xstill__how-flow">
        <div className="website-xstill__how-track" aria-hidden>
          {HOW_IT_WORKS_STEPS.map((step) => (
            <span key={`dot-${step.id}`} />
          ))}
        </div>

        <div className="website-xstill__how-grid">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <article key={step.id} className={`website-xstill__how-card website-xstill__how-card--${step.tone}`}>
              <div className="website-xstill__how-card-top">
                <div className="website-xstill__how-icon-wrap" aria-hidden>
                  {step.icon}
                  <span className="website-xstill__how-icon-badge">{index + 1}</span>
                </div>
                <span className="website-xstill__how-card-index" aria-hidden>
                  {step.id}
                </span>
              </div>

              {step.preview}
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              <span className="website-xstill__how-divider" aria-hidden />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
