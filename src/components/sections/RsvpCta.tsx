import Link from "next/link";

import Section from "@/components/Section";
import { SITE } from "@/lib/constants";

/**
 * The bottom of the arc and the one thing on the page that has to convert.
 *
 * Once the RSVP system is live this section reads the guest's status and, for
 * anyone who has already responded, swaps the ask for a confirmation along the
 * lines of "You're going. See you October 1st." Being asked again after you have
 * already answered is the fastest way to make a site feel like it is not paying
 * attention.
 */
export default function RsvpCta() {
  return (
    <Section id="rsvp" surface="dark" label="RSVP" className="text-center">
      <div className="mx-auto max-w-2xl">
        <span className="font-script block text-5xl opacity-80 sm:text-6xl">
          Will you
        </span>
        <h2 className="font-display -mr-[0.22em] mt-2 text-3xl font-light uppercase tracking-[0.22em] sm:text-4xl">
          Join Us
        </h2>

        <p className="font-display mt-10 text-base font-light leading-relaxed opacity-75 sm:text-lg">
          Please respond by {SITE.rsvpDeadline}.
        </p>

        <Link
          href="/rsvp"
          className="font-display mt-12 inline-block border border-current/40 px-14 py-5 text-[11px] font-light uppercase tracking-[0.3em] transition-colors hover:border-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          RSVP
        </Link>
      </div>
    </Section>
  );
}
