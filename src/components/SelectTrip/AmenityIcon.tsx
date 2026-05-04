import {
  BoltIcon,
  MonitorIcon,
  NoWifiIcon,
  PowerIcon,
  SeatIcon,
  SnackIcon,
  WifiIcon,
} from '../../assets/icons'
import type { Amenity } from '../../pages/SelectTrip/SelectTrip.constants'

export function AmenityIcon({ kind }: { kind: Amenity['icon'] }) {
  if (kind === 'wifi') {
    return <WifiIcon />
  }
  if (kind === 'no-wifi') {
    return <NoWifiIcon />
  }
  if (kind === 'monitor') {
    return <MonitorIcon />
  }
  if (kind === 'bolt') {
    return <BoltIcon />
  }
  if (kind === 'power') {
    return <PowerIcon />
  }
  if (kind === 'snack') {
    return <SnackIcon />
  }
  return <SeatIcon />
}
