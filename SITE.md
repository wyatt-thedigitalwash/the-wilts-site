# The Wilts Website Reference

## Event Info
- Site Name: The Wilts
- Type: Wedding website
- Date: Friday, October 1st, 2027 (verified: Oct 1 2027 does fall on a Friday)
- Venue: The Darby House
- Address: 801 Darby Creek Dr, Galloway, OH 43119
- RSVP Deadline: September 1st, 2027
- Website URL: TBD
- Contact for guest questions: TBD

## Positioning
A wedding site for a couple marrying at The Darby House on a Friday evening in
October. Ceremony and cocktail hour outdoors, dinner and dancing indoors. The
site's job is to be beautiful enough that guests want to look at it, and useful
enough that the couple stops answering the same five questions by text. It
carries a large photo library, so images lead and copy stays short.

## Brand Voice
Warm, plain, unfussy. Short sentences. First person plural, "we" and "our", as
the couple speaking to people who already know and love them. No wedding cliche
("tie the knot", "say I do"). No exclamation points. No em dashes anywhere in
user-facing copy, per CLAUDE.md.

## Visual Direction

### Concept
No overarching gimmick. The site is a warm, restrained, photo-led one-pager.

REJECTED: an earlier concept called "Five Till Eleven" bound the palette to the
time of day, descending from afternoon cream to night as you scrolled. It was
dropped because it needed explaining to land, and wedding guests checking a date
on their phone were never going to decode it. The photography also worked
against it: every supplied photo is flat midday light, so the surface claimed
sunset while the images stayed noon. Do not reintroduce it.

The site is ONE PAGE. Schedule, Travel, Wedding Party and FAQ are sections, not
routes. The content does not justify separate pages and a
one-pager suits guests on phones.

Section order is now FREE. Each section declares its own surface, so sections can
be reordered without anything else changing.

| #  | Section             | Surface |
|----|---------------------|---------|
| 1  | Hero                | photo   |
| 2  | Opening words       | light   |
| 3  | The essentials      | light   |
| 4  | Schedule            | light   |
| 5  | Wedding party       | light   |
| 6  | Travel              | light   |
| 7  | FAQ                 | light   |
| 8  | RSVP call to action | dark    |
| 9  | Footer              | dark    |

Rules:
- Photographs are NEVER tinted or overlaid to match a surface. They stay true.
- Every surface must pass WCAG AA for body text and UI.
- Surfaces are flat. No gradients between sections.
- Full-bleed photo sections carry `data-photo` so the fixed header knows to go
  transparent with white type instead of painting a surface over the image.

### Reference points
- Kinfolk / Cereal magazine for the restraint and the generous photo sizing
- Golden hour film photography, warm highlights and deep green shadow
- Classic engraved invitation typography for the lockups

### Anti-patterns for this project
- Script fonts used for anything but the wordmark and rare accents
- Countdown timers with big ticking numbers
- Stock florals, watercolor washes, chalkboard textures
- Autoplaying music
- Parallax on every section
- Tinting photographs to match the palette

## Colors

Two surfaces plus an unused accent. Declared as CSS variables in `globals.css`
and selected per section with `data-bg`.

| Surface | Background | Ink       | Accent    |
|---------|------------|-----------|-----------|
| light   | `#F7F4EF`  | `#1C2118` | `#9A8556` |
| dark    | `#15120E`  | `#EDE8E0` | `#D9B778` |
| accent  | `#EBDCC8`  | `#3A2A1C` | `#8C6A38` |

`accent` is defined but not used by any section yet. Supporting: deep foliage
green `#2F3A2C`, pulled from the engagement photos, for rules and borders.

NOT contrast-audited yet. Do this before launch.

### Section spacing rule
`globals.css` implements the rule from CLAUDE.md against these three surface
names. Consecutive sections sharing a surface collapse the second one's top
padding; differing surfaces both keep full padding so the transition breathes.

Sections 2 through 7 are all `light`, so the collapse fires between every one of
them. The single surface change on the home page is FAQ into RSVP, which is the
only boundary that keeps a full double gap.

## Typography
- Display Font: Jost (`font-display`, Google, variable weight)
- Script Font: Parisienne (`font-script`, Google, 400)
- Body Font: not chosen yet, currently falls back to Geist (`font-sans`)
- Sizing scale for hero, section headers, body: TBD

