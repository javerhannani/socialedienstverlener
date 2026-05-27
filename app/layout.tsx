import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bricolage",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "De Sociale Dienstverlener — Javer Hannani",
  description:
    "Freelance jeugdhulpverlening 13–27 jaar in Noord-Holland. Jongerencoaching, casusregie, groeps- en bokscoaching. SKJ geregistreerd.",
  icons: {
    icon: "/logo-mark.png",
    shortcut: "/logo-mark.png",
    apple: "/logo-mark.png",
  },
  openGraph: {
    title: "De Sociale Dienstverlener — Javer Hannani",
    description:
      "Freelance jeugdhulpverlening 13–27 jaar in Noord-Holland. SKJ geregistreerd.",
    type: "website",
    locale: "nl_NL",
    siteName: "De Sociale Dienstverlener",
  },
  twitter: {
    card: "summary_large_image",
    title: "De Sociale Dienstverlener — Javer Hannani",
    description:
      "Freelance jeugdhulpverlening 13–27 jaar in Noord-Holland. SKJ geregistreerd.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${bricolage.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-cream text-ink">{children}</body>
    </html>
  );
}
