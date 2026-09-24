# InstaLaw Group website

Next.js App Router, TypeScript, Tailwind CSS, and ESLint. Personal injury is the primary practice; immigration is secondary.

```sh
npm ci
npm run dev -- -p 3001
```

Production checks:

```sh
npm run lint
npm run build
```

## Content and configuration
- `lib/site.ts`: firm contact information, canonical origin, shared FAQs.
- `lib/practices.ts`: five injury practice pages.
- `components/`: header, navigation, footer, calls to action, email preparation form.
- `app/`: homepage, overview/service pages, attorney, contact, privacy, SF service area, metadata endpoints.
- `docs/RESEARCH.md`: sources, owner decisions, contradictions and outstanding factual checks.

`NEXT_PUBLIC_SITE_URL` optionally sets the public HTTPS origin. Default: `https://aria-website-lyart-three.vercel.app`. Set it to the custom domain only when the new site is live there, then rebuild. Do not include a trailing path.

## Contact behavior
Phone and email are live links using the owner's confirmed InstaLaw contact details. The form prepares an email locally and asks the visitor to open their email app and send it. It does not submit or store a lead. A direct intake integration is intentionally not configured per the owner's preference.

## Deployment
Use Vercel's Next.js framework preset, repository root, and default build/output settings. Changes are local until committed and pushed. Confirm the outstanding address, credential, and attorney-copy items in `docs/RESEARCH.md` before public launch. Search rankings depend on content, local business profile consistency, competition, and ongoing work; metadata alone does not guarantee placement.

## Local cloud-file issue
The Desktop folder returned empty contents for cloud-only dependencies and `next-env.d.ts` during setup. These have been restored, and build/lint now pass in the original project folder. If this recurs, keep project files downloaded in Finder; `npm ci` restores dependencies. The development preview runs from this folder on port 3001.
