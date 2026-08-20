import type { Metadata } from "next";
import Link from "next/link";

import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "RSVP | The Wilts",
  description: `Respond to The Wilts wedding by ${SITE.rsvpDeadline}.`,
  robots: { index: false, follow: false },
};

/**
 * STUB. The real RSVP flow is blocked on the guest list and a database choice.
 *
 * When built this becomes /rsvp/[token], where the token identifies a household
 * so the page can greet them by name on arrival. This bare /rsvp route stays as
 * the fallback for anyone who loses their text link, and is where the first and
 * last name lookup will live.
 *
 * This page exists now only so the header nav does not link to a 404.
 */
export default function RsvpStub() {
  return (
    <main
      data-bg="dark"
      className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center"
    >
      <span className="font-script text-5xl opacity-80 sm:text-6xl">Will you</span>
      <h1 className="font-display -mr-[0.22em] mt-2 text-3xl font-light uppercase tracking-[0.22em] sm:text-4xl">
        Join Us
      </h1>

      <p className="font-display mt-10 max-w-md text-base font-light leading-relaxed opacity-75">
        Our RSVP form is not quite ready. We will text you a link when it opens.
        Please respond by {SITE.rsvpDeadline}.
      </p>

      <Link
        href="/"
        className="font-display mt-12 inline-block border-b border-current/40 pb-1 text-[11px] font-light uppercase tracking-[0.25em] transition-opacity hover:opacity-70"
      >
        Back to the wedding
      </Link>
    </main>
  );
}
