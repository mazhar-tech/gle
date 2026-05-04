import { Link } from 'react-router-dom'
import './ErrorScreen.css'

export function ErrorScreen() {
  return (
    <section className="error-screen" role="alert" aria-live="assertive">
      <div className="error-screen__card">
        <p className="error-screen__code">500</p>
        <h1 className="error-screen__title">Something went wrong</h1>
        <p className="error-screen__body">
          We could not complete your request right now. Please try again in a moment.
        </p>
        <div className="error-screen__actions">
          <Link to="/" className="button button--primary error-screen__btn">
            <span className="button__label">Go home</span>
          </Link>
          <button type="button" className="error-screen__ghost" onClick={() => window.location.reload()}>
            Try again
          </button>
        </div>
      </div>
    </section>
  )
}
