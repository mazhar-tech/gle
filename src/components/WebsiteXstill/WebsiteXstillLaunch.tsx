import {
  WebsiteXstillLaunchFirstIcon,
  WebsiteXstillLaunchFourthIcon,
  WebsiteXstillLaunchNoteIcon,
  WebsiteXstillLaunchSecondIcon,
  WebsiteXstillLaunchThirdIcon,
} from '../../assets/icons'
import {
  LAUNCH_CHECKLIST,
  LAUNCH_CONTENT,
  LAUNCH_METRICS,
} from './WebsiteXstillLaunch.constants'

const CHECKLIST_ICONS = {
  seat: <WebsiteXstillLaunchFirstIcon />,
  route: <WebsiteXstillLaunchSecondIcon />,
  ticket: <WebsiteXstillLaunchThirdIcon />,
  monitor: <WebsiteXstillLaunchFourthIcon />,
} as const

export function WebsiteXstillLaunch() {
  return (
    <section className="website-xstill__launch-wrap">
      <section className="website-xstill__launch" aria-label="Quick to launch">
        <div className="website-xstill__launch-glow website-xstill__launch-glow--top-left" aria-hidden />
        <div className="website-xstill__launch-glow website-xstill__launch-glow--bottom-center" aria-hidden />
        <div className="website-xstill__launch-glow website-xstill__launch-glow--mid-right" aria-hidden />
        <div className="website-xstill__launch-overlay" aria-hidden />

        <div className="website-xstill__launch-inner">
          <div className="website-xstill__launch-copy">
            <span className="website-xstill__launch-pill">
              <span className="website-xstill__launch-pill-dot" aria-hidden />
              {LAUNCH_CONTENT.pill}
            </span>
            <h2 className="website-xstill__launch-title">
              Start Taking Bookings
              <br />
              in Days — Not Months
            </h2>
            <p className="website-xstill__launch-desc">{LAUNCH_CONTENT.description}</p>

            <ul className="website-xstill__launch-list">
              {LAUNCH_CHECKLIST.map((item) => (
                <li key={item.id}>
                  <span className="website-xstill__launch-list-icon" aria-hidden>
                    {CHECKLIST_ICONS[item.icon]}
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <button type="button" className="website-xstill__launch-btn">{LAUNCH_CONTENT.ctaLabel}</button>
          </div>

          <div className="website-xstill__launch-metrics">
            {LAUNCH_METRICS.map((metric) => (
              <article
                key={metric.id}
                className={`website-xstill__launch-metric website-xstill__launch-metric--${metric.tone}`}
              >
                <span className="website-xstill__launch-metric-bar" aria-hidden />
                <div className="website-xstill__launch-metric-body">
                  <h3>{metric.value}</h3>
                  <p>{metric.title}</p>
                  <small>{metric.caption}</small>
                </div>
              </article>
            ))}

            <div className="website-xstill__launch-note">
              <span className="website-xstill__launch-note-icon" aria-hidden>
                <WebsiteXstillLaunchNoteIcon />
              </span>
              <p>{LAUNCH_CONTENT.note}</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  ) 
}
