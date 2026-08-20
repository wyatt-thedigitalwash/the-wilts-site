import Image from "next/image";

import Section from "@/components/Section";
import { SITE, TRAVEL } from "@/lib/constants";

/**
 * Thin on purpose for now. Hotel blocks are not booked, so this is an address, a
 * map link, and an honest line about what is coming. It grows later without
 * anyone noticing it was ever thin, which is the main argument for it being a
 * section rather than its own page.
 *
 * The visual is a photo on a photo: the pavilion at full width with the entrance
 * sign centred on top of it, matted in cream so it reads as a mounted print
 * rather than a rendering glitch. The two sources are close but not identical in
 * shape (3:4 outer, 2:3 inner), so the inner is sized by width and left to find
 * its own height rather than being forced into the outer's ratio.
 *
 * Two different stacking orders, hence the order utilities. From lg up this is a
 * single centred column reading heading, photo, address. Below lg the photo
 * leads and the text sits under it, left aligned, which is the order it has
 * always had on phones. DOM order matches the desktop reading order so the
 * document still makes sense to a screen reader.
 */
export default function Travel() {
  return (
    <Section id="travel" surface="light" label="Travel">
      <div className="mx-auto flex max-w-xl flex-col gap-12 lg:gap-14">
        <header className="order-2 lg:order-1 lg:text-center">
          <span className="font-script block text-4xl opacity-70 sm:text-5xl">
            Getting
          </span>
          <h2 className="font-display -mr-[0.22em] mt-1 text-3xl font-light uppercase tracking-[0.22em] sm:text-4xl">
            There
          </h2>
        </header>

        <div className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-xl">
          <Image
            src="/images/darbyhouse/thedarbyhouse2.jpg"
            alt="The pavilion at The Darby House, an open timber structure framed by trees"
            width={720}
            height={960}
            sizes="(min-width: 1024px) 576px, (min-width: 640px) 448px, 100vw"
            quality={85}
            className="h-auto w-full"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/darbyhouse/thedarbyhouse4.jpg"
              alt="The stone entrance sign for The Darby House at Darby Dan Farm"
              width={640}
              height={960}
              sizes="(min-width: 1024px) 300px, (min-width: 640px) 233px, 52vw"
              quality={85}
              className="h-auto w-[52%] border-4 border-[var(--c-light)] shadow-2xl sm:border-8"
            />
          </div>
        </div>

        <div className="order-3 lg:text-center">
          <address className="font-display text-lg font-light not-italic leading-relaxed sm:text-xl">
            {SITE.venue}
            <br />
            {SITE.street}
            <br />
            {SITE.cityZip}
          </address>

          <a
            href={TRAVEL.mapHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display mt-8 inline-block border-b border-current/40 pb-1 text-[11px] font-light uppercase tracking-[0.25em] transition-opacity hover:opacity-70"
          >
            Open in maps
          </a>

          <p className="font-display mt-12 max-w-md text-base font-light leading-relaxed opacity-70 lg:mx-auto">
            {TRAVEL.note}
          </p>
        </div>
      </div>
    </Section>
  );
}
