import { SeatPerkIcon, UsbPerkIcon, WifiPerkIcon } from '../../assets/icons'
import { AmenityIcon } from '../SelectTrip/AmenityIcon'
import type { Amenity } from '../../pages/SelectTrip/SelectTrip.constants'

type Experience = {
  eyebrow: string
  perks: ReadonlyArray<{ label: string; icon: Amenity['icon'] }>
}

type Cabin = {
  imageSrc: string
  imageAlt: string
  eyebrow: string
  body: string
}

export function ChooseSeatsExperienceAside({
  experience,
  cabin,
}: {
  experience: Experience
  cabin: Cabin
}) {
  return (
    <aside className="choose-seats__side" aria-label="Trip experience">
      <section className="choose-seats__card choose-seats__card--experience">
        <h3 className="choose-seats__experience-eyebrow">{experience.eyebrow}</h3>
        <ul className="choose-seats__perk-list">
          {experience.perks.map((perk) => (
            <li key={perk.label} className="choose-seats__perk">
              <span className="choose-seats__perk-icon" aria-hidden>
                {perk.icon === 'wifi' ? (
                  <WifiPerkIcon />
                ) : perk.icon === 'bolt' ? (
                  <UsbPerkIcon />
                ) : perk.icon === 'seat' ? (
                  <SeatPerkIcon />
                ) : (
                  <AmenityIcon kind={perk.icon} />
                )}
              </span>
              <span className="choose-seats__perk-text">{perk.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="choose-seats__card choose-seats__card--cabin">
        <img
          src={cabin.imageSrc}
          alt={cabin.imageAlt}
          className="choose-seats__cabin-img"
          loading="lazy"
          decoding="async"
        />
        <div className="choose-seats__cabin-body">
          <p className="choose-seats__cabin-eyebrow">{cabin.eyebrow}</p>
          <p className="choose-seats__cabin-copy">{cabin.body}</p>
        </div>
      </div>
    </aside>
  )
}
