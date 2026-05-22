# Bizpinions — Deployment Guide

**Answers in 60 seconds.**  
bizpinions.com

---

## Project Structure

```
bizpinions/
├── index.html                        ← Homepage (/)
├── start-it.html                     ← /start-it
├── fund-it.html                      ← /fund-it
├── run-it.html                       ← /run-it
├── buy-it.html                       ← /buy-it
├── sell-it.html                      ← /sell-it
├── the-verdict.html                  ← /the-verdict
├── browse-all.html                   ← /browse-all
├── search.html                       ← /search
├── sba-loan-vs-conventional-loan.html ← /sba-loan-vs-conventional-loan
├── gusto-review.html                 ← /gusto-review
├── about.html                        ← /about
├── how-we-review.html                ← /how-we-review
├── newsletter.html                   ← /newsletter
├── advertise.html                    ← /advertise
├── contact.html                      ← /contact
├── css/
│   └── style.css                     ← ALL styles (edit once, updates every page)
├── js/
│   ├── components.js                 ← Shared nav + footer (edit once, updates every page)
│   └── main.js                       ← All JavaScript logic + 120-article search index
└── vercel.json                       ← Clean URL rewrites for Vercel
```

---

## Deploy to Vercel (5 minutes)

### Option A — Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project root
cd bizpinions
vercel

# Follow prompts — set project name, confirm settings
# Your site will be live at yourproject.vercel.app
```

### Option B — Vercel Dashboard (drag and drop)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **Add New → Project**
3. Click **Deploy** → drag the entire `bizpinions/` folder into the upload area
4. Click **Deploy**
5. Done — live in ~30 seconds

### Option C — GitHub + Vercel (recommended for ongoing updates)

1. Push the `bizpinions/` folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → **Add New → Project**
3. Import your GitHub repo
4. Vercel auto-deploys every time you push to `main`

---

## Custom Domain

1. In Vercel dashboard → your project → **Settings → Domains**
2. Add `bizpinions.com` and `www.bizpinions.com`
3. Update your DNS records as instructed by Vercel
4. SSL certificate is automatic

---

## How to Update the Navigation

The nav (including the stage strip) is in **one file only**:

```
js/components.js
```

Open it, find the `navHTML` variable, edit the links or text, save.  
**Every page on the site updates automatically.**

Example — to add a new nav item:
```javascript
<a class="stage-pill" href="/new-section">
  <span class="pill-icon">🆕</span>
  <span class="pill-text">New section</span>
</a>
```

Then add a rewrite in `vercel.json`:
```json
{ "source": "/new-section", "destination": "/new-section.html" }
```

---

## How to Update the Footer

The footer is also in **js/components.js**, in the `footerHTML` variable.

Edit links, add columns, change copy — save once, updates every page.

---

## How to Update All Styles

All styles are in **one file**:

```
css/style.css
```

CSS variables at the top control all brand colors:

```css
:root {
  --navy: #00274C;    ← Main brand color
  --maize: #FFCB05;   ← Accent / CTA color
  --cream: #F8F4EE;   ← Background tint
}
```

Change `--navy` and `--maize` here to rebrand the entire site.

---

## How to Add a New Article Page

1. Copy `sba-loan-vs-conventional-loan.html` as your template
2. Rename it to your article slug (e.g. `sba-loan-for-franchise.html`)
3. Update the content — title, 60-second answer box, article body
4. Add a rewrite in `vercel.json`:
   ```json
   { "source": "/sba-loan-for-franchise", "destination": "/sba-loan-for-franchise.html" }
   ```
5. Add the article to the content index in `js/main.js` (CONTENT array) so it appears in search results
6. Deploy

---

## How to Add a New Verdict Review

1. Copy `gusto-review.html` as your template
2. Rename to your review slug (e.g. `rippling-review.html`)
3. Update: product name, scores, score bars, quick facts, pros/cons, comparison table, verdict
4. Add rewrite in `vercel.json`
5. Add to CONTENT array in `js/main.js`
6. Deploy

---

## Search Index

The search feature uses a JavaScript index in `js/main.js` — no server required.

To add new articles to search, add entries to the `CONTENT` array:

```javascript
{
  title: "Your article title",
  snippet: "The 60-second answer — what gets shown in search results",
  pillar: "fund",          // start | fund | run | buy | sell | verdict
  type: "Guide",           // Guide | Review | Comparison | Warning | Best of
  time: "7 min",
  slug: "/your-article-slug"
}
```

---

## Brand Colors Reference

| Variable | Value | Usage |
|----------|-------|-------|
| `--navy` | `#00274C` | Primary brand, nav, headers |
| `--maize` | `#FFCB05` | Accent, CTAs, highlights |
| `--cream` | `#F8F4EE` | Background tint |
| `--green` | `#1A6B3C` | Fund it pillar, positive scores |
| `--amber` | `#C17A10` | Buy it pillar, caution |
| `--red` | `#A0291A` | Sell it pillar, avoid |
| `--blue` | `#1B5E9E` | Start it pillar |
| `--purple` | `#7B3FA0` | Run it pillar |

---

## Fonts

- **Bebas Neue** — Logo, large numbers, Bebas display text
- **Lora** — Headlines, article titles, serif body copy
- **Inter** — Body text, UI elements, buttons

All loaded from Google Fonts in each HTML `<head>`.

---

## Questions?

Contact: [bizpinions.com/contact](/contact)
