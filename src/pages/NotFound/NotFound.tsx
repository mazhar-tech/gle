import { Link } from 'react-router-dom'
import './NotFound.css'

export function NotFound() {
  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <div className="not-found__card">
        <p className="not-found__code">404</p>
        <h1 id="not-found-title" className="not-found__title">
          Page not found
        </h1>
        <p className="not-found__body">The page you are looking for does not exist or has been moved.</p>
        <div className="not-found__actions">
          <Link to="/" className="button button--primary not-found__btn">
            <span className="button__label">Back to home</span>
          </Link>
          <Link to="/find-trip" className="not-found__ghost">
            Find a trip
          </Link>
        </div>
      </div>
    </section>
  )
}
