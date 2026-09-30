"use client";

import { CloseIcon } from "@/components/Icons";
import { useBook } from "@/components/BookProvider";
import BookingForm from "@/components/BookingForm";

export default function BookingModal() {
  const { isOpen, closeBook, selectedPackage } = useBook();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/75"
        aria-label="Close booking form"
        onClick={closeBook}
      />
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-gold/40 bg-ink-2 shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div>
            <p className="font-heading text-xs uppercase tracking-[0.28em] text-gold">
              G7 Futbol Training
            </p>
            <h3 className="font-display text-3xl tracking-wide text-white">Book a Session</h3>
          </div>
          <button type="button" onClick={closeBook} className="text-white/70 hover:text-white">
            <CloseIcon />
          </button>
        </div>
        <div className="px-6 py-6">
          <BookingForm defaultPackage={selectedPackage} />
        </div>
      </div>
    </div>
  );
}
