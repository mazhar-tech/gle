import { ArrowRightIcon } from '../../assets/icons'
import type { HomeDummyData } from '../../pages/Home/Home.constants'

type Testimonials = HomeDummyData['testimonials']

function StarRow() {
  return (
    <div className="home__stars" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="home__star" />
      ))}
    </div>
  )
}

export function HomeTestimonials({ testimonials }: { testimonials: Testimonials }) {
  return (
    <section className="home__testimonials" id="testimonials">
      <div className="home__testimonials-inner">
        <span className="home__pill home__pill--border">{testimonials.pill}</span>
        <h2 className="home__testimonials-title">{testimonials.title}</h2>
        <p className="home__testimonials-sub">{testimonials.subtitle}</p>
        <ul className="home__testimonial-grid">
          {testimonials.items.map((t) => (
            <li key={t.id} className="home__testimonial-card">
              <p className="home__testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <StarRow />
              <div className="home__testimonial-author">
                <span className="home__testimonial-avatar" aria-hidden />
                <div>
                  <p className="home__testimonial-name">{t.name}</p>
                  <p className="home__testimonial-role">{t.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="home__testimonial-nav" aria-hidden>
          <button type="button" className="home__testimonial-arrow" aria-label="Previous">
            <ArrowRightIcon />
          </button>
          <button type="button" className="home__testimonial-arrow home__testimonial-arrow--next" aria-label="Next">
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </section>
  )
}