Fonts are registered in `src/lib/fonts.ts` and exposed as Tailwind theme vars in
`src/app/globals.css`. The client supplied Monopolix and Aurora Script in
`/public/fonts`; both were tried and rejected for the wordmark and nothing loads
them now. They are still on disk if the direction changes.

## Logo
Wordmark only, no logo file. The hero renders a staggered lockup: "The" in
Parisienne hangs up and to the left, slightly rotated, overlapping "Wilts" in
Jost Light, uppercase and letterspaced. Modeled on a "White Wedding" style
script-over-caps lockup. See `src/components/Hero.tsx`.

## Routes

The site is a one-pager. Schedule, Travel, Wedding Party and FAQ are SECTIONS on
`/`, not pages. The content does not justify separate pages
(Schedule is four lines, Travel is currently nothing) and
a one-pager suits guests on phones. See Visual Direction.

- [x] `/` Home, nine sections built. All images are real.
- [ ] `/rsvp/[token]` RSVP form. Its own route on purpose: it is what gets texted
      out, it is a stateful form, and guests return to it directly.
      A stub `/rsvp` exists now so the nav does not 404.
- [ ] `/admin` Private dashboard, behind real auth, not in nav.
- [ ] `/gallery` The Gallery section was REMOVED from the home page. Photos and
      alt text are kept as `GALLERY` in `src/lib/constants.ts`.

### Nav
The existing two-item header nav is correct for a one-pager and needs no change
in shape: Details anchors down the page, RSVP is the one real route. Update the
hrefs in `src/lib/constants.ts` from `/details` and `/rsvp` to an anchor and the
token route.

Add a footer with anchor links to every section for anyone who wants to jump.

### Section detail

All images are real; no placeholders remain. `priority` is on the hero only and
everything below the fold lazy loads.

1. **Hero.** Built. Full-bleed photo, staggered wordmark, date and venue.
   1 image.
2. **Opening words.** Two or three sentences from the couple. Deliberately the
   quietest thing on the site, and it lands directly after a full-bleed photo.
   Pure type on cream, the rhythm change is the point. No images.
3. **The essentials.** For the guest who wants one fact and to leave. Date,
   venue, attire, time. Letterspaced caps labels over larger values. The venue
   value anchors to Travel. No images.
4. **Schedule.** The four blocks, 5:00 music through 7 to 11 dinner and dancing,
   each paired with an image. The light moves most here. 4 images.
5. **Wedding party.** Eleven people. DECIDED: there are no wedding party photos
   and none are coming, so this is set as a printed program, two columns with a
   hairline between them, names over roles. Names are in Jost, not Parisienne:
   eleven names in script would break the anti-pattern rule above and would read
   as decoration rather than a list someone needs to scan. No images.
6. **Travel.** Address, map link, and one line saying hotel blocks are coming.
   Thin for now, grows later without anyone noticing it was thin. 1 image.
7. **FAQ.** Five questions, client copy near verbatim. Quiet and typographic.
   No images.
8. **RSVP call to action.** The September 1st 2027 deadline stated plainly. A guest who has already responded gets a different
    section here, something like "You're going. See you October 1st," rather than
    being asked again. 1 image.
9. **Footer.** Anchor links to every section, venue, date, photographer credit.

## CTAs
- Primary: RSVP
- Secondary: View the schedule

## Content

### Schedule
- 5:00pm Music starts
- 5:30pm Ceremony
- 6:00pm to 7:00pm Cocktail hour
- 7:00pm to 11:00pm Dinner and dancing

### Wedding Party

Bridesmaids:
- Tracia Wellman, Mother of the Bride and Matron of Honor
- Kathleen McEwan, Maid of Honor
- Hallie Geesaman, Bridesmaid
- Erica Swartsell, Bridesmaid
- Shelby Packard, Bridesmaid

Groomsmen:
- Brayden Beachler, Best Man
- Ethan Copeland, Groomsman
- Wyatt Geesman, Groomsman
- Connor Gowanny, Groomsman
- Owen Baumann, Groomsman
- Henry Wellman, Groomsman

