import Section from "@/components/Section";
import { OPENING_WORDS } from "@/lib/constants";

/**
 * Deliberately the quietest thing on the site, and it lands directly after a
 * full-bleed photo. Pure type on cream. The rhythm change is the point, so
 * resist adding an image here.
 */
export default function Opening() {
  return (
    <Section surface="light" keepPaddingTop label="A note from the couple">
      <div className="mx-auto max-w-2xl text-center">
        <span
          aria-hidden="true"
          className="font-script block text-4xl opacity-70 sm:text-5xl"
        >
          Welcome
        </span>

        {OPENING_WORDS.map((line) => (
          <p
            key={line}
            className="font-display mt-8 text-lg font-light leading-relaxed sm:text-xl sm:leading-relaxed"
          >
            {line}
          </p>
        ))}
      </div>
    </Section>
  );
}
