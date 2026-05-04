import './About.css'

export function About() {
  return (
    <article className="about">
      <header className="about__header">
        <h1 className="about__title">About</h1>
        <p className="about__lede">
          Second route for checking navigation and layout across breakpoints.
        </p>
      </header>
      <section className="about__section" aria-labelledby="about-content-heading">
        <h2 id="about-content-heading" className="about__heading">
          Details
        </h2>
        <p className="about__text">
          Pair each screen with a single TSX module and one CSS file. Adjust
          spacing and type using tokens from globals.css.
        </p>
      </section>
    </article>
  )
}
