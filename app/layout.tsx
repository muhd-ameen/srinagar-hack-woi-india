import type { Metadata, Viewport } from "next";
import { Ultra } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { RevealObserver } from "@/components/RevealObserver";
import { copy, site } from "@/content/site";
import "./globals.css";

// Stand-in for Mestiza Black, the display face in the brand guidelines. Body text uses
// Helvetica Neue from the system (see --font-sans in globals.css).
const display = Ultra({
  variable: "--font-ultra",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const title = `${site.fullName} · Srinagar, ${site.month}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.organiser, url: site.links.woi.href }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: site.fullName,
    title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#12c6e9",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={display.variable} suppressHydrationWarning>
      <head>
        {/* Marks JS as available so scroll fade-ins never hide content without it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="btn sr-only z-50 px-4 py-2 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          {copy.ui.skipLink}
        </a>
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
