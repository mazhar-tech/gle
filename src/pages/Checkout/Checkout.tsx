import { type ChangeEvent, type FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  BusIcon,
  CalendarOutlineIcon,
  ChevronLeftIcon,

  LockSmallIcon,
  MailEnvelopeIcon,
  PassengerIcon,
  PhoneOutlineIcon,
  SeatIcon,
  UserPersonIcon,
} from "../../assets/icons";
import { TextField } from "../../components/TextField/TextField";
import { CHECKOUT_DUMMY_DATA } from "./Checkout.constants";
import "./Checkout.css";

export function Checkout() {
  const { navigation, page, summary, form, trust, actionBar } =
    CHECKOUT_DUMMY_DATA;

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [phone, setPhone] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <article className="checkout">
      <div className="checkout__main">
        <Link to={navigation.backTo} className="checkout__back">
          <span className="checkout__back-icon" aria-hidden>
            <ChevronLeftIcon />
          </span>
          {navigation.backLabel}
        </Link>

        <header className="checkout__header">
          <h1 className="checkout__title">{page.title}</h1>
          <p className="checkout__subtitle">{page.subtitle}</p>
        </header>

        <div className="checkout__stack">
          <section
            className="checkout__card checkout__card--summary"
            aria-label={summary.sectionTitle}
          >
            <div className="checkout__summary-head">
              <h2 className="checkout__summary-title">
                {summary.sectionTitle}
              </h2>
              <span className="checkout__summary-pill">
                {summary.statusPill}
              </span>
            </div>

            <div className="checkout__route-row">
              <div className="checkout__route-block">
                <p className="checkout__route-city">{summary.originCity}</p>
                <p className="checkout__route-detail">{summary.originDetail}</p>
              </div>
              <BusIcon />
              <div className="checkout__route-block checkout__route-block--end">
                <p className="checkout__route-city">{summary.destCity}</p>
                <p className="checkout__route-detail">{summary.destDetail}</p>
              </div>
            </div>

            <div className="checkout__meta-row">
              <div className="checkout__meta-item">
                <span className="checkout__meta-lead" aria-hidden>
                  <CalendarOutlineIcon />
                </span>
                <div>
                  <p className="checkout__meta-label">
                    {summary.meta.depart.label}
                  </p>
                  <p className="checkout__meta-value">
                    {summary.meta.depart.value}
                  </p>
                </div>
              </div>
              <div className="checkout__meta-item">
                <span
                  className="checkout__meta-lead checkout__meta-lead--seat"
                  aria-hidden
                >
                    <PassengerIcon />
                
                </span>
                <div>
                  <p className="checkout__meta-label">
                    {summary.meta.seats.label}
                  </p>
                  <p className="checkout__meta-value">
                    {summary.meta.seats.value}
                  </p>
                </div>
              </div>
              <div className="checkout__meta-item">
                <span className="checkout__meta-lead" aria-hidden>
                <SeatIcon />
                </span>
                <div>
                  <p className="checkout__meta-label">
                    {summary.meta.duration.label}
                  </p>
                  <p className="checkout__meta-value">
                    {summary.meta.duration.value}
                  </p>
                </div>
              </div>
            </div>

            <div className="checkout__fees">
              {summary.fees.map((row) => (
                <div key={row.label} className="checkout__fee-row">
                  <span className="checkout__fee-label">{row.label}</span>
                  <span className="checkout__fee-amount">{row.amount}</span>
                </div>
              ))}
              <div className="checkout__fee-row checkout__fee-row--total">
                <span className="checkout__fee-label">
                  {summary.totalLabel}
                </span>
                <span className="checkout__fee-total">
                  {summary.totalAmount}
                </span>
              </div>
            </div>
          </section>

          <form
            id="checkout-form"
            className="checkout__card checkout__card--form"
            aria-label={form.sectionTitle}
            onSubmit={handleSubmit}
          >
            <h2 className="checkout__form-title">{form.sectionTitle}</h2>
            <div className="checkout__form-fields">
              <TextField
                id={form.fields.fullName.id}
                label={form.fields.fullName.label}
                name={form.fields.fullName.name}
                value={fullName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFullName(e.target.value)
                }
                leading={<UserPersonIcon />}
                placeholder={form.fields.fullName.placeholder}
              />
              <TextField
                id={form.fields.email.id}
                label={form.fields.email.label}
                name={form.fields.email.name}
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                leading={<MailEnvelopeIcon />}
                placeholder={form.fields.email.placeholder}
              />
              <TextField
                id={form.fields.emailConfirm.id}
                label={form.fields.emailConfirm.label}
                name={form.fields.emailConfirm.name}
                value={emailConfirm}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmailConfirm(e.target.value)
                }
                leading={<MailEnvelopeIcon />}
                placeholder={form.fields.emailConfirm.placeholder}
              />
              <TextField
                id={form.fields.phone.id}
                label={form.fields.phone.label}
                name={form.fields.phone.name}
                value={phone}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPhone(e.target.value)
                }
                leading={<PhoneOutlineIcon />}
                placeholder={form.fields.phone.placeholder}
              />
            </div>

            <label className="checkout__terms">
              <input
                type="checkbox"
                name="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="checkout__terms-input"
              />
              <span className="checkout__terms-copy">{form.termsLabel}</span>
            </label>
          </form>

          <p className="checkout__trust">
            <LockSmallIcon />
            <span>{trust.text}</span>
          </p>
        </div>
      </div>

      <div
        className="checkout__action-bar"
        role="region"
        aria-label="Order total"
      >
        <div className="checkout__action-bar-inner">
          <div className="checkout__action-bar-price">
            <span className="checkout__action-bar-label">{actionBar.priceLabel}</span>
            <p className="checkout__action-bar-amount">
              <span className="checkout__action-bar-amount-main">{actionBar.priceMain}</span>
              <span className="checkout__action-bar-amount-suffix">
                {actionBar.priceFraction}
              </span>
            </p>
          </div>
          <Link
            to={actionBar.ctaHref}
            className="button button--primary checkout__cta"
          >
            <span className="button__label">{actionBar.ctaLabel}</span>
            <span className="button__icon-end" aria-hidden>
              <ArrowRightIcon />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
