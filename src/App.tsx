import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { About } from './pages/About/About'
import { BookingDetails } from './pages/BookingDetails/BookingDetails'
import { Terms } from './pages/Terms/Terms'
import { FindTrip } from './pages/FindTrip/FindTrip'
import { FindBooking } from './pages/FindBooking/FindBooking'
import { Checkout } from './pages/Checkout/Checkout'
import { MakePayment } from './pages/MakePayment/MakePayment'
import { PaymentSuccess } from './pages/PaymentSuccess/PaymentSuccess'
import { ChooseSeats } from './pages/ChooseSeats/ChooseSeats'
import { ConfirmTrip } from './pages/ConfirmTrip/ConfirmTrip'
import { SelectTrip } from './pages/SelectTrip/SelectTrip'
import { Home } from './pages/Home/Home'
import { Tickets } from './pages/Tickets/Tickets'
import { ErrorScreen } from './pages/ErrorScreen/ErrorScreen'
import { NotFound } from './pages/NotFound/NotFound'
import { WebsiteXstill } from './pages/WebsiteXstill/WebsiteXstill'
import './App.css'

function AppRoutes() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const isWebsiteXstill = pathname === '/website-xstill'
  const showGlobalFooter = !isHome

  return (
    <div className={`app${isHome ? ' app--home' : ''}`}>
      {!isHome ? <Navbar variant={isWebsiteXstill ? 'website-xstill' : 'default'} /> : null}
      <main
        className={`app__main${isHome ? ' app__main--home' : ''}${isWebsiteXstill ? ' app__main--website-xstill' : ''}`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-trip" element={<FindTrip />} />
          <Route path="/find-booking" element={<FindBooking />} />
          <Route path="/select-trip" element={<SelectTrip />} />
          <Route path="/confirm-trip" element={<ConfirmTrip />} />
          <Route path="/choose-seats" element={<ChooseSeats />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/make-payment" element={<MakePayment />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/booking-details" element={<BookingDetails />} />
          <Route path="/website-xstill" element={<WebsiteXstill />} />
          <Route path="/error" element={<ErrorScreen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {showGlobalFooter ? <Footer /> : null}
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
