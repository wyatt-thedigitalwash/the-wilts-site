import Image from "next/image";

import Section from "@/components/Section";
import { SCHEDULE } from "@/lib/constants";

/**
 * Entries alternate image side so the eye moves down the page rather than
 * reading four identical rows.
 *
 * On phones the alternation is a bleed: the negative margin cancels the
 * section's px-6 so each photo runs flush to one screen edge, left, right, left,
 * right, with its text aligned to the same side. From sm up the photos come back
 * inside the padding and the alternation becomes the two column layout instead.
 *
 * The photos keep their own 2:3 portrait ratio rather than being cropped to a
 * uniform landscape. They are capped at max-w-sm: at full column width a portrait
 * runs over 700px tall, and four of those turn this section into a 3000px
 * scroll that buries the times it exists to communicate.
 */
export default function Schedule() {
  return (
    <Section id="schedule" surface="light" label="Schedule">
      <div className="mx-auto max-w-5xl">
        <header className="text-center">
          <span className="font-script block text-4xl opacity-70 sm:text-5xl">
            The
          </span>
          <h2 className="font-display -mr-[0.22em] mt-1 text-3xl font-light uppercase tracking-[0.22em] sm:text-4xl">
            Evening
          </h2>
        </header>

        <ol className="mt-20 space-y-20 sm:mt-28 sm:space-y-28">
          {SCHEDULE.map((event, i) => (
            <li
              key={event.title}
              className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-14"
            >
              <Image
                src={event.image.src}
                alt={event.image.alt}
                width={event.image.width}
                height={event.image.height}
                sizes="(min-width: 640px) 384px, 85vw"
                quality={85}
                className={`h-auto w-[85vw] max-w-none sm:mx-auto sm:w-full sm:max-w-sm ${
                  i % 2 === 1
                    ? "-mr-6 ml-auto sm:order-2"
                    : "-ml-6"
                }`}
              />

              <div className={i % 2 === 1 ? "text-right sm:order-1" : ""}>
                <p className="font-display text-4xl font-light sm:text-5xl">
                  {event.time}
                  <span className="ml-1 text-lg opacity-60 sm:text-xl">
                    {event.meridiem}
                  </span>
                </p>
                <h3 className="font-display mt-5 text-sm font-light uppercase tracking-[0.28em]">
                  {event.title}
                </h3>
                <p className="font-display mt-4 text-base font-light opacity-70">
                  {event.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
