import { Jost, Parisienne } from "next/font/google";

/**
 * Brand typefaces, self hosted by next/font so there are no external font
 * requests at runtime.
 *
 * Note: the client supplied Monopolix and Aurora Script in /public/fonts. Both
 * were tried and rejected for the wordmark, so nothing loads them right now.
 * They are left on disk in case the direction changes.
 */

// Script face. Carries the "The" in the stacked hero wordmark.
export const parisienne = Parisienne({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

// Display face. Headings and the letterspaced caps in the wordmark.
export const jost = Jost({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
