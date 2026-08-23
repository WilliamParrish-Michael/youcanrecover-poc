# [Company Name] — Landing Page (Proof of Concept)

A warm, trustworthy, mobile-first landing page concept for **[Company Name]**, a California
marketing &amp; consulting service that connects individuals and families with trusted detox,
PHP, IOP, and sober-living programs.

> **Preview build.** Testimonials and statistics are illustrative samples. Crisis resources
> shown (988, SAMHSA 1-800-662-HELP) are real and accurate.

**[Company Name] LLC** ([State]) · Owner: [Owner Name] · (555) 123-4567 · hello@example.com

## Highlights

- **Warm, hopeful, calm** visual language — teal for trust, amber for hope.
- **Mobile-first & fast** — a single hand-written HTML/CSS/JS build, no framework, no build step.
- **Accessible & resilient** — semantic HTML, keyboard-friendly, and **all content is visible
  without JavaScript** (motion is progressive enhancement only).
- **Conversion-focused** — persistent "Get help now" calls-to-action, a click-to-call hero,
  a floating mobile call button, and a simple callback form.
- **Responsible** — a standing 988 crisis banner, a clear "not a medical provider" disclaimer,
  and TCPA-style consent on the contact form.
- **Compliance-minded** — Privacy Policy, Terms of Use, and an Accessibility statement, plus a
  skip-to-content link, WCAG-AA color contrast, and descriptive labels throughout.
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
index.html             # landing page markup + content
privacy.html           # Privacy Policy
terms.html             # Terms of Use
accessibility.html     # Accessibility statement
thanks.html            # form success page (FormSubmit _next target)
404.html               # custom not-found page
robots.txt             # crawler directives + sitemap pointer
sitemap.xml            # search-engine sitemap
assets/css/styles.css  # design system + responsive layout
assets/js/main.js      # mobile nav, scroll reveal (enhancement only)
assets/img/og.jpg      # social-share / Open Graph preview image
```

## Contact form

The form posts to [FormSubmit.co](https://formsubmit.co) (no backend). The recipient address is set
by the email in the `<form action>`; delivery requires a one-time activation click sent to that
inbox on the first submission. There is intentionally **no auto-reply** configured.

## Reuse as a template

This POC is built to be cloned and re-skinned. When adapting it, search-and-replace these tokens:

- **Base URL** `https://williamparrish-michael.github.io/youcanrecover-poc` — in every page's
  `og:*`/`canonical` tags, plus `robots.txt`, `sitemap.xml`, and the form's `_next`.
- **Recipient email** `hello@example.com` — in the form `action` and the legal pages.
- **Phone** `(555) 123-4567` / `+15551234567` — hero, header, footer, legal pages, 404.
- **Brand name** `[Company Name]` — page titles, logo (`[Company <strong>Name</strong>]`), OG/Twitter
  tags, and body copy. Owner name placeholder is `[Owner Name]`.
- **Entity & governing law** `[Company Name] LLC` / `[State]` — footer and legal pages.
- **Brand look** — logo mark (inline SVG) and palette (CSS custom properties at the top of `styles.css`).
- Regenerate `assets/img/og.jpg` (1200×630-ish) for the new brand.

## Tech

Plain HTML5, modern CSS (grid/flex, custom properties), a touch of vanilla JS, and Google Fonts
(Fraunces + Inter). Deploys anywhere static — GitHub Pages, Netlify, Vercel, or any host.
