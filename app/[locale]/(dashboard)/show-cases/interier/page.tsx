import { setRequestLocale } from "next-intl/server";
import InterierHero from "@/app/components/shared/showCases/interier/InterierHero/InterierHero";
import InterierSlider from "@/app/components/shared/showCases/interier/interierBlocks/InterierSlider";

type Props = { params: Promise<{ locale: string }> };

export default async function InterierPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <InterierHero />
      <InterierSlider />
    </>
  );
}
