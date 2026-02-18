import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import AboutHero from "@/app/components/shared/about/AboutHeroSection/AboutHero";
import Mission from "@/app/components/shared/about/MissionSection/Mission";
import History from "@/app/components/shared/about/HistorySection/History";
import BrandMark from "@/app/components/shared/about/BrandMarkSection/BrandMark";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    ru: "О нас",
    en: "About us",
  };
  const descriptions: Record<string, string> = {
    ru:
      "CIRCLE — креативное агентство, которое раскрывает потенциал брендов через дизайн и маркетинг.",
    en:
      "CIRCLE — a creative agency that unlocks brand potential through design and marketing.",
  };
  return {
    title: titles[locale] ?? titles.ru,
    description: descriptions[locale] ?? descriptions.ru,
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <AboutHero />
      <Mission />
      <History />
      <BrandMark />
    </>
  );
}
