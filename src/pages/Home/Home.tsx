import { HOME_DUMMY_DATA } from './Home.constants'
import { HomeAbout } from '../../components/Home/HomeAbout'
import { HomeFaq } from '../../components/Home/HomeFaq'
import { HomeFeatures } from '../../components/Home/HomeFeatures'
import { HomeHero } from '../../components/Home/HomeHero'
import { HomeSearchCard } from '../../components/Home/HomeSearchCard'
import { HomeSiteFooter } from '../../components/Home/HomeSiteFooter'
import { HomeTestimonials } from '../../components/Home/HomeTestimonials'
import { HomeTrips } from '../../components/Home/HomeTrips'
import { ScrollReveal } from '../../components/Animation/ScrollReveal'
import './Home.css'

export function Home() {
  const d = HOME_DUMMY_DATA
  return (
    <article className="home">
      <HomeHero hero={d.hero} />
      <ScrollReveal className="home__search-reveal">
        <HomeSearchCard search={d.search} />
      </ScrollReveal>
      <ScrollReveal delay={0.07}>
        <HomeTrips trips={d.trips} />
      </ScrollReveal>
      <ScrollReveal delay={0.13}>
        <HomeAbout about={d.about} />
      </ScrollReveal>
      <ScrollReveal delay={0.19}>
        <HomeFeatures features={d.features} />
      </ScrollReveal>
      <ScrollReveal delay={0.25}>
        <HomeTestimonials testimonials={d.testimonials} />
      </ScrollReveal>
      <ScrollReveal delay={0.28}>
        <HomeFaq faq={d.faq} />
      </ScrollReveal>
      <HomeSiteFooter siteFooter={d.siteFooter} />
      <div className="home__tail-spacer" aria-hidden />
    </article>
  )
}
