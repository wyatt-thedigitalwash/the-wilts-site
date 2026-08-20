import Section from "@/components/Section";
import { WEDDING_PARTY } from "@/lib/constants";

/**
 * No portraits exist for the wedding party and none are coming, so this is set
 * as a printed program rather than a grid of faces: two columns, a hairline
 * between them, names over roles.
 *
 * Names are in Jost, not Parisienne. Eleven names in script would break the
 * rule in SITE.md that the script face is for the wordmark and rare accents
 * only, and at this density it would read as decoration rather than a list
 * someone needs to scan.
 */
export default function WeddingParty() {
  return (
    <Section id="party" surface="light" label="Wedding party">
      <div className="mx-auto max-w-4xl">
        <header className="text-center">
          <span className="font-script block text-4xl opacity-70 sm:text-5xl">
            Wedding
          </span>
          <h2 className="font-display -mr-[0.22em] mt-1 text-3xl font-light uppercase tracking-[0.22em] sm:text-4xl">
            Party
          </h2>
        </header>

        <div className="mt-20 grid grid-cols-1 gap-16 sm:mt-28 sm:grid-cols-2 sm:gap-0">
          {WEDDING_PARTY.map((group, i) => (
            <div
              key={group.group}
              className={
                i === 1
                  ? "sm:border-l sm:border-current/15 sm:pl-10 lg:pl-16"
                  : "sm:pr-10 lg:pr-16"
              }
            >
              <h3 className="font-display text-center text-[10px] font-light uppercase tracking-[0.35em] opacity-60">
                {group.group}
              </h3>

              <ul className="mt-12 space-y-10">
                {group.people.map((person) => (
                  <li key={person.name} className="text-center">
                    <p className="font-display text-xl font-light sm:text-2xl">
                      {person.name}
                    </p>
                    <p className="font-display mt-3 text-[10px] font-light uppercase leading-relaxed tracking-[0.2em] opacity-60">
                      {person.role}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
