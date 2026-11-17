# jillybeanstudios.com

The website for Jilly Bean Studios. It's plain HTML with no build step, hosted
on GitHub Pages from the `main` branch.

| File | What it is |
| --- | --- |
| `index.html` | The home page |
| `loaded-dice/privacy/index.html` | Forwards jillybeanstudios.com/loaded-dice/privacy to the policy in the game repo (`brent-miller/roll-the-dice`, `public/privacy.html`). Edit the policy there, not here. |
| `404.html` | Shown for any address that doesn't exist |
| `CNAME` | Tells GitHub Pages the site's domain. Don't delete it. |
| `loaded-dice/shots/`, `loaded-dice/share.jpg` | Screenshots and the link-preview image (see below) |
| `fonts/` | Fraunces and Outfit, served from this site so visitors' browsers don't contact Google. Both use the SIL Open Font License (included). |
| `loaded-dice/icon-*.png` | The Loaded Dice app icon, copied from the game repo |

No cookies, analytics or third-party requests.

How the domain, DNS and HTTPS are set up: [SETUP.md](SETUP.md).

## Adding the Google Play link

In `index.html`, replace

```html
<span class="soon">Coming soon to Google Play</span>
```

with Google's official "Get it on Google Play" badge, saved in this repo (for example
`loaded-dice/google-play-badge.png`, from https://play.google.com/intl/en_us/badges/) so visitors'
browsers don't contact Google until they tap it:

```html
<a href="https://play.google.com/store/apps/details?id=com.jillybeanstudios.loadeddice"><img src="/loaded-dice/google-play-badge.png" alt="Get it on Google Play" width="180" height="53"></a>
```

Commit to `main` and the live site updates within a minute or two.

## Updating the screenshots and share image

`loaded-dice/shots/*.webp` (540x960) and `loaded-dice/share.jpg` (1200x630, used when the link is
shared) come from the game repo's `scripts/store-shots.cjs`: run it against the game's dev server,
then resize `2-round.png`, `3-scoring.png`, `4-shop.png` and `5-boss.png` to 540x960 WebP
(`round`, `scoring`, `shop`, `boss`), and scale
`feature-graphic.png` to 630 px high and crop it to 1200 px wide.

## The dice tray

The tray at the top of `index.html` is a small script in the same file: five dice, three rolls,
tap to hold, and it names the best scorecard box using the game's base values. It stores nothing.
