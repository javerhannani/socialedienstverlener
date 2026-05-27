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

const SITE_URL = "https://socialedienstverlener.nl";
const TITLE = "De Sociale Dienstverlener — Freelance jeugdhulpverlener Noord-Holland";
const DESCRIPTION =
  "Freelance jeugdhulpverlening 13–27 jaar in Noord-Holland: jongerencoaching, casusregie, groeps- en bokscoaching. Direct inzetbaar voor gemeentes, wijkteams, zorgaanbieders en scholen via ZIN, PGB, detachering of onderaanneming. SKJ geregistreerd.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "jeugdhulpverlener",
    "jeugdhulp",
    "freelance jeugdhulp",
    "jongerencoaching",
    "casusregie",
    "bokscoaching",
    "groepswerk jongeren",
    "Noord-Holland",
    "SKJ geregistreerd",
    "ZIN",
    "PGB",
    "detachering jeugdhulp",
    "Javer Hannani",
  ],
  authors: [{ name: "Javer Hannani" }],
  creator: "Javer Hannani",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo-mark.png",
    shortcut: "/logo-mark.png",
    apple: "/logo-mark.png",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "nl_NL",
    url: SITE_URL,
    siteName: "De Sociale Dienstverlener",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "De Sociale Dienstverlener — Freelancer, voor de jeugd.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: "De Sociale Dienstverlener",
      alternateName: "De Sociale Dienstverlener — Javer Hannani",
      url: SITE_URL,
      image: `${SITE_URL}/og-image.jpg`,
      logo: `${SITE_URL}/logo-full.png`,
      description: DESCRIPTION,
      telephone: "+31633668370",
      email: "info@socialedienstverlener.nl",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Noord-Holland",
      },
      serviceType: [
        "Jongerencoaching",
        "Casusregie",
        "Bokscoaching",
        "Groepswerk",
        "Activiteitenbegeleiding en projecten",
      ],
      sameAs: [
        "https://www.linkedin.com/company/de-sociale-dienstverlener/",
        "https://www.instagram.com/socialedienstverlener/",
      ],
      founder: { "@id": `${SITE_URL}/#javer` },
      provider: { "@id": `${SITE_URL}/#javer` },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Diensten",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Jongerencoaching",
              description:
                "Eén-op-één begeleiding van jongeren (13–27) die vastlopen op school, thuis, op het werk of in zichzelf.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Casusregie",
              description:
                "Coördinatie van complexe trajecten tussen gezin, hulpverleners, school en gemeente met heldere terugkoppeling.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Bokscoaching",
              description:
                "Bokstraining als interventie — werken aan emotieregulatie, zelfbeheersing en lichaamsbewustzijn.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Groepswerk",
              description:
                "Themasessies en trainingen voor groepen jongeren rond weerbaarheid, communicatie of samenwerking.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Activiteitenbegeleiding en projecten",
              description:
                "Inzet bij jongerenprojecten als uitvoerder of mede-ontwerper — losse activiteiten tot meerjarige programma's.",
            },
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#javer`,
      name: "Javer Hannani",
      jobTitle: "Freelance jeugdhulpverlener",
      worksFor: { "@id": `${SITE_URL}/#business` },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Professionele registratie",
          name: "SKJ-registratie",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Opleiding",
          name: "HBO Social Work met excellentieprogramma",
        },
      ],
      knowsAbout: [
        "Jeugdhulpverlening",
        "Jongerencoaching",
        "Casusregie",
        "Bokscoaching",
        "Groepswerk",
      ],
      url: SITE_URL,
      sameAs: [
        "https://www.linkedin.com/company/de-sociale-dienstverlener/",
        "https://www.instagram.com/socialedienstverlener/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "De Sociale Dienstverlener",
      inLanguage: "nl-NL",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${bricolage.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-cream text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
