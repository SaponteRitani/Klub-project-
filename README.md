# Klub — Shopify Headless Theme

Premium storefront for Klub carbonated kratom beverages. Built with React + Vite + Tailwind CSS.

## Lovable Import

1. Push this repo to GitHub
2. In Lovable: New Project → Import from GitHub → select this repo
3. Edit components in `src/components/` — each section is a separate file

## Structure

- `src/components/` — All page sections (Header, Hero, ProductLineup, Story, LabResults, Wholesale, FAQ, Newsletter, Footer, CartDrawer, AgeGate)
- `src/lib/shopify.js` — Shopify Storefront API integration (fill in your credentials)
- `index.html` — SEO meta tags + JSON-LD schema

## Shopify Setup

1. Shopify Admin → Apps → Develop apps → Create custom app
2. Enable Storefront API
3. Copy token into `src/lib/shopify.js`
4. Replace static products in `ProductLineup.jsx` with `fetchProducts()`

## Images Needed

Place in `public/images/`:
- `hero-coastal.jpg` — Hero banner (coastal terrace, golden hour)
- `klub-lite.jpg` — Klub Lite product shot
- `klub-ipa.jpg` — Klub IPA product shot
- `story-terrace.jpg` — Our story section image
- `wholesale-bar.jpg` — Wholesale section image
- `og-hero.jpg` — Social sharing image (1200×630)
