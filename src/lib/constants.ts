/**
 * Site wide content. Anything marked DRAFT is copy I wrote and the couple has
 * not approved. Anything marked TBD is missing information. Both are tracked in
 * SITE.md under Blocking Items.
 */

export const SITE = {
  name: "The Wilts",
  date: "10 . 01 . 2027",
  dateLong: "Friday, October 1st, 2027",
  venue: "The Darby House",
  street: "801 Darby Creek Dr",
  city: "Galloway, Ohio",
  cityZip: "Galloway, OH 43119",
  attire: "Formal",
  ceremonyTime: "5:30 in the evening",
  rsvpDeadline: "September 1st, 2027",
} as const;

/** Primary nav. Details anchors down the page, RSVP is the one real route. */
export const NAV = [
  { label: "Details", href: "/#details" },
  { label: "RSVP", href: "/rsvp" },
] as const;

/** Anchor links for the footer, one per section. */
export const SECTION_LINKS = [
  { label: "Details", href: "#details" },
  { label: "Schedule", href: "#schedule" },
  { label: "Wedding Party", href: "#party" },
  { label: "Travel", href: "#travel" },
  { label: "Questions", href: "#faq" },
] as const;

// DRAFT: written by me, not the couple. Needs their voice and their approval.
export const OPENING_WORDS = [
  "We are getting married on a Friday evening in October, outdoors at The Darby House, with the people we love most standing close by.",
  "Everything you need to know is below. We would love for you to be there.",
] as const;

/**
 * All four schedule photos are 2:3 portrait. They render at their own ratio
 * rather than being cropped, so `width` and `height` are the true intrinsics.
 */
export const SCHEDULE = [
  {
    time: "5:00",
    meridiem: "pm",
    title: "Music Starts",
    detail: "Come early, find a seat, say hello.",
    image: {
      src: "/images/MusicStarts.jpeg",
      width: 1024,
      height: 1536,
      alt: "The couple standing close together in front of a garden gazebo, both smiling at the camera",
    },
  },
  {
    time: "5:30",
    meridiem: "pm",
    title: "Ceremony",
    detail: "Outdoors, weather permitting.",
    image: {
      src: "/images/Ceremony.jpeg",
      width: 1024,
      height: 1536,
      alt: "The couple kissing on a brick path in front of a lattice gazebo",
    },
  },
  {
    time: "6:00",
    meridiem: "pm",
    title: "Cocktail Hour",
    detail: "Drinks and hors d'oeuvres outdoors until seven.",
    image: {
      src: "/images/CocktailHour.jpeg",
      width: 960,
      height: 1440,
      alt: "He kisses her cheek as she laughs, beneath a tree with deep red leaves",
    },
  },
  {
    time: "7:00",
    meridiem: "pm",
    title: "Dinner and Dancing",
    detail: "Indoors, until eleven.",
    image: {
      src: "/images/DinnerDancing.jpeg",
      width: 960,
      height: 1440,
      alt: "He lifts her off her feet, both laughing, beside a garden waterfall",
    },
  },
] as const;

export const WEDDING_PARTY = [
  {
    group: "Bridesmaids",
    people: [
      { name: "Tracia Wellman", role: "Mother of the Bride and Matron of Honor" },
      { name: "Kathleen McEwan", role: "Maid of Honor" },
      { name: "Hallie Geesaman", role: "Bridesmaid" },
      { name: "Erica Swartsell", role: "Bridesmaid" },
      { name: "Shelby Packard", role: "Bridesmaid" },
    ],
  },
  {
    group: "Groomsmen",
    people: [
      { name: "Brayden Beachler", role: "Best Man" },
      { name: "Ethan Copeland", role: "Groomsman" },
      { name: "Wyatt Geesman", role: "Groomsman" },
      { name: "Connor Gowanny", role: "Groomsman" },
      { name: "Owen Baumann", role: "Groomsman" },
      { name: "Henry Wellman", role: "Groomsman" },
    ],
  },
] as const;

/** Client supplied copy, kept close to verbatim. */
export const FAQS = [
  {
    question: "Is there a dress code?",
    answer:
      "We are requesting formal attire for our wedding. We please ask you to refrain from white dresses.",
  },
  {
    question: "Are children invited?",
    answer:
      "While we love your little ones, we kindly ask you to refrain from bringing your children unless otherwise stated on your invitation.",
  },
  {
    question: "Can I bring a plus one?",
    answer:
      "Due to the limited capacity and seating, we can only accommodate those who are formally invited. If you receive a plus one, it will be included on your invitation.",
  },
  {
    question: "Will the wedding be indoors?",
    answer:
      "No. The ceremony and cocktail hour will be held outdoors, weather permitting. Dinner and dancing will be held indoors.",
  },
  {
    question: "Is there parking at the venue?",
    answer:
      "Yes, there is plenty of parking. However, please do not leave your vehicles overnight.",
  },
] as const;

// NOT CURRENTLY SHOWN. The Registry section was removed from the page. Kept here
// because it is real client-supplied content, so it is one import away if the
// section comes back. Neither registry has been created yet either.
export const REGISTRIES = [
  { name: "Crate and Barrel", href: null, note: "Coming soon" },
  { name: "Amazon", href: null, note: "Coming soon" },
] as const;

// TBD: hotel blocks are not booked yet.
export const TRAVEL = {
  note: "Hotel blocks and recommendations are being arranged. We will post them here as soon as they are confirmed.",
  mapHref:
    "https://maps.google.com/?q=The+Darby+House+801+Darby+Creek+Dr+Galloway+OH+43119",
} as const;

/**
 * NOT CURRENTLY SHOWN. The Gallery section was removed from the page. Kept here
 * because the photos and their alt text are real work, so it is one component
 * away if the section comes back.
 *
 * Order here is display order. Filenames are raw Instagram exports, referenced
 * as-is rather than renamed so a re-sync from the same source does not break
 * every path.
 */
export const GALLERY = [
  {
    src: "/images/gallery/669889859_18099330217826372_648608800743440844_n.jpg",
    width: 1440,
    height: 1799,
    alt: "The couple in aprons and name tags at the entrance to a cooking class",
  },
  {
    src: "/images/gallery/473813944_18285577210300228_3580769593980003439_n.jpg",
    width: 1440,
    height: 1796,
    alt: "The couple in front of a large Pixar desk lamp mural",
  },
  {
    src: "/images/gallery/659587741_18354180874224708_4246826520525105835_n.jpg",
    width: 1440,
    height: 1799,
    alt: "The couple holding drinks in front of tall tropical greenery",
  },
  {
    src: "/images/gallery/474329443_18285577165300228_2646850006510027665_n.jpg",
    width: 1440,
    height: 1800,
    alt: "The couple standing beneath the Millennium Falcon at a theme park",
  },
  {
    src: "/images/gallery/566505927_18320112232300228_8730846723447135761_n.jpg",
    width: 1440,
    height: 1920,
    alt: "He leans over and wraps his arms around her at an outdoor table",
  },
  {
    // Lowest resolution of the set at 492px wide, and cropped tight enough that
    // she is cut off at the left edge. Flagged in SITE.md.
    src: "/images/gallery/tucky.png",
    width: 492,
    height: 704,
    alt: "A close up beach selfie of the two of them in the sun",
  },
] as const;
