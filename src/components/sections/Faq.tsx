import Section from "@/components/Section";
import { FAQS } from "@/lib/constants";

/**
 * Static definition list rather than an accordion. Five short answers do not
 * justify shipping client JS, and everything stays findable by browser search
 * and readable by screen readers with nothing to expand.
 */
export default function Faq() {
  return (
    <Section id="faq" surface="light" label="Questions">
      <div className="mx-auto max-w-3xl">
        <header className="text-center">
          <span className="font-script block text-4xl opacity-70 sm:text-5xl">
            Common
          </span>
          <h2 className="font-display -mr-[0.22em] mt-1 text-3xl font-light uppercase tracking-[0.22em] sm:text-4xl">
            Questions
          </h2>
        </header>

        <dl className="mt-16 sm:mt-20">
          {FAQS.map((faq) => (
            <div
              key={faq.question}
              className="border-t border-current/15 py-10 first:border-t-0 first:pt-0"
            >
              <dt className="font-display text-sm font-light uppercase tracking-[0.2em]">
                {faq.question}
              </dt>
              <dd className="font-display mt-5 text-base font-light leading-relaxed opacity-75 sm:text-lg sm:leading-relaxed">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
