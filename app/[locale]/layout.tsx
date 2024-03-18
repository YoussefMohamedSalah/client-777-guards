import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import HeaderWrapper from "@/components/header/HeaderWrapper";
import FooterWrapper from "@/components/footer/FooterWrapper";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { getDirection } from "@/utils/getDirection";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "777-Guards",
  description: "Bird - Simple and powerful notes & docs for teams",
};

interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

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
      </body>
    </html>
  );
}
