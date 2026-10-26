# Build for Kashmir

The website for the Build for Kashmir Hackathon, organised by WOI India as part of
The Great Indian Startup Month, with J&K EDI as institutional partner. Srinagar, November 2026.

Built with Next.js (App Router, static export), TypeScript and Tailwind CSS. The only font is Poppins.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # writes the static site to /out
```

## Editing content

All the words on the site live in `content/`. You don't need to touch any component to change copy.

| File | What's in it |
| --- | --- |
| `content/site.ts` | Event name, tagline, dates, venue, registration settings, contact, socials, nav links, and every section heading and short line of copy |
| `content/tracks.ts` | The seven tracks and their focus lines |
| `content/format.ts` | The six "How it works" steps and the list of what happens at the event |
| `content/prizes.ts` | Prizes. The one with `highlight: true` gets the gold box |
| `content/schedule.ts` | The timetable. Empty for now |
| `content/judging.ts` | Judging criteria |
| `content/outcomes.ts` | "What stays in J&K" list |
| `content/team.ts` | Organisers |
| `content/partners.ts` | Confirmed partners only. Empty for now |
| `content/faq.ts` | FAQ. Items with a `// TODO` comment need confirming before launch |
| `content/pages.ts` | Code of Conduct and Rules pages |
| `content/images.ts` | Photo paths, alt text and captions |

Writing style: short sentences, plain words, no em dashes, no exclamation marks, no hype words.
Don't put anything on the site that isn't confirmed.

### Setting the dates and venue

In `content/site.ts`, set `dates` and `venue`, for example:

```ts
dates: "14 to 16 November 2026" as string | null,
venue: "SKICC, Srinagar" as string | null,
```

Until both are set, the site shows "Dates and venue announced soon". Also update the
"Where exactly is it happening?" answer in `content/faq.ts`.

### Opening registrations

In `content/site.ts`:

```ts
registrationOpen: true,
registerUrl: "https://your-form-link",
```

While `registrationOpen` is `false`, every Register button is disabled and reads
"Registrations opening soon".

### The waitlist (Netlify Forms)

While `registrationOpen` is `false`, the hero and the final section show an email form, and every
Register button reads "Join the waitlist" and jumps to it. Emails are collected by Netlify Forms.

- **Where emails go:** in the Netlify dashboard, open the site, then **Forms**, then the
  **waitlist** form. You can export the list as CSV from there.
- **One-time setup:** the first time, go to **Forms** and click **Enable form detection**, then
  redeploy. Netlify registers the form from `public/__forms.html`.
- **Get an email for each sign-up:** **Site configuration > Notifications > Emails and webhooks >
  Form submission notifications**, and add your address.
- **Spam:** a hidden honeypot field drops most bots. You can also turn on Netlify's spam filter.
- **Local testing:** `npm run dev` can't receive submissions, so the form shows "That didn't go
  through". It works once deployed on Netlify.
- **Changing fields:** if you add a field to `components/WaitlistForm.tsx`, add the same field to
  `public/__forms.html`, or Netlify will ignore it.
- **Turning it off:** set `waitlist.enabled` to `false` in `content/site.ts`. Once registrations
  open (`registrationOpen: true`), the waitlist disappears and the buttons link to `registerUrl`.

Netlify Forms only works when the site is hosted on Netlify. On another host, the form will need a
different backend.

### Adding the schedule

Fill the `schedule` array in `content/schedule.ts` (there's an example in the file). The section
switches from "coming soon" to day tabs with a timetable on its own.

### Adding partners

Only once a partner has confirmed in writing: put their logo in `public/logos/` (SVG preferred,
light version for a dark background) and add an entry to `content/partners.ts`. Partners are
grouped by `tier`. While the list is empty, the site shows a "Want to partner?" line instead.

### Adding organiser logos

Put the file in `public/logos/` and set `logo: "/logos/your-file.svg"` for that organiser in
`content/team.ts`. While `logo` is `null`, the name is shown as text.

## Link preview image

When the link is pasted into WhatsApp, LinkedIn, X or Slack, the preview shows
`app/opengraph-image.jpg`. To change it, replace that file with a 1200 × 630 JPEG under 300 KB
(WhatsApp skips large images) and update the description in `app/opengraph-image.alt.txt`.

## Swapping photos

See `public/images/README.md`. Short version: replace the file using the same name, then update
the alt text and caption in `content/images.ts`.

## Before launch

- Set the real domain in `site.url` (`content/site.ts`). It's used for canonical links, the
  sitemap and social previews.
- Search the code for `TODO` and confirm each one (team size, food, travel, IP terms, rules).
- Replace every placeholder photo.
- Add social links in `site.socials`. Empty ones are hidden.

## Deploying

The site is a fully static export (`output: "export"` in `next.config.ts`).

**Netlify (recommended, needed for the waitlist):** import the repo. `netlify.toml` already sets the
build command (`npm run build`) and the publish folder (`out`). Then enable form detection (see
"The waitlist" above).

**Vercel:** import the repo, keep the defaults (framework: Next.js), deploy. The waitlist form will
not receive submissions there.

**Anywhere else (Netlify, Cloudflare Pages, S3, Nginx):** run `npm run build` and upload the `out/`
folder. Pages are written as `rules.html`, `code-of-conduct.html` etc., so configure the host to
serve `/rules` from `rules.html` (most static hosts do this already).

## Design rules (so the site stays consistent)

- Colours are Tailwind tokens defined in `app/globals.css`: `ink`, `surface`, `line`, `paper`,
  `muted`, `saffron` (the one accent) and `chinar` (rare, small details only).
- Flat surfaces only. No gradients, glows, blur, glass effects or shadows. The one deliberate
  exception: the hero and chinar illustrations fade into the page through a CSS mask
  (`fade-y` / `fade-b` in `app/globals.css`). The images themselves are never tinted.
- Small radii (0 to 6px). Thin 1px lines between rows and sections.
- Motion is limited to hover states, the FAQ, and one fade-up on scroll. All of it is turned off
  for people who prefer reduced motion.
