"use client";

import Link from "next/link";
import {
  BarsIcon,
  CalendarIcon,
  PeopleIcon,
  PinIcon,
  RunIcon,
  ShieldIcon,
} from "@/components/Icons";
import IconBadge from "@/components/IconBadge";
import { useBook } from "@/components/BookProvider";
import { HERO_FEATURES } from "@/lib/site";

const icons = {
  technical: BarsIcon,
  game: ShieldIcon,
  personal: RunIcon,
  youth: PeopleIcon,
};

export default function Hero() {
  const { openBook } = useBook();

  return (
    <section className="relative min-h-[560px] overflow-hidden lg:min-h-[620px]">
      <div
        className="absolute inset-0 bg-cover bg-[center_right]"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col justify-center px-4 py-14 lg:min-h-[620px] lg:px-8">
        <p className="mb-4 font-heading text-[11px] uppercase tracking-[0.38em] text-white/80 sm:text-xs">
          Discipline <span className="text-gold">•</span> Development{" "}
          <span className="text-gold">•</span> A Stronger You
        </p>

        <h1 className="max-w-4xl font-display text-[56px] leading-[0.9] tracking-wide text-white sm:text-[76px] lg:text-[92px]">
          G7 FUTBOL
          <span className="block gold-text">TRAINING</span>
        </h1>

        <p className="mt-5 max-w-xl font-heading text-sm uppercase tracking-[0.16em] text-white/85">
          Private 1-on-1 training for players of all levels
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => openBook("single")}
            className="gold-btn inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm"
          >
            <CalendarIcon />
            Book a Session
          </button>
          <Link
            href="/training"
            className="inline-flex items-center rounded-full border border-white/25 px-5 py-2.5 text-sm text-white hover:border-gold hover:text-gold"
          >
            View Training
          </Link>
        </div>

        <div className="mt-10 grid max-w-3xl grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-4">
          {HERO_FEATURES.map((item) => {
            const Icon = icons[item.key];
            return (
              <div key={item.title} className="flex flex-col items-start">
                <IconBadge>
                  <Icon />
                </IconBadge>
                <h3 className="mt-2.5 font-heading text-[11px] uppercase tracking-wider text-white">
                  {item.title}
                </h3>
                <p className="mt-1 max-w-[150px] text-[11px] leading-snug text-white/65">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-black/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-5 gap-y-2 px-4 py-3 font-heading text-[11px] uppercase tracking-[0.2em] text-white/90 lg:px-8">
          <span className="inline-flex items-center gap-2">
            <PinIcon className="h-3.5 w-3.5 text-gold" />
            Manhattan
          </span>
          <span className="hidden text-white/30 sm:inline">|</span>
          <span>Brooklyn</span>
          <span className="hidden text-white/30 sm:inline">|</span>
          <span>Staten Island</span>
          <span className="ml-auto inline-flex items-center gap-2 text-gold">
            <CalendarIcon className="h-3.5 w-3.5" />
            Flexible Locations
          </span>
        </div>
      </div>
    </section>
  );
}
