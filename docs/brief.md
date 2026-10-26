# Build the website for "Build for Kashmir Hackathon by WOI India"

You are building the official website for a hackathon in Srinagar, Jammu & Kashmir. Read this whole brief before writing any code. Start by showing me a short plan (file structure, sections, components), then build it section by section. Run `npm run lint` and `npm run build` at the end and fix every error.

---

## 1. The event (source of truth for all copy)

- **Name:** Build for Kashmir Hackathon
- **Organised by:** WOI India, as part of The Great Indian Startup Month (GISM)
- **Institutional partner:** Entrepreneurship Development Institute of Jammu & Kashmir (J&K EDI)
- **Tagline:** Ideas from the valley, built for the valley.
- **City:** Srinagar, Jammu & Kashmir
- **When:** November 2026. Exact dates and venue are not final yet. Show "Dates and venue announced soon" until they are set in config.
- **Expected attendance:** 1,500 to 2,000 people across the hackathon and summit
- **Who it is for:** Students, developers, designers, researchers, aspiring founders and startup teams. You don't need to be a hardcore coder. Anyone building a solution with technology is welcome.
- **Format:** A hackathon with technical workshops and structured mentorship, ending in final demos and the Innovation Summit & Awards
- **Cost to participants:** Free

### What happens at the event
1. **Main Hackathon:** teams build working prototypes on real J&K problem statements
2. **Technical Workshops:** AI-assisted development, generative AI, product engineering, data, rapid prototyping
3. **Structured Mentorship:** every team gets assigned mentors for scheduled technical, product, business and pitch reviews
4. **Startup & Industry Engagement:** founder conversations, startup demos, networking
5. **Final Demos:** shortlisted teams present to an expert jury
6. **Innovation Summit & Awards:** closing summit with institutional leaders, industry voices and the awards

### How the hackathon works (6 steps)
1. Pick a real problem: teams choose a curated J&K challenge
2. Onboarding: tools, resources and technical setup
3. Build with mentors: guidance throughout the build
4. Progress reviews: checkpoints and technical help
5. Submit your MVP: a working prototype
6. Demo to the jury: final presentations and awards

### Tracks (problem areas)
| Track | Focus |
|---|---|
| Horticulture & Agriculture | Market access, storage and price discovery for apple, saffron and walnut growers |
| Tourism | Off-season demand and digital discovery beyond the few peak months |
| Handicrafts & Artisans | Proof of authenticity and online market access for Pashmina, papier-mâché and other crafts |
| Public Services | Access for remote and winter-affected areas |
| Environment | Flood early warning and Dal Lake conservation |
| Healthcare | Telehealth for remote communities |
| Youth Employment | Skills and local tech jobs so young people don't have to leave the state |

Note on the page: "Final problem statements are being prepared with J&K EDI and government departments."

### Rewards
- **₹2 lakh prize pool**, plus AI tool credits from technology partners
- **3 months of Startup School mentorship** for winning teams
- **6 months of workspace at Startup Park, Bengaluru** for winning teams
- **1 month of Startup School mentorship for every participating team**

### Judging criteria
1. Relevance to the problem statement
2. Originality and quality of the solution
3. Technical implementation
4. Usability and user experience
5. Practical feasibility and potential impact
6. Demo quality and clarity
7. Potential for continued development

Jury: technical, product, founder and industry experts.

### What stays in J&K after the event
- Structured mentoring for selected teams
- Solutions piloted with relevant J&K departments
- Winning teams incubated through J&K EDI
- A local mentor and developer community
- An open repository of problem statements and code
- An annual edition of the hackathon

### Past work by WOI India (for credibility)
- **Tech for Good Hackathon, Bengaluru, 2025:** climate tech, governance, civic space, healthcare and environment
- **Quantum for Social Good Hackathon, 2026:** sustainability, healthcare, security and privacy, social impact

### Technology partners
Partners are **being approached, not confirmed**. Do NOT show any company logos as partners. Build a partners section that reads from `content/partners.ts`, renders nothing when the list is empty, and shows a "Partner with us" block with the contact email instead.

### Contact
- Pankaj Madaan, Head, Marketing and Partnerships, WOI India
- pankaj@woiindia.com
- woiindia.com · thegreatindianstartupmonth.com

---

## 2. Tech stack

- Next.js (latest stable, App Router) with TypeScript
- Tailwind CSS (latest stable)
- Poppins via `next/font/google`, weights 300, 400, 500, 600. **Poppins only. No second font, no monospace font.**
- No UI kits (no shadcn, no MUI, no Chakra). Write the components yourself.
- No animation libraries (no Framer Motion, no GSAP, no Lottie). Use plain CSS transitions only.
- No icon packs full of decorative icons. If an icon is truly needed (arrow, plus/minus for FAQ, menu), use small inline SVGs.
- Must work as a static export (`output: 'export'`), so it can deploy anywhere, Vercel included.
- Ask me before adding any dependency that isn't listed here.

