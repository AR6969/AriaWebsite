import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/header";
import { Footer, JsonLd } from "@/components/ui";
import { mainOffice, site } from "@/lib/site";
import "./globals.css";
const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "InstaLaw Group | Personal Injury Lawyers",
    template: "%s | InstaLaw Group",
  },
  description:
    "Personal injury representation led by founder Aria Noosha. Serving California and Washington. Call for a free initial consultation.",
  applicationName: site.name,
};
export const viewport: Viewport = { themeColor: "#0f2340" };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.variable}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "LegalService",
            "@id": `${site.url}/#firm`,
            name: site.name,
            url: site.url,
            telephone: site.phone,
            address: {
              "@type": "PostalAddress",
              streetAddress: mainOffice.street.join(", "),
              addressLocality: mainOffice.city,
              addressRegion: mainOffice.state,
              postalCode: mainOffice.zip,
              addressCountry: "US",
            },
            email: site.email,
            image: `${site.url}/team/aria-office.jpg`,
            areaServed: [
              { "@type": "State", name: "California" },
              { "@type": "State", name: "Washington" },
            ],
            founder: {
              "@type": "Person",
              name: "Aria Noosha",
              url: `${site.url}/attorneys/aria-noosha`,
              alumniOf: "Harvard Law School",
            },
          }}
        />
      </body>
    </html>
  );
}
