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

## Contact details

The "Contact Us" dropdown on every page links to:

- WhatsApp: `https://wa.me/6281139999789`
- Email: `mailto:c.simbolon9@gmail.com`

To change either, search and replace across all four `.html` files.

## Local preview

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

Deployed via Vercel from the `main` branch, root directory.
