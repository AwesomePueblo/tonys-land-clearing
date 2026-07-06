# Tony's Land Clearing — Project History

## Project Info
- **Local project folder:** C:\Users\Luke2024\Documents\Projects\Tonys Land Clearing
- **Domain:** tonyslandclearing.com ✅ (purchased on GoDaddy)
- **Registrar:** GoDaddy
- **GitHub repo:** https://github.com/AwesomePueblo/tonys-land-clearing

---

## Log

### July 2026 — Project Kickoff
- Business concept: Tony's Land Clearing (rebranding from Tony's Stump Grinding — broader name to allow more job types)
- Initial site built as a page on banquotas.com at /stump-grinding/ as a prototype/demo
- Demo includes: hero, services, pricing, FAQ, and a booking calendar (calendar to be replaced with a simple quote form)
- Domain purchased: tonyslandclearing.com on GoDaddy ✅
- GitHub repo created: AwesomePueblo/tonys-land-clearing ✅
- Decided on Netlify for hosting (GitHub → Netlify pipeline, same Claude Code workflow)
- Business email planned: tony@tonyslandclearing.com

### What's Been Built (prototype on banquotas.com)
- `/stump-grinding/index.html` — full business landing page with booking calendar
- `/stump-grinding/faq.html` — 20 FAQ accordion questions across 6 categories (needs Tony's review)
- `/stump-grinding/REQUIREMENTS.md` — full requirements and outstanding items list

### Repo & Hosting Setup
- Netlify account created (GitHub OAuth), site connected to this repo: https://tonyslandworks.netlify.app
- GitHub App/integration granted write access to this repo (was initially read-only, fixed via org-level GitHub Apps settings)

### Standalone Site — First Build
- Built `index.html`, `faq.html`, and `style.css` at repo root, adapted from the banquotas.com prototype:
  - Rebranded from placeholder "Corta Stump Grinding" (Pueblo County, CO) to Tony's Land Clearing (Brentwood/Franklin, TN), phone 620-617-1838, tagline "No stump too tough!"
  - Removed BanQuotas sidebar nav and multi-site dependencies (GA tag, links to unrelated BanQuotas content) — replaced with a simple standalone top nav + footer
  - Broadened services beyond stump grinding to include Land Clearing and Tree Removal, matching the rebrand
  - Replaced the booking calendar with a quote request form (name, phone, address, service type, photo upload, notes) wired to Netlify Forms (AJAX submit, honeypot spam field)
  - Added a Land Clearing / Tree Removal "custom quote" pricing card alongside the existing stump pricing tiers
  - Added a Partners section for Brentwood Dirt Works with the fuller service list from their truck signage
  - Removed the prototype's fabricated customer testimonials (fake names/reviews) rather than carry them into the real site — will add real testimonials once Tony has them
  - FAQ content carried over largely as-is (still has the owner-verify disclaimer banner)
- Pushed to branch `claude/tonys-land-clearing-setup-vx7lgu` — **not yet merged to `main`**, so it won't show up on the live Netlify deploy (which watches `main`) until merged
- No favicon yet — dropped the `<link rel="icon">` reference rather than point at a missing file

### Next Steps
- [ ] Merge/PR `claude/tonys-land-clearing-setup-vx7lgu` into `main` so Netlify deploys the real site
- [ ] Point tonyslandclearing.com from GoDaddy to Netlify
- [ ] Set up business email tony@tonyslandclearing.com
- [ ] Set up Tony's Google account
- [ ] Set up Google Business Profile
- [ ] Get Trevor's website URL
- [ ] Add before/after photo gallery once Tony provides photos
- [ ] Tony to review and approve FAQ answers
- [ ] Confirm stump grinding pricing; land clearing/tree removal still "custom quote" only
- [ ] Add a favicon
- [ ] Add real customer testimonials once available
- [ ] Plan social Shorts marketing (POV format, target Brentwood & Franklin)
