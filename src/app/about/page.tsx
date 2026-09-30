import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Logo from "@/components/Logo";
import IconBadge from "@/components/IconBadge";
import {
  BallIcon,
  BarsIcon,
  PeopleIcon,
  StrategyIcon,
  TrophyIcon,
} from "@/components/Icons";
import { ABOUT_POINTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "G7 Futbol Training helps young players build technical skills, confidence, and a smarter understanding of the game through private 1-on-1 sessions.",
};

const icons = {
  oneOnOne: BallIcon,
  levels: BarsIcon,
  youth: PeopleIcon,
  intelligence: StrategyIcon,
  environment: TrophyIcon,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title="Built for players who want to get better"
        text="Private 1-on-1 training with a simple focus: improve fundamentals, build confidence, and enjoy the game."
      />

      <section className="bg-ink-2 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="font-heading text-xs uppercase tracking-[0.28em] text-gold">The approach</p>
            <h2 className="mt-2 font-display text-5xl tracking-wide text-white">
              Personalized work. Real progress.
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted">
              G7 Futbol Training is focused on helping young players develop their
              technical skills, confidence, and overall understanding of the game.
              Through personalized 1-on-1 training, each session is tailored to the
              player&apos;s goals — whether that&apos;s improving fundamentals,
              building game intelligence, or taking skills to the next level.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              The environment is positive and demanding at the same time: work hard,
              stay focused, and leave the session better than you arrived. Players of
              every level are welcome, from first-touch beginners to advanced athletes
              looking for extra reps.
            </p>
          </div>
          <div className="flex justify-center">
            <Logo variant="mark" className="max-w-[320px]" />
          </div>
        </div>
      </section>

      <section className="bg-black py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-display text-4xl tracking-wide text-white">What players get</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ABOUT_POINTS.map((point) => {
              const Icon = icons[point.key];
              return (
                <article key={point.title} className="gold-border rounded-2xl bg-ink-3 p-5">
                  <IconBadge>
                    <Icon />
                  </IconBadge>
                  <h3 className="mt-4 font-heading text-sm uppercase tracking-[0.14em] text-white">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">{point.text}</p>
                </article>
              );
            })}
          </div>
          <Link
            href="/training"
            className="mt-10 inline-block font-heading text-sm uppercase tracking-[0.16em] text-gold"
          >
            See how training works →
          </Link>
        </div>
      </section>
    </>
  );
}