### Content structure
Keep all copy out of components so non-developers can edit it:
```
content/
  site.ts        // name, tagline, dates, venue, registerUrl, registrationOpen, contact, socials
  tracks.ts
  schedule.ts    // empty array for now; section shows "Full schedule coming soon"
  prizes.ts
  judging.ts
  faq.ts
  partners.ts    // empty array for now
  team.ts        // organisers
```
`registerUrl` is a placeholder (`#`) for now. When `registrationOpen` is false, buttons read "Registrations opening soon" and are disabled.

---

## 3. Design direction

Picture a well-made event poster or a printed festival programme, not a SaaS landing page. Confident type, plenty of black space, strict alignment, real content. It should look like a designer made deliberate decisions.

### Colour
- Background: near-black `#0B0B0B`; secondary surfaces `#141414`; lines `#262626`
- Text: off-white `#F2EFE9`; muted text `#9A958D`
- **One accent:** saffron gold `#F5B70A`, used sparingly for the primary button, small labels, active states and the occasional underline. Never as a background wash.
- Secondary accent (very rare): chinar green `#1E7A46`, only for small details like a track tag or status dot
- Solid colours only. Every surface is flat.

### Typography
- Huge hero headline (clamp roughly 56px to 140px), weight 500, tight line-height (1.0–1.05), tight tracking
- Section labels: small, uppercase, letter-spaced, gold, e.g. `03 / TRACKS`
- Body: 16–18px, weight 300–400, line-height 1.6, max width about 65 characters
- Left-aligned almost everywhere. Center only the final CTA if it really looks better.

### Layout
- 12-column grid, generous gutters, max width around 1280px
- Thin 1px divider lines between sections and inside lists (like a printed programme)
- Numbered lists, real tables, and rows instead of icon cards
- Asymmetric layouts are good: label on the left in a narrow column, content on the right
- Section spacing roughly 120–160px on desktop, 72–96px on mobile

### Imagery
- Real photography of Kashmir (Dal Lake, shikaras, chinar trees, Srinagar streets, winter) and real photos of people at hackathons
- Put placeholders in `/public/images/` with clear filenames (`hero-dal-lake.jpg`, `people-hacking-01.jpg` etc.) and a `public/images/README.md` listing what photo goes where
- Images can be full colour or slightly desaturated. No colour overlays or gradient fades on photos.
- Light film grain or a halftone texture on one or two images is fine, done in CSS or baked into the image

### Motion
- Minimal: hover underlines, button colour changes, FAQ open and close, a simple fade-up on scroll (opacity and 8px translate, once per element)
- Respect `prefers-reduced-motion` (turn everything off)

---

## 4. STRICTLY AVOID (anything that looks AI-generated or templated)

Visual:
- Gradients of any kind: background, text, borders, buttons, mesh, aurora
- Glows, neon, blurred colour blobs, spotlight effects, radial glows behind headings
- Glassmorphism, frosted panels, backdrop blur cards
- Floating particles, starfields, animated grids, dot-matrix backgrounds, noise orbs, 3D spheres, abstract "AI brain" or circuit visuals
- Bento grids of identical rounded cards each with an icon at the top
- Pill badges above the hero like "✨ Applications open" or "New"
- Sparkle, magic wand, rocket, lightning or robot icons
- Typing or typewriter effects, word-rotating headlines, scrambled text, marquee logo strips of fake logos
- Rounded-2xl everything. Use small radii (0–6px) or square corners.
- Drop shadows on dark backgrounds
- Emojis anywhere on the site
- Stock illustrations of diverse people at laptops, isometric illustrations

Copy:
- Never use: unleash, empower, revolutionize, elevate, supercharge, seamless, cutting-edge, game-changing, next-generation, harness, unlock, journey, ecosystem of innovation, "the future of", "where innovation meets", "join the revolution", "built different", "let's dive in"
- No em dashes. Use commas, full stops or colons.
- No fake numbers, no fake testimonials, no invented sponsors, no lorem ipsum
- No exclamation marks except possibly one in the final CTA
- Short sentences. Plain words. Write like a person telling a friend about the event.

---

## 5. What the best hackathon sites do (copy these patterns)

Patterns from ETHGlobal, Hack the North, TreeHacks, HackMIT and MLH:
- **The hero answers the 4 questions instantly:** what it is, where, when, how to join. One primary button, one secondary link.
- **A sticky, minimal nav** with section anchors and an always-visible Register button
- **The schedule as a real timetable** (day tabs, time on the left, event on the right), not cards
- **Prizes shown as numbers first**, big and readable
- **A long, honest FAQ.** Good sites answer everything: cost, team size, beginners, travel, food, what to bring, who owns the code.
- **Sponsors grouped by tier**, clean logos in a grid with lines between (only once real partners are confirmed)
- **Personality comes from the place and the people**, not effects. Hack the North feels like Canada and university life; ours should feel like Kashmir.
- **A clear footer** with organiser info, contact, code of conduct and socials

---

## 6. Page structure

### Home page (`/`)

1. **Nav (sticky):** wordmark "Build for Kashmir" on the left; About, Tracks, Prizes, Schedule, FAQ; gold "Register" button on the right. On mobile: a menu button that opens a full-screen black overlay with large links.

