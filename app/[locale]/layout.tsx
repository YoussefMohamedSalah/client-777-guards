import { Outfit } from "next/font/google";
import "./globals.css";
import "./custom.css";

import HeaderWrapper from "@/components/header/HeaderWrapper";
import FooterWrapper from "@/components/footer/FooterWrapper";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { getDirection } from "@/utils/getDirection";
import type { Metadata } from "next";
import Whatsapp from "@/components/whatsapp/Whatsapp";

const font = Outfit({ subsets: ["latin"] });
interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

export const metadata: Metadata = {
  metadataBase: new URL("https://777-guards.com"),
  title: {
    default: "777 Guards",
    template: "%s | 777 Guards",
  },
  description:
    "Welcome to 777 Guards, where we offer top-notch security solutions provided by experienced professionals, including event security, armed guards, secure transportation, surveillance systems, and tailored services for VIPs and special events. Our comprehensive offerings encompass everything from securing facilities to safeguarding valuable assets, ensuring peace of mind for our clients at all times..",
  openGraph: {
    title: "777 Guards",
    description:
      "Welcome to 777 Guards, where we offer top-notch security solutions provided by experienced professionals, including event security, armed guards, secure transportation, surveillance systems, and tailored services for VIPs and special events. Our comprehensive offerings encompass everything from securing facilities to safeguarding valuable assets, ensuring peace of mind for our clients at all times..",
    url: "https://777-guards.com",
    siteName: "777 Guards",
    locale: "en",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "777 Guards",
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({ children, params }: Props) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale} dir={getDirection(locale)} className="dark">
      <body className={font.className}>
        <HeaderWrapper lang={String(locale)} />
        {children}
        <FooterWrapper lang={String(locale)} />
        <Whatsapp />
      </body>
    </html>
  );
}

