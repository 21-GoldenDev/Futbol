import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { FlexPinIcon, PinIcon } from "@/components/Icons";
import IconBadge from "@/components/IconBadge";
import { LOCATIONS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Train in Manhattan, Brooklyn, Staten Island, or another convenient spot that fits your schedule.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        kicker="Locations"
        title="NYC training, on your schedule"
        text="Manhattan, Brooklyn, Staten Island — or a flexible meeting point that works for you."
        image="/images/locations.jpg"
      />

      <section className="bg-black py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            {LOCATIONS.map((place) => (
              <article key={place.name} className="gold-border rounded-2xl bg-ink-3 p-6">
                <IconBadge>
                  {place.name === "Flexible Locations" ? <FlexPinIcon /> : <PinIcon />}
                </IconBadge>
                <h2 className="mt-4 font-heading text-xl uppercase tracking-[0.12em] text-white">
                  {place.name}
                </h2>
                <p className="mt-2 text-sm leading-6 text-white/65">{place.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-sm leading-7 text-muted">
            Locations are very flexible. I can work with you to find a convenient
            training spot that fits your schedule — parks, turf fields, or another
            agreed location.
          </p>
          <Link href="/contact" className="gold-btn mt-8 inline-block rounded-full px-6 py-2.5 text-sm">
            Request a time and place
          </Link>
        </div>
      </section>
    </>
  );
}
