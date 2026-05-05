import './About.css'

export function About() {
  return (
    <article className="about">
      <header className="about__hero">
        <span className="about__pill">About GLE</span>
        <h1 className="about__title">Built to Make Every Journey Simpler</h1>
        <p className="about__lede">
          GLE helps travelers and operators connect through a modern, reliable platform for
          booking, routing, and real-time trip management.
        </p>
      </header>

      <section className="about__split" aria-labelledby="about-mission-heading">
        <div className="about__card about__card--mission">
          <h2 id="about-mission-heading" className="about__heading">
            Our Mission
          </h2>
          <p className="about__text">
            We exist to remove friction from travel. From first search to final boarding, our
            tools are designed to help people move confidently and businesses grow sustainably.
          </p>
        </div>
        <div className="about__card about__card--vision">
          <h2 className="about__heading">Our Vision</h2>
          <p className="about__text">
            To become Africa&apos;s most trusted digital mobility platform, where every route is
            easier to discover, book, and operate.
          </p>
        </div>
      </section>

      <section className="about__stats" aria-label="Company highlights">
        <article className="about__stat">
          <h3>120+</h3>
          <p>Operators on platform</p>
        </article>
        <article className="about__stat">
          <h3>99.9%</h3>
          <p>Booking reliability</p>
        </article>
        <article className="about__stat">
          <h3>24/7</h3>
          <p>Online ticket sales</p>
        </article>
      </section>

      <section className="about__values" aria-labelledby="about-values-heading">
        <h2 id="about-values-heading" className="about__heading">
          What We Value
        </h2>
        <ul className="about__value-list">
          <li>
            <strong>Trust:</strong> Transparent pricing, secure transactions, dependable support.
          </li>
          <li>
            <strong>Speed:</strong> Fast booking flows and operational tools that save time.
          </li>
          <li>
            <strong>Growth:</strong> Solutions that scale with fleets and passenger demand.
          </li>
        </ul>
      </section>

      <section className="about__cta" aria-label="Get started">
        <p>Ready to transform how your routes run?</p>
        <a href="/find-trip">Explore Trips</a>
      </section>
    </article>
  )
}
