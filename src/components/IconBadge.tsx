import type { ReactNode } from "react";

export default function IconBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/35 text-gold">
      {children}
    </span>
  );
}
