# Website handoff (jillybeanstudios.com)

Session: Jilly Bean · Website (`session_01UAgppN6q6bufmXzYVJLZC1`). Updated 2026-11-24.

## Goal

A small, fast, static site for Jilly Bean Studios that sends players to Loaded Dice: one page,
the game's look, a dice tray you can roll, screenshots, contact and the privacy policy. No
cookies, analytics or outside requests (fonts and images are served from the site). Hosted on
GitHub Pages from `main`, custom domain and HTTPS on; DNS at Namecheap (`SETUP.md`); email on
Google Workspace.

## Decided

Not written down anywhere else yet:

- Loaded Dice's privacy pages now live here (Brent, Nov 23): `/loaded-dice/privacy/` and
  `/loaded-dice/delete-data/`, copied word for word from roll-the-dice `public/` (only the
  links between the two pages changed). Main then points the app and docs here and turns the
  github.io copies into redirects.
- Site text follows the game's store listing (`roll-the-dice/docs/STORE-LISTING.md`) and the
  game's look (`roll-the-dice/docs/DESIGN.md`). When either changes, the site follows.
- Every visual change gets a preview first (the artifact below) and goes live only after Brent's
  go: work on a branch, then fast-forward `main`.
- Repo notes stay off the public site: `_config.yml` excludes them (`docs/` added Nov 21).

## In flight

Branch `google-play-link`: Loaded Dice is live on Google Play (Nov 24), so the hero's "Coming
soon" text is now Google's official badge (Brent sent the PNG), with "Play in your browser" as an
outlined button beside it, and the facts card says "Google Play and any browser". Waiting on
Brent's go to fast-forward `main`.

## Next

1. When the game's look or store text changes: retake screenshots with `scripts/store-shots.cjs`
   from a separate checkout of `roll-the-dice` with its own `npm ci` (a symlinked
   `node_modules` loses the fonts), resize as in the README, update copy, preview, merge.
2. In January: update the footer year.

## Artifact pages

- Preview of the home page: https://claude.ai/artifact/FfUNez5y4Gwmm3eEJiezFQ. No separate
  source: it is `index.html` with the `@font-face` rules swapped for Google Fonts (previews
  can't load the site's own font files) and image paths made relative. Rebuild it from
  `index.html` before each preview.
- Privacy pages preview (one-off, Nov 23): https://claude.ai/artifact/LadsfPTV7B94kQsAxysjaB.
  Not maintained; rebuild from the two pages if their look ever changes.
- Earlier one-off pages (design draft, logo options, the ten-update proposal) are finished and
  not maintained.
