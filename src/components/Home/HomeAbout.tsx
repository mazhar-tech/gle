import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '../../assets/icons'
import type { HomeDummyData } from '../../pages/Home/Home.constants'

type About = HomeDummyData['about']

export function HomeAbout({ about }: { about: About }) {
  return (
    <section className="home__about">
      <div className="home__about-inner">
        <div className="home__about-collage" aria-hidden>
          <div className="home__about-frame home__about-frame--main">
            <img src={about.collage.mainSrc} alt="" className="home__about-img" />
          </div>
          <div className="home__about-frame home__about-frame--sm">
            <img src={about.collage.secondarySrc} alt="" className="home__about-img" />
          </div>
          <div className="home__about-frame home__about-frame--xs">
            <img src={about.collage.tertiarySrc} alt="" className="home__about-img" />
          </div>
        </div>
        <div className="home__about-copy">
          <span className="home__pill home__pill--outline">
            <span className="home__pill-dot" aria-hidden />
            {about.pill}
          </span>
          <h2 className="home__about-title">{about.title}</h2>
          <p className="home__about-body">{about.body}</p>
          <Link to={about.ctaTo} className="home__btn home__btn--hero">
            <span>{about.ctaLabel}</span>
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  )
}
