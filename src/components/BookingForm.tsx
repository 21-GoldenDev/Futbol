"use client";

import { FormEvent, useEffect, useState } from "react";
import type { PackageId } from "@/lib/site";
import { PACKAGES } from "@/lib/site";

type BookingFormProps = {
  defaultPackage?: PackageId;
  onSuccess?: () => void;
};

export default function BookingForm({
  defaultPackage = "single",
  onSuccess,
}: BookingFormProps) {
  const [pkg, setPkg] = useState<PackageId>(defaultPackage);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setPkg(defaultPackage);
  }, [defaultPackage]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    onSuccess?.();
  }

  if (submitted) {
    return (
      <div className="px-1 py-6 text-center">
        <p className="font-display text-4xl gold-text">Request Sent</p>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-muted">
          Thanks for reaching out. I&apos;ll confirm your session details by phone
          or Instagram as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="grid gap-1.5 text-sm">
        <span className="font-heading uppercase tracking-wider text-white/70">
          Player name
        </span>
        <input
          required
          name="name"
          className="rounded-lg border border-white/15 bg-black px-3 py-2.5 text-white outline-none focus:border-gold"
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm">
          <span className="font-heading uppercase tracking-wider text-white/70">Email</span>
          <input
            required
            type="email"
            name="email"
            className="rounded-lg border border-white/15 bg-black px-3 py-2.5 text-white outline-none focus:border-gold"
          />
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="font-heading uppercase tracking-wider text-white/70">Phone</span>
          <input
            required
            type="tel"
            name="phone"
            className="rounded-lg border border-white/15 bg-black px-3 py-2.5 text-white outline-none focus:border-gold"
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm">
          <span className="font-heading uppercase tracking-wider text-white/70">Package</span>
          <select
            value={pkg}
            onChange={(e) => setPkg(e.target.value as PackageId)}
            name="package"
            className="rounded-lg border border-white/15 bg-black px-3 py-2.5 text-white outline-none focus:border-gold"
          >
            {PACKAGES.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label} — {item.price}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="font-heading uppercase tracking-wider text-white/70">Location</span>
          <select
            name="location"
            className="rounded-lg border border-white/15 bg-black px-3 py-2.5 text-white outline-none focus:border-gold"
          >
            <option>Manhattan</option>
            <option>Brooklyn</option>
            <option>Staten Island</option>
            <option>Flexible / Other</option>
          </select>
        </label>
      </div>
      <label className="grid gap-1.5 text-sm">
        <span className="font-heading uppercase tracking-wider text-white/70">
          Preferred date
        </span>
        <input
          type="date"
          name="date"
          className="rounded-lg border border-white/15 bg-black px-3 py-2.5 text-white outline-none focus:border-gold"
        />
      </label>
      <label className="grid gap-1.5 text-sm">
        <span className="font-heading uppercase tracking-wider text-white/70">
          Goals / notes
        </span>
        <textarea
          name="notes"
          rows={3}
          className="resize-none rounded-lg border border-white/15 bg-black px-3 py-2.5 text-white outline-none focus:border-gold"
          placeholder="Skill level, position, what you want to work on..."
        />
      </label>
      <button type="submit" className="gold-btn mt-2 rounded-full py-3 text-sm">
        Request Booking
      </button>
    </form>
  );
}
