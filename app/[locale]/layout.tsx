import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
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
    <html lang={locale} dir={getDirection(locale)}>
      <body className={font.className}>
        <Navbar lang={String(locale)} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
