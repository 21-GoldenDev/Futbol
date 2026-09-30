import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PackageCards from "@/components/PackageCards";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "G7 Futbol Training packages: $80 for one session, $220 for three, and $350 for five private 1-on-1 sessions.",
};

const faqs = [
  {
    q: "How long is a session?",
    a: "Each session is one hour of private 1-on-1 training.",
  },
  {
    q: "Do unused sessions expire?",
    a: "3-session and 5-session packages are meant to be used consistently. We’ll set a schedule that works for you.",
  },
  {
    q: "What should players bring?",
    a: "Cleats, a water bottle, and a soccer ball if you have one. Cones and extra equipment are provided.",
  },
  {
    q: "Can I train with a friend?",
    a: "These packages are built for 1-on-1 work. Reach out if you want a small-group option.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        kicker="Pricing"
        title="Simple packages. Clear value."
        text="Start with a single session or lock in a pack to build consistency and see faster improvement."
      />

      <section className="bg-black py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <PackageCards highlight />
          <p className="mt-6 text-sm text-white/50">
            Packages can be used across Manhattan, Brooklyn, Staten Island, or another
            agreed location.
          </p>
        </div>
      </section>

      <section className="bg-ink-2 py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="font-display text-4xl tracking-wide text-white">Common questions</h2>
          <dl className="mt-8 space-y-6">
            {faqs.map((item) => (
              <div key={item.q} className="border-b border-white/10 pb-6">
                <dt className="font-heading text-sm uppercase tracking-[0.12em] text-gold">{item.q}</dt>
                <dd className="mt-2 text-sm leading-6 text-white/70">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
