import type { Metadata } from "next";

import Hero from "@/components/Hero";
import Essentials from "@/components/sections/Essentials";
import Faq from "@/components/sections/Faq";
import Opening from "@/components/sections/Opening";
import RsvpCta from "@/components/sections/RsvpCta";
import Schedule from "@/components/sections/Schedule";
import Travel from "@/components/sections/Travel";
import WeddingParty from "@/components/sections/WeddingParty";

export const metadata: Metadata = {
  title: "The Wilts",
  description:
    "The Wilts are getting married on Friday, October 1st, 2027 at The Darby House in Galloway, Ohio. Schedule, travel, and RSVP.",
};

/**
 * One page. Section order is free: each section declares its own surface, so
 * these can be reordered without anything else needing to change. Adjacent
 * sections sharing a surface collapse the gap between them, which is handled by
 * the spacing rule in globals.css.
 */
export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Opening />
      <Essentials />
      <Schedule />
      <WeddingParty />
      <Travel />
      <Faq />
      <RsvpCta />
    </main>
  );
}
