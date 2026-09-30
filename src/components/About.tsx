import Link from "next/link";
import {
  BallIcon,
  BarsIcon,
  PeopleIcon,
  StrategyIcon,
  TrophyIcon,
} from "@/components/Icons";
import Logo from "@/components/Logo";
import IconBadge from "@/components/IconBadge";
import { ABOUT_POINTS } from "@/lib/site";

const icons = {
  oneOnOne: BallIcon,
  levels: BarsIcon,
  youth: PeopleIcon,
  intelligence: StrategyIcon,
  environment: TrophyIcon,
};

export default function About() {
  return (
    <section className="relative overflow-hidden bg-ink-2 py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 brush-gold opacity-70" />
      <svg
        className="pointer-events-none absolute left-1/2 top-0 h-full w-[62%] -translate-x-1/2 opacity-60"
        viewBox="0 0 800 360"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M80 210 C180 40 250 80 360 90 C490 102 520 30 640 70 C720 96 740 170 690 230 C630 300 470 250 360 260 C220 272 140 310 80 210Z"
          fill="url(#goldBrush)"
          opacity="0.5"
        />
        <defs>
          <linearGradient id="goldBrush" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e8b923" stopOpacity="0.12" />
            <stop offset="45%" stopColor="#e8b923" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#e8b923" stopOpacity="0.04" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <p className="font-heading text-sm uppercase tracking-[0.28em] text-white">About</p>
          <h2 className="mt-1 font-display text-5xl tracking-wide gold-text sm:text-6xl">
            G7 Futbol Training
          </h2>
          <p className="mt-5 text-sm leading-7 text-muted">
            G7 Futbol Training is focused on helping young players develop their
            technical skills, confidence, and overall understanding of the game.
            Through personalized 1-on-1 training, each session is tailored to the
            player&apos;s goals.
          </p>
          <p className="mt-4 text-sm leading-7 text-muted">
            My goal is to create a positive environment where players can improve,
            build confidence, and most importantly, enjoy the game of soccer.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex font-heading text-sm uppercase tracking-[0.16em] text-gold hover:text-gold-light"
          >
            Learn more about G7 →
          </Link>
        </div>

        <div className="flex justify-center overflow-visible px-4 lg:col-span-4">
          <Logo variant="mark" className="h-auto w-full max-w-[220px]" />
        </div>

        <ul className="space-y-4 lg:col-span-4">
          {ABOUT_POINTS.map((point) => {
            const Icon = icons[point.key];
            return (
              <li key={point.title} className="flex items-start gap-3">
                <IconBadge>
                  <Icon />
                </IconBadge>
                <div>
                  <h3 className="font-heading text-sm uppercase tracking-[0.14em] text-white">
                    {point.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-white/60">{point.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
