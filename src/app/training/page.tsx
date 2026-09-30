import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import IconBadge from "@/components/IconBadge";
import {
  BallIcon,
  BarsIcon,
  PeopleIcon,
  RunIcon,
  ShieldIcon,
  StrategyIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Private 1-on-1 soccer training sessions covering technical skills, game intelligence, and youth development.",
};

const sessions = [
  {
    icon: BallIcon,
    title: "Technical work",
    text: "First touch, passing, dribbling, finishing, and weak-foot development with focused, high-rep drills.",
  },
  {
    icon: StrategyIcon,
    title: "Game intelligence",
    text: "Decision-making, movement off the ball, scanning, and how to play faster under pressure.",
  },
  {
    icon: ShieldIcon,
    title: "Confidence",
    text: "Sessions are structured so players leave with clear wins, not just tired legs.",
  },
  {
    icon: PeopleIcon,
    title: "Youth development",
    text: "Age-appropriate coaching that keeps training serious, supportive, and fun.",
  },
  {
    icon: BarsIcon,
    title: "All skill levels",
    text: "Beginners building fundamentals and advanced players sharpening the details.",
  },
  {
    icon: RunIcon,
    title: "Tailored sessions",
    text: "Every hour is planned around the player’s position, goals, and current level.",
  },
];

export default function TrainingPage() {
  return (
    <>
      <PageHero
        kicker="Training"
        title="One player. One plan. Full attention."
        text="Each session is 1-on-1, so the work is specific — no waiting in line, no generic drills."
      />

      <section className="bg-ink-2 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-5xl tracking-wide text-white">What a session looks like</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              We start with a quick warm-up, then move into technical work matched to
              your goals. The second half of the session applies those skills in
              game-like situations so the training transfers to match day.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sessions.map((item) => (
              <article key={item.title} className="gold-border rounded-2xl bg-ink-3 p-6">
                <IconBadge>
                  <item.icon />
                </IconBadge>
                <h3 className="mt-4 font-heading text-sm uppercase tracking-[0.16em] text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/65">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/pricing" className="gold-btn rounded-full px-6 py-2.5 text-sm">
              View packages
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-6 py-2.5 text-sm text-white hover:border-gold hover:text-gold"
            >
              Ask a question
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
