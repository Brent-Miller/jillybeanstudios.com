# Website handoff (jillybeanstudios.com)

Session: Jilly Bean · Website (`session_01UAgppN6q6bufmXzYVJLZC1`). Updated 2026-11-23.

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

Branch `privacy-pages` (session_01UAgppRUKzg7Dcfs6qTqmtB): the two privacy pages. Still to do:
browser checks at 1280/390/360, preview, Brent's go, fast-forward `main`, deploy check, report
to Main with the SHA and URLs. Waiting on Brent (manual): delete the merged branches
`site-redesign` and `game-look-update`.

## Next

1. When Loaded Dice is public on Google Play: swap "Coming soon to Google Play" in `index.html`
   for the official badge, saved in the repo (README has the snippet and the store URL), preview,
   merge.
2. When the game's look or store text changes: retake screenshots with `scripts/store-shots.cjs`
   from a separate checkout of `roll-the-dice` with its own `npm ci` (a symlinked
   `node_modules` loses the fonts), resize as in the README, update copy, preview, merge.
3. In January: update the footer year.

## Artifact pages

- Preview of the home page: https://claude.ai/artifact/FfUNez5y4Gwmm3eEJiezFQ. No separate
  source: it is `index.html` with the `@font-face` rules swapped for Google Fonts (previews
  can't load the site's own font files) and image paths made relative. Rebuild it from
  `index.html` before each preview.
- Earlier one-off pages (design draft, logo options, the ten-update proposal) are finished and
  not maintained.
