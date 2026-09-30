import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";
import { InstagramIcon, MailIcon, PhoneIcon } from "@/components/Icons";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a G7 Futbol Training session or ask a question. Training available in Manhattan, Brooklyn, and Staten Island.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Ready to improve?"
        text="Send a booking request and I’ll confirm a time, location, and plan for the session."
        image="/images/cta.jpg"
      />

      <section className="bg-black py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl tracking-wide text-white">Get in touch</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              Prefer to skip the form? Call, text, or message on Instagram and we’ll
              set up a session that fits your schedule.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-white/80">
              <li>
                <a href={CONTACT.phoneHref} className="inline-flex items-center gap-3 whitespace-nowrap hover:text-gold">
                  <PhoneIcon className="text-gold" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={CONTACT.emailHref} className="inline-flex items-center gap-3 hover:text-gold">
                  <MailIcon className="text-gold" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.instagramHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 hover:text-gold"
                >
                  <InstagramIcon className="text-gold" />
                  {CONTACT.instagram}
                </a>
              </li>
            </ul>
          </div>

          <div className="gold-border rounded-2xl bg-ink-3 p-6 lg:col-span-7">
            <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-gold">
              Book a session
            </h3>
            <div className="mt-5">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
