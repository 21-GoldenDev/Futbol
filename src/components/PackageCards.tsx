"use client";

import { CheckIcon } from "@/components/Icons";
import { useBook } from "@/components/BookProvider";
import { PACKAGES, type PackageId } from "@/lib/site";

export default function PackageCards({ highlight = false }: { highlight?: boolean }) {
  const { openBook } = useBook();

  return (
    <div className={`grid gap-4 ${highlight ? "md:grid-cols-3" : "sm:grid-cols-3"}`}>
      {PACKAGES.map((pkg) => (
        <article
          key={pkg.id}
          className="card-glow gold-border flex flex-col rounded-2xl bg-ink-3 p-5 transition-all"
        >
          <p className="font-display text-5xl gold-text">{pkg.price}</p>
          <p className="mt-1 font-heading text-xs uppercase tracking-[0.18em] text-gold">
            {pkg.label}
          </p>
          <ul className="mt-5 flex flex-1 flex-col gap-2.5">
            {pkg.perks.map((perk) => (
              <li key={perk} className="flex items-start gap-2 text-sm text-white/80">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {perk}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => openBook(pkg.id as PackageId)}
            className="gold-btn mt-6 w-full rounded-full py-2.5 text-sm"
          >
            Book Now
          </button>
        </article>
      ))}
    </div>
  );
}
