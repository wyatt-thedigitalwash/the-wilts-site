import type { ReactNode } from "react";

/** A page surface. See globals.css. */
export type Surface = "light" | "dark" | "accent";

type Props = {
  id?: string;
  /** Drives the section's background, ink and accent, and the spacing rule. */
  surface: Surface;
  /** Keep top padding even when the previous section shares this surface. */
  keepPaddingTop?: boolean;
  label?: string;
  className?: string;
  children: ReactNode;
};

export default function Section({
  id,
  surface,
  keepPaddingTop,
  label,
  className = "",
  children,
}: Props) {
  return (
    <section
      id={id}
      data-bg={surface}
      data-keep-pt={keepPaddingTop ? "" : undefined}
      aria-label={label}
      className={`px-6 py-24 sm:px-10 sm:py-32 ${className}`}
    >
      {children}
    </section>
  );
}
