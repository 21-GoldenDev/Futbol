"use client";

import Link from "next/link";
import { CalendarIcon, FlexPinIcon, InstagramIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { useBook } from "@/components/BookProvider";
import PackageCards from "@/components/PackageCards";
import { CONTACT } from "@/lib/site";

const places = ["Manhattan", "Brooklyn", "Staten Island"];

export default function BottomGrid() {
  const { openBook } = useBook();

  return (
    <section className="bg-black py-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-6">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="font-heading text-2xl uppercase tracking-[0.14em] text-white">
              Training Packages
            </h2>
            <Link href="/pricing" className="text-xs uppercase tracking-[0.16em] text-gold hover:text-gold-light">
              Full pricing →
            </Link>
          </div>
          <PackageCards />
        </div>

        <div className="relative overflow-hidden rounded-2xl lg:col-span-3">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/locations.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/88 to-black/70" />
          <div className="relative flex h-full min-h-[320px] flex-col p-6">
            <h2 className="font-heading text-2xl uppercase tracking-[0.12em] text-gold">
              Training Locations
            </h2>
            <ul className="mt-6 space-y-3">
              {places.map((place) => (
                <li key={place} className="flex items-center gap-3 font-heading text-white">
                  <PinIcon className="h-4 w-4 text-gold" />
                  {place}
                </li>
              ))}
              <li className="flex items-center gap-3 font-heading text-white">
                <FlexPinIcon className="h-4 w-4 text-gold" />
                Flexible Locations
              </li>
            </ul>
            <p className="mt-auto pt-8 text-sm leading-6 text-white/70">
              Locations are very flexible. I can work with you to find a convenient
              training spot that fits your schedule.
            </p>
            <Link href="/locations" className="mt-4 text-xs uppercase tracking-[0.16em] text-gold">
              View locations →
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl lg:col-span-3">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/cta.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/72" />
          <div className="relative flex h-full min-h-[320px] flex-col p-6">
            <h2 className="font-heading text-3xl uppercase leading-none tracking-wide text-white">
              Ready to
              <span className="block text-4xl gold-text">Improve?</span>
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/75">
              Book a session today and take your game to the next level.
            </p>
            <button
              type="button"
              onClick={() => openBook("single")}
              className="gold-btn mt-6 inline-flex items-center justify-center gap-2 self-start rounded-full px-5 py-2.5 text-sm"
            >
              <CalendarIcon />
              Book a Session
            </button>
            <div className="mt-auto space-y-3 pt-8 text-sm text-white/85">
              <a href={CONTACT.phoneHref} className="flex items-center gap-3 hover:text-gold">
                <PhoneIcon className="text-gold" />
                {CONTACT.phone}
              </a>
              <a
                href={CONTACT.instagramHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-gold"
              >
                <InstagramIcon className="text-gold" />
                {CONTACT.instagram}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
