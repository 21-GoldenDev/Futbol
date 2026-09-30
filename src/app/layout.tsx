import type { Metadata } from "next";
import { Bebas_Neue, Inter, Oswald } from "next/font/google";
import { BookProvider } from "@/components/BookProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "G7 Futbol Training | Private 1-on-1 Soccer Training in NYC",
    template: "%s | G7 Futbol Training",
  },
  description:
    "Private 1-on-1 futbol training in Manhattan, Brooklyn, and Staten Island. Technical skills, game intelligence, and youth development for players of all levels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${oswald.variable} ${bebas.variable} font-sans antialiased`}
      >
        <BookProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <BookingModal />
        </BookProvider>
      </body>
    </html>
  );
}
