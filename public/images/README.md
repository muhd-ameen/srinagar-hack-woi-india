# Photos

All images are final (flat illustrations, see below), except `startup-park.jpg` (a rendering of the building) and `startup-school.jpg` (a photo).
To swap any image, replace the file **using the same filename**, then update its `alt` text in
`content/images.ts`.

| File | Where it appears | What the photo should be | Shape and size |
| --- | --- | --- | --- |
| `hero-dal-lake.jpg` | Home, hero background (desktop) and band under the text (mobile), fades into the page | **Done.** Flat illustration of a shikara on Dal Lake at sunrise. Original PNG in `assets/source/`. Keep a pale sky at the top: the headline sits on it. | 3:2 landscape, 1536 × 1024 |
| `people-hacking-01.jpg` | Home, About, large image | **Done.** Flat illustration of a team at a long table by a window, with a samovar and chinars outside. Original PNG in `assets/source/`. Swap for a real photo from a past WOI India event when you have one. | 4:3 landscape, 1448 × 1086 |
| `srinagar-winter.jpg` | Home, About, small photo | **Done.** Flat illustration of a snowy old-city lane with a lit bakery, a shrine spire and mountains. Original PNG in `assets/source/`. | 4:5 portrait, 1122 × 1402 |
| `people-mentoring-01.jpg` | /schedule, full-width band under the page heading | **Done.** Flat illustration of a mentor with two participants at a laptop. Original PNG in `assets/source/`. | 3:2 landscape, 1536 × 1024 |
| `startup-park.jpg` | Home and /prizes, background of the Startup Park workspace prize card, under a dark scrim | **Done.** Rendering of Startup Park, Bengaluru, from startupparknew.vercel.app. Cropped to remove a watermark; original PNG in `assets/source/`. | 1200 × 1102 |
| `startup-school.jpg` | Home and /prizes, background of the Startup School mentorship prize card, under a dark scrim | **Done.** Photo of the lit Startup School sign. Original PNG in `assets/source/`. | 3:2 landscape, 1536 × 1024 |
| `chinar-autumn.jpg` | Home, What stays (wide band), and /how-it-works, full-width band under the page heading | **Done.** Flat illustration of chinars in a Mughal garden. Original PNG kept in `assets/source/`. | 21:9 wide, 1916 × 821 |

## Rules for photos

- The hero and the chinar band are deliberate flat illustrations in the site's palette, with a pale
  sky so their faded edges blend into the white page. Photos of people should be real photography.
- No colour overlays or heavy filters. Every image fades at its edges into the page background through a
  CSS mask (`fade-edges`, `fade-y`, `fade-b` in `app/globals.css`); that is intentional. Images have no captions.
- Make sure you have the right to use every photo. If a photographer needs credit, add it in the
  site footer (images have no captions).
- Export as JPG at the sizes above, quality around 75 to 80. Keep each file under about 400 KB.
  The site is a static export, so photos are served as-is and are not resized on the fly.
- If you use a different aspect ratio, change `ratio` in `content/images.ts` to match.

## Logos

Organiser and partner logos go in `/public/logos`.

- `gism-campaign-logo.png` is the original GISM campaign badge (3000 × 3000, transparent).
- `gism-badge.png` is the web version used in the Organisers section: cropped to the artwork and
  resized to 560 × 670. It has black text, so the site shows it on a light tile.

- `startup-park.png` is the Startup Park by WOI logo, shown in the partners grid. Cropped from the 1080 × 1080
  original in `assets/source/startup-park-logo.png` and kept on its blue tile, since the logo is white.

- `startup-school.png` is the Startup School by WOI logo, shown on the Startup School mentorship prizes.
  Transparent; trimmed and resized from the original in `assets/source/`. `startup-school-onDark.png` is the
  same logo with the "by WOI.eco" line turned white, for the indigo prize box.

To add another organiser logo, put the file here and set `logo` for that organiser in
`content/team.ts` (path, alt text, width and height of the file).
