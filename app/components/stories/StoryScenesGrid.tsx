import type { ReactNode } from "react";

type StoryScenesGridProps = {
  children: ReactNode;
};

export default function StoryScenesGrid({
  children,
}: StoryScenesGridProps) {
  return (
     <section className="border-b border-[var(--lp-border)] px-6 py-16 md:px-12 md:py-20">
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          gap-x-5
          gap-y-12
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {children}
      </div>
    </section>
  );
}