2. **Hero:**
   - Small label: `WOI INDIA · THE GREAT INDIAN STARTUP MONTH`
   - Headline, in 2–3 lines: **Build for Kashmir.**
   - Sub line: *Ideas from the valley, built for the valley.*
   - Info row with divider lines: `Srinagar, J&K` | `November 2026` | `Free to join`
   - Buttons: "Register" (gold, solid) and "See the tracks" (text link with an arrow)
   - A large real photo (Dal Lake or a Srinagar winter scene) beside or below the headline, not behind the text

3. **About (`01 / ABOUT`):**
   - Left: "A hackathon about real problems in J&K."
   - Right: 2 short paragraphs on what it is and who it's for. Mention that you don't need to be a hardcore coder.
   - Below: a 4-number row with real figures only: `₹2L prize pool` · `7 tracks` · `1,500+ attendees expected` · `6 months at Startup Park`

4. **Tracks (`02 / TRACKS`):** a numbered list of 7 rows (01–07). Each row: track name large on the left, focus line on the right, thin divider between rows; hover shifts the row slightly and turns the number gold. End with the note about finalising problem statements with J&K EDI.

5. **How it works (`03 / FORMAT`):** 6 steps as a horizontal timeline on desktop (a line with numbered points), vertical on mobile.

6. **Prizes & support (`04 / PRIZES`):** big numbers: ₹2,00,000 / 3 months / 6 months / 1 month, each with a one-line explanation. Make the "every team gets 1 month of mentorship" point stand out, because it's the most generous part.

7. **Schedule (`05 / SCHEDULE`):** reads from `schedule.ts`. If empty, show "The full schedule goes live once dates are confirmed." When filled: day tabs plus a time and session table.

8. **Judging (`06 / JUDGING`):** a numbered list of the 7 criteria, plus a line about the jury.

9. **After the hackathon (`07 / WHAT STAYS`):** the 6 lasting outcomes as a two-column list. This is the section that shows it's not a one-day event.

10. **Organisers (`08 / ORGANISERS`):** WOI India, The Great Indian Startup Month and J&K EDI as text blocks (logos only once I add the files), plus the past hackathons as short lines for credibility.

11. **Partners:** hidden while the list is empty; meanwhile show "Want to partner? Write to pankaj@woiindia.com".

12. **FAQ (`09 / FAQ`):** an accordion with plus/minus, one open at a time, using native `<details>`/`<summary>` or accessible buttons. Starter questions (mark the ones that need confirming with `// TODO confirm` in `faq.ts`):
    - Who can participate?
    - Do I need to know how to code?
    - How much does it cost? (Free)
    - How big can a team be? (TODO confirm)
    - Can I participate alone?
    - Where exactly is it happening? (TODO venue)
    - Will food be provided? (TODO confirm)
    - Do you cover travel or stay? (TODO confirm)
    - What should I bring?
    - Who owns what we build? (The team. TODO confirm.)
    - How are winners selected?
    - What happens after the hackathon?
    - I want to mentor, judge or sponsor. Who do I contact?

13. **Final CTA:** "Got an idea for Kashmir? Come build it." plus the Register button.

14. **Footer:** wordmark, tagline, contact email, links (Code of Conduct, Rules, woiindia.com, GISM site), socials (from config, hidden if empty), "© 2026 WOI India".

### Other pages
- `/code-of-conduct`: a standard, respectful hackathon code of conduct in plain language (based on the MLH code of conduct, rewritten in our voice)
- `/rules`: eligibility, team rules, original work, use of AI tools allowed and disclosed, judging, prizes. Mark TODOs where details aren't final.
- `not-found.tsx`: a simple 404 in the same style

---

## 7. Quality bar

- Fully responsive: test at 360px, 768px, 1024px, 1440px. No horizontal scroll.
- Accessibility: semantic HTML, one h1, proper heading order, visible focus states (gold outline), alt text, keyboard-navigable nav and FAQ, colour contrast AA or better
- Performance: Lighthouse 95+ on all four scores; `next/image` for every photo; no layout shift
- SEO: metadata (title, description), Open Graph and Twitter tags, an OG image (`app/opengraph-image.tsx` with plain black, the name in Poppins and gold), sitemap, robots, favicon
- Clean code: small components in `components/`, no inline magic numbers repeated everywhere, Tailwind theme tokens for the colours above
- Write a `README.md` explaining how to edit content, swap photos, open registrations and deploy

---

## 8. Final check before you say you're done

Go through the site and confirm:
- [ ] No gradient, glow, blur or glass effect anywhere (search the code for `gradient`, `blur`, `shadow`, `backdrop`)
- [ ] Only Poppins is loaded
- [ ] No em dashes or banned words in any content file
- [ ] No partner logos or unconfirmed facts shown as final
- [ ] All copy comes from `content/`
- [ ] `npm run build` passes with zero warnings
- [ ] It looks like a human designer made it: real photos, strong type, clean lines, nothing generic