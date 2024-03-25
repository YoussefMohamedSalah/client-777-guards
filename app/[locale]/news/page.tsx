import NewsWrapper from "@/components/news/NewsWrapper";

export const metadata = {
  title: "News",
  description: "Here you will find all latest news about Three Sevens Guards company.",
};

interface Props {
  params: { locale: string };
}

export default function NewsPage({ params: { locale } }: Props) {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <NewsWrapper lang={locale} />
    </div>
  );
}
