import { getImageProps } from "next/image";

import { SITE } from "@/lib/constants";

const ALT =
  "The Wilts standing together in a lush garden surrounded by ferns and flowering trees";

export default function Hero() {
  // Art direction: a landscape crop above the 768px breakpoint and a portrait
  // crop below it. getImageProps gives us optimized srcSets for both while the
  // browser downloads only the one that matches, unlike two <Image> elements
  // toggled with hidden classes.
  const common = { alt: ALT, sizes: "100vw", priority: true };

  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    ...common,
    src: "/images/HeroDesktop.jpeg",
    width: 1920,
    height: 1078,
    quality: 85,
  });

  const {
    props: { srcSet: mobileSrcSet, ...imgProps },
  } = getImageProps({
    ...common,
    src: "/images/MobileHero.jpeg",
    width: 1280,
    height: 1920,
    quality: 80,
  });

  return (
    <section
      id="hero"
      data-bg="light"
      data-photo=""
      aria-label="Welcome"
      className="relative h-svh min-h-[560px] w-full overflow-hidden"
    >
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={desktopSrcSet}
          sizes="100vw"
        />
        <img
          {...imgProps}
          alt={ALT}
          srcSet={mobileSrcSet}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </picture>

      {/* Scrim, two layers. The linear pass evens out the bright greens top to
          bottom. The radial pass darkens only the center, where the type sits
          on top of a white blouse and would otherwise wash out. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/55"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_65%_50%_at_50%_50%,rgba(0,0,0,0.55),rgba(0,0,0,0.15)_60%,transparent_80%)]"
      />

      {/* Wordmark stays optically centered in the frame. */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
        {/* Staggered wordmark. The script "The" hangs up and to the left of the
            letterspaced "Wilts", overlapping it slightly, so the pair reads on a
            diagonal rather than as a centered stack. Child sizes are in em so the
            whole lockup scales from the single font-size on the h1. */}
        <h1 className="flex flex-col items-start text-5xl leading-none sm:text-6xl lg:text-7xl">
          <span className="font-script -mb-[0.3em] -ml-[0.52em] -rotate-3 text-[0.95em]">
            The
          </span>
          {/* -mr cancels the trailing letter-space so the word is not visually
              pulled off center by it. */}
          <span className="font-display -mr-[0.22em] font-light uppercase tracking-[0.22em]">
            Wilts
          </span>
        </h1>
      </div>

      {/* Date and place sit down at the foot of the frame, away from the
          wordmark. */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-12 text-center text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.55)] sm:pb-16">
        <p className="font-display text-xs font-light uppercase tracking-[0.3em] sm:text-sm sm:tracking-[0.35em]">
          {SITE.date}
        </p>
        <p className="font-display mt-3 text-xs font-light uppercase tracking-[0.3em] sm:text-sm sm:tracking-[0.35em]">
          {SITE.venue}
        </p>
      </div>
    </section>
  );
}
