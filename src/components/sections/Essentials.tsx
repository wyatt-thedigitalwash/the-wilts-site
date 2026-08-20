import Image from "next/image";

import Section from "@/components/Section";
import { SITE } from "@/lib/constants";

/** For the guest who wants one fact and to leave. */
const FACTS = [
  { label: "When", value: SITE.dateLong },
  { label: "Ceremony", value: SITE.ceremonyTime },
  { label: "Where", value: SITE.venue, href: "#travel" },
  { label: "Attire", value: SITE.attire, href: "#faq" },
];

/**
 * The four facts laid over the ring shot, which sits contained at its own 2:3
 * proportions with the cream showing around it rather than bleeding to the
 * edges.
 *
 * The facts stack rather than running four across. The source is portrait, so at
 * any sane width a four column row would crush "Friday, October 1st, 2027" into
 * roughly 140px. Stacked, it reads like an invitation instead.
 *
 * No keepPaddingTop here. The previous section is also light, so the spacing
 * rule collapses this section's top padding and the gap above the photo comes
 * from Opening's bottom padding alone. Keeping it would stack the two and leave
 * a 256px hole.
 */
export default function Essentials() {
  return (
    <Section id="details" surface="light" label="The essentials">
      <div className="relative mx-auto w-full max-w-xl">
        <Image
          src="/images/RingShot.jpeg"
          alt="The couple hand in hand, her engagement ring resting against his sleeve"
          width={1280}
          height={1920}
          sizes="(min-width: 640px) 576px, 100vw"
          quality={85}
          className="h-auto w-full"
        />

        {/* Scrim, over the photo only. The blouse and pale denim in this frame
            are bright enough to swallow white type on their own. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/40"
        />

        <div className="absolute inset-0 flex items-center justify-center px-8">
          <dl className="w-full space-y-10 text-center text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.6)] sm:space-y-12">
            {FACTS.map((fact) => (
              <div key={fact.label}>
                <dt className="font-display text-[10px] font-light uppercase tracking-[0.3em] opacity-80">
                  {fact.label}
                </dt>
                <dd className="font-display mt-3 text-lg font-light sm:text-xl">
                  {fact.href ? (
                    <a
                      href={fact.href}
                      className="underline decoration-white/40 underline-offset-8 transition-opacity hover:opacity-70"
                    >
                      {fact.value}
                    </a>
                  ) : (
                    fact.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
