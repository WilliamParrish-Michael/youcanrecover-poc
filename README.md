# YouCanRecover — Landing Page (Proof of Concept)

A warm, trustworthy, mobile-first landing page concept for **YouCanRecover**, a California
marketing &amp; consulting service that connects individuals and families with trusted detox,
PHP, IOP, and sober-living programs.

> **Preview build.** Testimonials and statistics are illustrative samples. Crisis resources
> shown (988, SAMHSA 1-800-662-HELP) are real and accurate.

**YouCanRecover LLC** (New York State) · Owner: Jesse W · (213) 929-9003 · Jaywassnyla@gmail.com

## Highlights

- **Warm, hopeful, calm** visual language — teal for trust, amber for hope.
- **Mobile-first & fast** — a single hand-written HTML/CSS/JS build, no framework, no build step.
- **Accessible & resilient** — semantic HTML, keyboard-friendly, and **all content is visible
  without JavaScript** (motion is progressive enhancement only).
- **Conversion-focused** — persistent "Get help now" calls-to-action, a click-to-call hero,
  a floating mobile call button, and a simple callback form.
- **Responsible** — a standing crisis banner, clear "not a medical provider" disclaimer, and a
  placeholder (555) phone number so nothing rings a real person.
- **Easy to update** — plain files anyone can edit; content lives in `index.html`.

## Sections

Hero · How we help · Levels of care (Detox/Residential, PHP, IOP, Sober living) · Real stories ·
Our network &amp; partners · For families · Contact / callback form · Footer with crisis resources.

## Run it

Open `index.html` in a browser, or serve the folder:

```bash
# any static server works, e.g.
python -m http.server 8080
# then visit http://localhost:8080
```

## Structure

```
index.html            # page markup + content
assets/css/styles.css # design system + responsive layout
assets/js/main.js      # mobile nav, form confirmation, scroll reveal (enhancement only)
```

## Tech

Plain HTML5, modern CSS (grid/flex, custom properties), a touch of vanilla JS, and Google Fonts
(Fraunces + Inter). Deploys anywhere static — GitHub Pages, Netlify, Vercel, or any host.
