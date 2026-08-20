"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

import { NAV } from "@/lib/constants";

/** Probe point: the vertical middle of the 80px bar. */
const PROBE = 40;

function subscribe(onChange: () => void) {
  let frame = 0;
  const schedule = () => {
    if (frame) return;
    frame = window.requestAnimationFrame(() => {
      frame = 0;
      onChange();
    });
  };

  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });
  return () => {
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", schedule);
    if (frame) window.cancelAnimationFrame(frame);
  };
}

/**
 * Which surface the bar is currently passing over, or "photo" while it is over a
 * full-bleed image. Returns a plain string so useSyncExternalStore can compare
 * snapshots by value.
 */
function getSnapshot() {
  // :not(header) matters. This bar sets its own data-bg, and being fixed at the
  // top it always spans the probe point, so an unscoped query would match the
  // header first and latch it on whatever surface it happened to adopt.
  const sections = document.querySelectorAll<HTMLElement>("[data-bg]:not(header)");
  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    if (rect.top <= PROBE && rect.bottom > PROBE) {
      // Sections that are a photograph rather than a palette surface opt out,
      // because a translucent cream bar over a dark image is unreadable.
      return section.dataset.photo !== undefined
        ? "photo"
        : (section.dataset.bg ?? "dark");
    }
  }
  // Above the first section or past the last one.
  return window.scrollY < PROBE ? "photo" : "dark";
}

/**
 * Fixed nav that takes on the surface it is passing over.
 *
 * A single "scrolled" style does not work here: the page alternates between
 * cream and near black, so a white bar that reads correctly over the schedule
 * is wrong over Travel. The bar reads the surface beneath it and adopts that
 * surface's colour and ink instead.
 *
 * Over any full-bleed photograph it goes fully transparent with white type,
 * since there is no palette surface to blend into. Mark such sections with
 * data-photo.
 */
export default function Header() {
  const state = useSyncExternalStore(subscribe, getSnapshot, () => "photo");
  const overPhoto = state === "photo";

  // The colour transition is deliberately short. Crossing a light to dark
  // boundary flips surface and ink at the same time, so the crossfade passes
  // through a low contrast midpoint. Keep that window brief.
  return (
    <header
      data-bg={overPhoto ? undefined : state}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        overPhoto ? "" : "border-b border-current/10 backdrop-blur-sm"
      }`}
      style={
        overPhoto
          ? undefined
          : {
              backgroundColor: `color-mix(in srgb, var(--c-${state}) 88%, transparent)`,
            }
      }
    >
      <nav
        aria-label="Primary"
        className="flex h-20 items-center justify-end px-6 sm:px-10"
      >
        <ul className="flex items-center gap-8 sm:gap-12">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`font-display text-xs font-light uppercase tracking-[0.25em] transition-colors hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 sm:text-sm ${
                  overPhoto
                    ? "text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.5)] focus-visible:outline-white"
                    : "focus-visible:outline-current"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
