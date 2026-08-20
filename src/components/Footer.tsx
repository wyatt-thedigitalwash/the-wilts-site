import { SECTION_LINKS, SITE } from "@/lib/constants";

/**
 * Always dark, on every page, so the site closes on a consistent foot.
 *
 * The anchor list is the escape hatch for the two item header nav: anyone who
 * wants to jump to a specific section can, without the header growing to seven
 * links.
 */
export default function Footer() {
  return (
    <footer
      data-bg="dark"
      className="px-6 py-20 sm:px-10"
    >
      <div className="mx-auto max-w-5xl text-center">
        <div className="font-script text-4xl opacity-80 sm:text-5xl">
          {SITE.name}
        </div>

        <nav aria-label="Sections" className="mt-12">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {SECTION_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-display text-[10px] font-light uppercase tracking-[0.25em] opacity-70 transition-opacity hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="font-display mt-14 text-[10px] font-light uppercase tracking-[0.25em] opacity-50">
          {SITE.dateLong}
        </p>
        <p className="font-display mt-2 text-[10px] font-light uppercase tracking-[0.25em] opacity-50">
          {SITE.venue}, {SITE.city}
        </p>
      </div>
    </footer>
  );
}
