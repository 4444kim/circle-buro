import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import PriceList from "@/app/components/shared/services/priceListSection/PriceList";
import Package from "@/app/components/shared/services/packagesSection/Package";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    ru: "Услуги",
    en: "Services",
  };
  const descriptions: Record<string, string> = {
    ru:
      "Брендинг, визуальная идентичность, веб-дизайн, контент и другие услуги креативного агентства CIRCLE.",
    en:
      "Branding, visual identity, web design, content and other services of CIRCLE creative agency.",
  };
  return {
    title: titles[locale] ?? titles.ru,
    description: descriptions[locale] ?? descriptions.ru,
  };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <PriceList />
      <Package />
    </>
  );
}