### FAQ
Copy supplied by client, use close to verbatim:
- Is there a dress code? Formal attire. Please refrain from white dresses.
- Are children invited? No, unless stated on your invitation.
- Can I bring a plus one? Only if included on your invitation. Limited capacity.
- Will the wedding be indoors? Ceremony and cocktail hour are outdoors, weather
  permitting. Dinner and dancing are indoors.
- Is there parking? Yes, plenty. Do not leave vehicles overnight.

### Registry
REMOVED from the page. Content kept as `REGISTRIES` in `src/lib/constants.ts` in
case it comes back.
- Crate and Barrel (link TBD)
- Amazon (link TBD)

### Travel
- Hotel blocks and recommendations TBD

## RSVP System

### Guest flow
1. Couple texts each household a link containing a unique party token.
2. Token resolves the household, so the page greets them by name on arrival.
3. Fallback for a lost link: enter first and last name. On match, a beat, then
   "Found you, Hallie." and their party appears.
4. They RSVP for everyone in their household in one pass, per person.
5. Optional: dietary notes, song request, note to the couple.
6. Confirmation on screen and by email via Resend. Editable until Sept 1, 2027.

### Data
- `parties` (households): token, display name, seat count, plus-one allowed
- `guests`: party, first name, last name, nicknames for matching, RSVP status,
  dietary notes
- `submissions`: full audit log, who submitted what and when, so nothing is
  silently overwritten and any bad entry can be reverted
- `song_requests`, `guestbook_notes` (notes need moderation before display)

Plus-ones and children are enforced by the data, not the honor system. If a party
has no plus one, the form does not render the slot.

### Security notes
- The token in the link is the credential. Name lookup is the fallback only.
- Rate limit name lookups so the guest list cannot be enumerated by guessing.
- Never put guest names in URL query strings.
- No autocomplete on the name field, it would leak the guest list.
- Admin dashboard behind real authentication, not a secret URL.

### Admin dashboard
Counts (attending, declined, pending), dietary list for the caterer, song request
playlist, who has not responded, CSV import and export.

## Content Status

### Text Content
- [x] Schedule: final
- [x] FAQ: final, client supplied
- [x] Wedding party list: supplied, spellings need confirming (see Blocking)
- [ ] Couple's first names: MISSING, blocking
- [ ] Home page copy: not written
- [ ] Travel copy: blocked on hotel blocks
- [ ] RSVP confirmation email: not written

### Visual Content
- [x] Hero images: HeroDesktop.jpeg, MobileHero.jpeg in /public/images
- [x] Gallery photos: supplied, but the Gallery section is no longer on the page
- [ ] Wedding party portraits: status unknown
- [ ] Venue photos of The Darby House: status unknown
- [ ] OG image: not made
- [ ] Photographer credit: unknown

### Integrations
- [ ] Database for RSVP: not chosen
- [ ] Resend domain verified: no
- [ ] Google Analytics: N/A for now
- [ ] Admin auth: not chosen

### Blocking Items for Launch
- Couple's first names are unknown. Needed for copy, meta, and alt text.
- Guest list needed to build party and plus-one structure.
- Hero image alt text is generic. Add the couple's names once known
  (`ALT` in `src/components/Hero.tsx`).
- Opening words copy is DRAFT, written by me, not the couple.
  (`OPENING_WORDS` in `src/lib/constants.ts`.)
- `/rsvp` is a STUB page so the nav does not 404. Real flow is blocked on the
  guest list and a database choice.
- Hotel blocks not yet booked, Travel section says so honestly.
- Palette has not been contrast-audited. Do this before launch.

### Spellings to confirm
- "Hallie Geesaman" vs "Wyatt Geesman" are spelled differently in the source
  list. Probably the same family, so one is likely a typo.
- "Connor Gowanny".
- Tracia Wellman is listed as both Mother of the Bride and Matron of Honor.
  Confirm that is intended and how she wants it shown.
- Source list labelled every groomsman "Groomsmen". Using singular "Groomsman"
  on the page.

### Nice-to-Have (Post-Launch)
- Song requests compiled into a shared playlist for the DJ
- Guestbook wall of notes from guests
- Returning visitors greeted by name with a "You're going" state in the nav

## Notes
Client is building this for two close friends. Photo library is large, so lean
heavily on images throughout and keep copy short.
