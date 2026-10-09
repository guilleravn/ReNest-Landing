# ReNest Landing

Marketing page for ReNest, a secondhand marketplace for LatAm where buyers reserve an item together with a pickup slot in a public place. Built with React 19, Vite and Tailwind 4, using the same design tokens as `../ReNest-Frontend/src/index.css`.

The app lives in [ReNest-Frontend](../ReNest-Frontend) and the product rules in `../ReNest-Backend/docs/business-rules.md`; the landing copy follows those rules.

## Commands

- `npm install`
- `npm run dev`: landing on `http://localhost:5174`.
- `npm run build`: type check and production build into `dist/`.
- `npm run preview`: serve the build.

## Configuration

Every call to action links to the app. `VITE_APP_URL` sets its base URL and defaults to `https://re-nest-frontend.vercel.app`.

## Structure

- `src/sections/`: one component per landing section, composed in `src/App.tsx`.
- `src/components/`: shared pieces (buttons, logo, listing card, section heading).
- `src/components/listings.ts`: the sample listings, mirroring the backend's demo seed.
- User-facing copy is in Spanish; code and docs are in English.
