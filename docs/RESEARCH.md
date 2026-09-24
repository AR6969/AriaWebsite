# Content research and launch decisions

Research date: September 23, 2026. Brand confirmed by owner: **InstaLaw Group**. Owner explicitly chose **888-383-8022** and **phone/email only** for inquiries. Public email: info@instalawgroup.com.

## Sources reviewed
- https://www.instalawgroup.com/ — personal injury and immigration, free 10-minute initial consultation, contact details and locations.
- https://www.instalawgroup.com/personal-injury — car accidents, medical malpractice, wrongful death, slip/fall, workplace accidents; contingency fees.
- https://www.instalawgroup.com/immigration — employment visas, citizenship, family petitions, U/T visas and VAWA, fiancé visas, student visas.
- https://www.instalawgroup.com/about — firm approach. No detailed attorney education record.
- https://www.instalawgroup.com/contact-us — addresses and contact.
- https://www.instalawgroup.com/check-eligibility — long multi-step intake. Includes abandoned Webflow template text; do not reuse its submission handling.
- https://pacificlawfirm.com/ — same five injury services; different phone/email/address; lists Aria and three staff members.
- Pacific subpages read: /our-firm/, /meet-our-team/, /locations/, /faqs/, /personal-injury/, /car-accidents/, /medical-malpractice/, /wrongful-death/, /slip-fall/, /workplace-accidents/, /testimonials/. Direct HTTPS fetch used because the web reader could not open this domain. Several injury pages are headed Seattle despite San Francisco homepage branding. Locations page adds no reliable office detail.
- https://apps.calbar.ca.gov/attorney/Licensee/Detail/339638 — Aria Naranjo Noosha, active, admitted November 18, 2021. Lists personal injury, malpractice, immigration, professional liability; attorney/staff Spanish; law school information unavailable. Address 535 Mission Street Floor 14, SF 94105; phone 415-645-4510. Treat language information as self-reported, not independent certification.
- User supplied Washington admission: bar 63731, admitted 2025; used as owner-supplied fact, not independently verified status.
- `instalaw group - Google Search.pdf`: dated September 23, 2026, Google review snapshot (5.0 / 6 reviews), phone 888-383-8022, address 838 Market St Fl 4. Contains Maria Jimenez and Cara Lenoir reviews.
- `Aria Noosha _ LinkedIn.pdf`: identifies attorney, but exported document contains no usable education or work-history detail.
- `Blog - InstaLaw.pdf`: confirms contingency fee and immigration topics; no old policy articles reproduced as current legal advice.
- All supplied screenshots inspected: one deployment settings screen, one Google business panel, eight existing intake screens.

## Conflicts / TODO before launch
1. **Address decision (Sept 23, 2026): owner chose 985 Oak St, SF 94117 (instalawgroup.com) as primary; all four instalawgroup.com offices listed in footer.** Google Business Profile still shows 838 Market St Fl 4 — update GBP to match or local rankings suffer. Seattle is a PMB (mailbox), which Google does not allow as a business location. Previous note: InstaLaw: 985 Oak St, SF 94117. Pacific and California Bar: 535 Mission St, Floor 14, SF 94105. User Google capture: 838 Market St Fl 4, SF 94102. Owner selected InstaLaw *numbers*, not a street address. No street address or PostalAddress schema is published. San Francisco page is a service-area page. Ask before visiting language is intentional.
2. **TODO: verify other offices.** InstaLaw lists Sacramento (1499 12th St), Los Angeles (404 W 2nd St), and Seattle (600 1st Ave, Ste 102, PMB 2560). Seattle includes a private mailbox. Cities can be service areas; no claim of walk-in offices and no invented local business branches.
3. **Harvard credential: owner-confirmed J.D., Harvard Law School** (confirmed via site builder, Sept 23, 2026). Not independently verified (Cal Bar lists no law school). Published on home, attorney, and team pages. **TODO: add graduation year if available.**
4. **TODO: independently confirm Washington current status** before launch. Admission number/year were explicitly provided by owner.
5. **TODO: confirm contingency expense language and final attorney copy review.** No percentages or blanket promise of zero costs. Fees/expenses governed by signed agreement. Immigration terms kept separate.
6. Pacific contains generic named testimonials without independent corroboration. Not used. No stars, aggregate ratings, or result figures published. Cara Lenoir's exact excerpt comes from the supplied Google PDF; no review schema. Original complete review: “Aria and the team were super helpful throughout the process after my accident. It was a total whirlwind and they kept in touch with me about what was going on. It relieved a lot of stress and allowed me to focus on my recovery. Thanks Instalaw!”
7. **TODO: choose canonical production domain before moving domains.** Current default matches this project's Vercel URL. Set NEXT_PUBLIC_SITE_URL to the final HTTPS origin and rebuild when the real domain is connected. Do not switch canonical to the old site before migration.

