# GLE Travel Frontend

Front-end web app for the GLE booking journey built with React, TypeScript, and Vite.

This project covers the main user flow:
- Home discovery
- Trip search and selection
- Seat selection
- Checkout and payment
- Ticket and boarding pass view

---

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- ESLint
- `qrcode.react` (for real ticket QR generation)

---

## Prerequisites

- Node.js 18+ (recommended LTS)
- npm 9+

---

## Setup

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Default local URL is usually:

- [http://localhost:5173](http://localhost:5173)

---

## Available Scripts

- `npm run dev` - start local development server
- `npm run build` - TypeScript build + Vite production bundle
- `npm run lint` - run ESLint checks
- `npm run preview` - preview the production build locally

---

## App Routes

- `/` - Home
- `/find-trip` - Find Trip
- `/find-booking` - Find Booking
- `/select-trip` - Select Trip
- `/confirm-trip` - Confirm Trip
- `/choose-seats` - Choose Seats
- `/checkout` - Checkout
- `/make-payment` - Make Payment
- `/payment-success` - Payment Success
- `/tickets` - Tickets and boarding passes
- `/about` - About
- `/terms` - Terms
- `/booking-details` - Booking Details
- `/error` - Designed error screen
- `*` - 404 page not found

---

## Project Structure

```text
src/
  assets/
    icons/          # Reusable icon components
    images/         # Static images
  components/       # Reusable UI grouped by feature
    Home/
    SelectTrip/
    ChooseSeats/
    Tickets/
    Navbar/
    Footer/
    ...
  pages/            # Route-level pages (+ page constants/styles)
  styles/           # Global styles and design tokens
```

---

## Conventions Used

- Route containers live in `src/pages`.
- Reusable and section-level UI is moved into `src/components/<Feature>`.
- Feature copy and static data are stored in `*.constants.ts` files.
- Shared icons should be created in `src/assets/icons` and exported through `src/assets/icons/index.ts`.

---

## Recent Updates

- Home, Select Trip, Choose Seats, and Tickets pages were split into feature components.
- Tickets page now uses real QR codes generated with `qrcode.react`.
- Added dedicated error screens:
  - `ErrorScreen` (`/error`)
  - `NotFound` (`*`)

---

## Build Verification

Run:

```bash
npm run lint
npm run build
```

Both should pass before merging changes.
