# Putu Simbolon Law Office Website

Static site (plain HTML/CSS/JS, no build step) for Putu Simbolon Law Office.

## Structure

- `index.html`: Home
- `about.html`: About (firm overview, founder profile, experience, education, awards)
- `practice-areas.html`: Practice Areas
- `research-policy.html`: Research & Publications (research services, focus areas, full publication list, peer review roles, speaking and media)
- `css/style.css`: shared stylesheet
- `js/main.js`: mobile nav and Contact Us dropdown behavior
- `images/`: site photography
- `favicon-32.png`, `favicon-180.png`, `favicon-512.png`: site favicon

## Before launch

Replace the placeholder contact details used throughout the site:

- WhatsApp link: `https://wa.me/62812XXXXXXX` (in every `.contact-panel`)
- Email link: `mailto:info@putusimbolonlaw.com` (in every `.contact-panel`)

Search-and-replace across all four `.html` files.

## Local preview

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

Deployed via Vercel from the `main` branch, root directory.