## Implementation choices
- Original warm-paper/ink/copper visual design, serif editorial headings, restrained motion; real Aria portrait only.
- Homepage + PI overview + five substantial supported injury pages + attorney + immigration + SF service-area + contact + privacy.
- Immigration categories consolidated on one substantial page; no thin child or duplicated city pages.
- Phone/email only per owner. Contact form composes mailto locally; explicit user Send action required. No fake successful-submission state, API, or storage of inquiries.
- Per-page titles, descriptions, canonical/OpenGraph/Twitter metadata; sitemap, robots, icon, social image; LegalService, Person, breadcrumb and visible-FAQ schema; no review/result schema.
- Root source PDFs, ZIPs and screenshots preserved locally. Do not upload personal source materials as website assets.

## Team photos
Team: Aria Noosha (founder & attorney), Carlos Mauricio (paralegal), Alejandra Naranjo (case manager), Beau Brines (case manager). Roles from pacificlawfirm.com/meet-our-team; bios rewritten for InstaLaw without outcome claims. Photos in `public/team/` come from the owner-supplied headshot PDFs/ZIPs (the Gemini-generated set the owner chose), cropped to remove the corner watermark. Aria's photo on the site now uses the office portraits instead of the full-length doorway shot.

## SEO / conversion audit (Sept 23, 2026)
- Keyword H1s on every page (e.g. "San Francisco Car Accident Lawyer"); slogan headings and decorative labels removed.
- Homepage shows: free consultation, no attorney fees unless recovery, Harvard Law J.D., CA/WA licenses, 5.0 Google rating (6 reviews). **Keep the rating/count current**, or remove it if it drops. No review schema (Google ignores self-serving LocalBusiness review markup).
- Header now has a click-to-call phone number on desktop; mobile has a sticky call bar.
- Open items that need an owner decision: street address for NAP/LocalBusiness schema (see TODO 1), real form submission instead of mailto, production domain (TODO 7), Big Law experience details, Spanish-language service claim.

## Experience (from owner-supplied LinkedIn screenshot)
Orrick, Herrington & Sutcliffe LLP: Summer Associate Jun–Aug 2020; Attorney Jun 2020–Sep 2023, SF Bay Area. U.S. DOJ Legal Associate & Innovation Intern, May–Aug 2019. Harvard Law Entrepreneurship Project, Oct–Dec 2018. Harvard Law School J.D. 2018–2021. Orrick practice group not stated, so the site does not claim a specific practice area there.

## Client video reviews (Sept 23, 2026)
Nine owner-supplied Vimeo testimonials (lib/videos.ts), shown on /reviews and four on the homepage. Thumbnails saved locally in public/reviews/; the Vimeo player loads only on click. Every video block has the California testimonial disclaimer.
- **TODO: Vimeo embed privacy.** The player would not load in automated testing, which suggests domain-restricted embeds. In Vimeo → each video → Privacy → "Where can this be embedded?", allow the production domain (and the Vercel preview domain).
- **TODO: confirm each person is an actual client and consented to web use.** If any testimonial mentions a dollar amount or result, it needs review before launch.
- Improvement: add captions/transcripts on Vimeo; transcripts on the page would help SEO.

## Live Google rating
`lib/google-rating.ts` pulls rating + review count from the Google Places API (refreshed daily). Set `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID` in Vercel env vars. Without them it shows the last known 5.0. The review count stays hidden until it reaches `SHOW_COUNT_FROM` (25).

## Lead form and conversion tracking (Vercel environment variables)
- `RESEND_API_KEY`, `LEAD_FROM_EMAIL` (sender on a domain verified in Resend, e.g. `website@instalawgroup.com`), optional `LEAD_TO_EMAIL` (defaults to info@instalawgroup.com). Without these, the form falls back to preparing an email on the visitor's device.
- `NEXT_PUBLIC_GA_ID` (GA4 measurement ID). Events: `phone_call_click`, `email_click`, `generate_lead`. Mark `phone_call_click` and `generate_lead` as key events in GA4.
- Privacy page updated to describe form delivery, Google Analytics, and Vimeo.
