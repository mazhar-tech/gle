import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '../../assets/icons'
import { Navbar } from '../Navbar/Navbar'
import type { HomeDummyData } from '../../pages/Home/Home.constants'

type Hero = HomeDummyData['hero']

export function HomeHero({ hero }: { hero: Hero }) {
  const heroBg = `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${hero.imageSrc})`

  return (
    <section className="home__hero" style={{ backgroundImage: heroBg }}>
      <div className="home__hero-nav">
        <Navbar variant="hero" />
      </div>
      <div className="home__hero-inner">
        <div className="home__hero-copy">
          <h1 className="home__hero-title">{hero.title}</h1>
          <p className="home__hero-subtitle">{hero.subtitle}</p>
          <Link to={hero.ctaTo} className="home__btn home__btn--hero">
            <span>{hero.ctaLabel}</span>
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  )
}
