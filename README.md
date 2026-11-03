# jillybeanstudios.com

The website for Jilly Bean Studios. It's plain HTML with no build step, hosted
on GitHub Pages from the `main` branch.

| File | What it is |
| --- | --- |
| `index.html` | The home page |
| `loaded-dice/privacy/index.html` | Forwards jillybeanstudios.com/loaded-dice/privacy to the policy in the game repo (`brent-miller/roll-the-dice`, `public/privacy.html`). Edit the policy there, not here. |
| `404.html` | Shown for any address that doesn't exist |
| `CNAME` | Tells GitHub Pages the site's domain. Don't delete it. |
| `fonts/` | Fraunces and Outfit, served from this site so visitors' browsers don't contact Google. Both use the SIL Open Font License (included). |
| `loaded-dice/icon-*.png` | The Loaded Dice app icon, copied from the game repo |

No cookies, analytics or third-party requests.

How the domain, DNS and HTTPS are set up: [SETUP.md](SETUP.md).

## Adding the Google Play link

In `index.html`, replace

```html
<span class="btn btn-soon">Coming soon to Google Play</span>
```

with (this is the game's app ID, so the address should be right; check it once the listing is live)

```html
<a class="btn btn-gold" href="https://play.google.com/store/apps/details?id=com.jillybeanstudios.loadeddice">Get it on Google Play</a>
```

Commit to `main` and the live site updates within a minute or two.
