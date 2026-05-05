import "./WebsiteXstill.css";
import { HomeValue } from "../../components/Home/HomeValue";
import { HOME_DUMMY_DATA } from "../Home/Home.constants";
import { WebsiteXstillContact } from "../../components/WebsiteXstill/WebsiteXstillContact";
import { WebsiteXstillHero } from "../../components/WebsiteXstill/WebsiteXstillHero";
import { WebsiteXstillHow } from "../../components/WebsiteXstill/WebsiteXstillHow";
import { WebsiteXstillLaunch } from "../../components/WebsiteXstill/WebsiteXstillLaunch";
import { WebsiteXstillFeatures } from "../../components/WebsiteXstill/WebsiteXstillFeatures";
import { WebsiteXstillPricing } from "../../components/WebsiteXstill/WebsiteXstillPricing";
import { WebsiteXstillSearchBar } from "../../components/WebsiteXstill/WebsiteXstillSearchBar";
import { WebsiteXstillStats } from "../../components/WebsiteXstill/WebsiteXstillStats";
import { HomePopularRoutes } from "../../components/Home/HomePopularRoutes";
import { ScrollReveal } from "../../components/Animation/ScrollReveal";

export function WebsiteXstill() {
  const d = HOME_DUMMY_DATA;

  return (
    <article className="website-xstill">
      <div
        className="website-xstill__glow website-xstill__glow--top-right"
        aria-hidden
      />
      <div
        className="website-xstill__glow website-xstill__glow--bottom-left"
        aria-hidden
      />
      <div
        className="website-xstill__glow website-xstill__glow--bottom-right"
        aria-hidden
      />

      <div className="website-xstill__inner">
        <WebsiteXstillHero />
        <ScrollReveal delay={0.04}>
          <WebsiteXstillStats />
        </ScrollReveal>
        <ScrollReveal delay={0.07} className="website-xstill__search-layer">
          <WebsiteXstillSearchBar />
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="website-xstill__popular-layer">
          <HomePopularRoutes popularRoutes={d.popularRoutes} />
        </ScrollReveal>
        <ScrollReveal delay={0.13}>
          <HomeValue value={d.value} />
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <WebsiteXstillHow />
        </ScrollReveal>
        <ScrollReveal delay={0.19}>
          <WebsiteXstillLaunch />
        </ScrollReveal>
        <ScrollReveal delay={0.22}>
          <WebsiteXstillFeatures />
        </ScrollReveal>
        <ScrollReveal delay={0.25}>
          <WebsiteXstillPricing />
        </ScrollReveal>
        <ScrollReveal delay={0.28}>
          <WebsiteXstillContact />
        </ScrollReveal>
      </div>
    </article>
  );
}
