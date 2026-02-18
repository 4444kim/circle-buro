import { setRequestLocale } from "next-intl/server";
import DesignHero from "@/app/components/shared/showCases/design/DesignHeroSection/DesignHero";
import DesignBlocks from "@/app/components/shared/showCases/design/DesignBlocksSection/DesignBlocks";

type Props = { params: Promise<{ locale: string }> };

export default async function DesignPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <DesignHero />
      <DesignBlocks />
    </>
  );
}
