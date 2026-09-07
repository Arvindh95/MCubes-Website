import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { MotionProvider } from "@/components/motion-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://mcubes.my";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MCUBES Consultancy — Energy, Utility & Engineering Advisory",
    template: "%s | MCUBES Consultancy",
  },
  description:
    "MCUBES Consultancy Sdn Bhd is an independent Malaysian advisory firm providing strategic technical counsel in utility, electrical engineering, solar, smart metering, IT and management since 2017.",
  keywords: [
    "energy consultancy Malaysia",
    "utility advisory",
    "smart metering AMI",
    "electrical engineering consultant",
    "solar energy advisory",
    "MCUBES Consultancy",
  ],
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: SITE_URL,
    siteName: "MCUBES Consultancy",
    title: "MCUBES Consultancy — Energy, Utility & Engineering Advisory",
    description:
      "Independent Malaysian advisory firm delivering strategic technical counsel across utility, engineering, technology and sustainable development.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#08080a] text-foreground">
        <MotionProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
