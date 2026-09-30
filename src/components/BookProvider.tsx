"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { PackageId } from "@/lib/site";

type BookContextValue = {
  isOpen: boolean;
  selectedPackage: PackageId;
  openBook: (pkg?: PackageId) => void;
  closeBook: () => void;
  setSelectedPackage: (pkg: PackageId) => void;
};

const BookContext = createContext<BookContextValue | null>(null);

export function BookProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<PackageId>("single");

  const openBook = useCallback((pkg: PackageId = "single") => {
    setSelectedPackage(pkg);
    setIsOpen(true);
  }, []);

  const closeBook = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({
      isOpen,
      selectedPackage,
      openBook,
      closeBook,
      setSelectedPackage,
    }),
    [isOpen, selectedPackage, openBook, closeBook]
  );

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
}

export function useBook() {
  const ctx = useContext(BookContext);
  if (!ctx) {
    throw new Error("useBook must be used within BookProvider");
  }
  return ctx;
}
