import Link from "next/link";
import Logo from "@/components/Logo";
import { InstagramIcon, MailIcon, PhoneIcon } from "@/components/Icons";
import { CONTACT, NAV } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/55">
            Private 1-on-1 futbol training for players of all levels in New York City.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-gold">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/70 hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-gold">Locations</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>Manhattan</li>
            <li>Brooklyn</li>
            <li>Staten Island</li>
            <li>Flexible locations</li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-gold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>
              <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 hover:text-gold">
                <PhoneIcon className="text-gold" />
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={CONTACT.emailHref} className="inline-flex items-center gap-2 hover:text-gold">
                <MailIcon className="text-gold" />
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.instagramHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-gold"
              >
                <InstagramIcon className="text-gold" />
                {CONTACT.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} G7 Futbol Training. All rights reserved.
      </div>
    </footer>
  );
}
